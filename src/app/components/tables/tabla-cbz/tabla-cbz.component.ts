import { Component, OnInit, ViewChild, Input, Output, EventEmitter, Injector, SimpleChange, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
// import { LangChangeEvent } from '@ngx-translate/core';
// import { PermissionsService } from '../../../../app/services/permissions/permissions.service';
// import { ExcelService } from '../../../../app/services/excelservice/excelservice.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormdataService } from '../../../../app/services/forms/formdata.service';
import { FormgroupService } from '../../../../app/services/formgroup/formgroup.service';
// import { FieldselectviewerComponent } from '../../../../app/components/fieldselectviewer/fieldselectviewer.component';
import { ColumnActions, ColumnStyle, EmitDataTable, FilteredByColumn, GlobalColumnStyle, HeaderStyle, SelectedColumns, SpecificBackgroundByColumn,ShowMoreOptions} from '../../../../app/interfaces/tables/DataActionTable';
import { cambioValorBtnRow, ConfigActionButton, DinamicInterfaceTable, SelectedElement, SelectMultipleCheckElemnt } from '../../../../app/interfaces/tables/tables';
import { SelectType } from '../../../../app/interfaces/dashboard/powerbi';
import { InputColumns, ColumnsGroup } from '../../../interfaces/tables/DataActionTable';
import { MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { DOCUMENT } from "@angular/common";
import Swal from 'sweetalert2';

declare const $;

@Component({
  selector: 'app-tabla-cbz',
  templateUrl: './tabla-cbz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tabla-cbz.component.scss']
})
export class TablaCbzComponent implements OnInit {
	@Input() levelRow: Array<string> = [];
  @Input() exportableButtonPermission: Array<string>;
  @Input() leftedColumns: Array<string>;
  @Input() rotateColumns: Array<string> = [];
  @Input() rightedColumns: Array<string>;
  @Input() specificStyleByColumn: Array<ColumnStyle>;
  @Input() globalStyleByColumn: Array<GlobalColumnStyle>;
	@Input() specificStyleHeader: Array<HeaderStyle>;
	@Input() i18n: {[key:string]: string} = null;

  @Input() specificBackgroundByColumnEvent: EventEmitter<Array<SpecificBackgroundByColumn>>;
  public specificBackgroundByColumn: Array<SpecificBackgroundByColumn>;

  @Input() skickyColumn: Array<string>;

  @Input() selectableColumns: EventEmitter<SelectedColumns>;
  @Input() columnsIcons: Array<string>;
  @Input() columnsIconColors: Array<string>;
  @Input() columnActions: Array<ColumnActions>;
  @Input() data: object[];
  @Input() dataDisplayColumns;
  @Input() HiddensColumns: object[];
  @Input() actions: object[];
  @Input() width: string;
  @Input() nameDatatable: string;
  @Input() statusElement: object;
  @Input() tooltipHeaders: boolean;
  @Input() tooltipHeadersName: object;
  @Input() headersTable: EventEmitter<object>
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Output() cambioValor: EventEmitter<string> = new EventEmitter();
  @Output() uploadInfo: EventEmitter<boolean> = new EventEmitter();
  @Output() downloadFileCustomized: EventEmitter<boolean> = new EventEmitter();
  @Output() trigerColumnAction: EventEmitter<{idColumn: string, row: object}> = new EventEmitter();
  @Output() seletedElements: EventEmitter<Array<number>> = new EventEmitter();
  @Output() seletedRadioButton: EventEmitter<object> = new EventEmitter();
  @Output() emitEdditedValues: EventEmitter<object> = new EventEmitter();
  @Output() isEditingMode: EventEmitter<boolean> = new EventEmitter();
	@Output() cambioValorBtnRow: EventEmitter<cambioValorBtnRow> = new EventEmitter();
  @Output() showMoreLess: EventEmitter<boolean> = new EventEmitter();

  @Input() dataTable: EventEmitter<object[]>;
  @Input() filterColumnValues: EventEmitter<Array<FilteredByColumn>>;
  @Input() NamesColumns: EventEmitter<object>;
  @Input() isCheckeable: EventEmitter<boolean>;
  @Input() selectAll: string;
  @Input() showSelectAll: string = 'true';
  @Input() selectAllName: string = "";
  @Input() sickyHeader: string;
  @Input() exportData: string = 'true';
  @Input() importData: string = 'false';
  @Input() importDataOption : {tooltip:string, icon:string} = {'tooltip': $localize`Subir información`, 'icon':'cloud_upload'};
  @Input() customizedDownload: string = 'false';
  @Input() pageSize: number[] = [5, 10, 20, 30];
  @Input() showSearch = 'true';
  @Input() showPaginator = 'true';
  @Input() hiddenPaginator = 'false';
  @Input() showBtnUpdate = 'false';
  @Input() inputTableColumns: EventEmitter<InputColumns>;
  @Input() columnsGroups: ColumnsGroup;
  @Input() pagePersonalized: number[];
  @Input() keyCheckedTable: string = 'documento';
  @Input() statusElementCheck: string = 'false';
  @Input() disableElementCheck: string;
  @Input() countRows: number = 0;
  @Input() actionsHeaderName: string = $localize`Acciones`;
  @Input() matSortDisabled: boolean = false;
  @Input() enableEditingFields: boolean = false;
  @Input() noEditableColumns: Array<string> = [];
  @Input() noBtnColumns: Array<string> = [];
  @Input() keyToTrackingEditingValues: string = '';
  @Input() columnActionTooltip: boolean = false;
  @Input() showAlertConfirmEdit: boolean = false;
  @Input() showMore: boolean = false; 
  @Input() showMoreConfiguration: ShowMoreOptions = {
    tooltipMore: $localize`Mostrar más`,
    tooltipLess: $localize`Mostrar menos`, iconMore: 'add', iconLess: 'minimize', currentStatus: 'less',
  };

  @Input() globalStyle;

  public radioSelected;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<object> = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  public copyElementDataSource: object[];
  dataActionEmit;
  viewTable = false;
  showModuleDesactivate = false;
  formControl: UntypedFormGroup;
  isFilter: boolean;
  dataAll = [];
  isFilterSimple: boolean;
  public dataFieldSeleted: Array<SelectedElement>;
  dataSelectedToEmit: Array<number>;
  formgroupservice: FormgroupService;
  formData: FormdataService;
  // excelservice: ExcelService;
  // translate: TranslateService;
  // permission: PermissionsService;
  public disabledBtnUpdate = true;
  public isCopyDataInputs = false;
  public groupColumnsIndexSimple: string[] = [];
  public keySelected: number;

  public hiddenOptionsGroupUpdate = true;

  public columnActionsOnlyNames: Array<string>;
  public specificStyleByColumnOnlyNames: Array<string>;
  public specificStyleByColumnRowOnlyNames: Array<ColumnStyle>;
  public globalStyleByColumnOnlyNames: Array<string> = [];
  public specificBackgroundByColumnOnlyNames: Array<string>;
  public columnsSelecteables: Array<string>;
  public valuesColumnsSelecteables: Array<SelectType>;
  public valuesColumnsSelecteablesPre;
  public filterInitial: (data: object, filter: string) => boolean;

  public columnsInputTables: Array<string>;
  public valuesColumnsInputTables: Array<string>;
  public radioButtonName: string = "";
  public isEditingField: boolean = false;

  @Output() dataSelected:  EventEmitter<{h: string, element: object}> = new EventEmitter();
  @Output() infoTableModifications: EventEmitter<EmitDataTable> = new EventEmitter();

  constructor(public injector: Injector, public matpaginator: MatPaginatorIntl, public dialog: MatDialog, public formBuilder: UntypedFormBuilder, @Inject(DOCUMENT) private readonly document: Document) {
    this.formgroupservice = injector.get<FormgroupService>(FormgroupService);
    this.formData = injector.get<FormdataService>(FormdataService);
    // this.excelservice = injector.get<ExcelService>(ExcelService);
    // this.translate = injector.get<TranslateService>(TranslateService);
    // this.permission = injector.get<PermissionsService>(PermissionsService);
  }
  
  ngOnInit() {
    // this.initializeExportPermissions();
    // this.subscribeToTranslate();
    this.callForm();
    this.initializateValues();

  }

  ngOnChanges(changes: SimpleChange): void { 
    if (changes) {
      this.dataSelectedToEmit = [];
    }
  }

  ngAfterViewInit() {
    if (this.filterColumnValues) {
      this.filterInitial = this.dataSource.filterPredicate;
      this.filterColumnValues.subscribe((data: Array<FilteredByColumn>): void  => {
        this.applyMultipleFilter(data);
      });
    }

    if(this.specificBackgroundByColumnEvent){
      this.specificBackgroundByColumnEvent.subscribe((data: Array<SpecificBackgroundByColumn>) : void  => {
        this.specificBackgroundByColumn = data;
        this.specificBackgroundByColumnOnlyNames = this.specificBackgroundByColumn.map(element=>element.column);        
      });
    }

    if(this.selectableColumns){
      this.selectableColumns.subscribe((data : SelectedColumns) : void  => {
        this.columnsSelecteables = data.columns;
        this.valuesColumnsSelecteables = data.valuesSelect[0];
        this.valuesColumnsSelecteablesPre = data.valuesSelect;
      });
    }

    if (this.inputTableColumns) {
      this.inputTableColumns.subscribe((data: InputColumns): void  => {
        this.columnsInputTables = data.columns;
      });
    }

    this.initializeDataTable();
  }

  public getNameColumni18n(column: string): string {
    return this.i18n &&
      this.i18n.hasOwnProperty(column) ? this.i18n[column] : column;
  }

  public selectOptionRow(h: string, element, event) {
    const selected = (event.target as HTMLSelectElement).value;
    this.inputOptionRow(h, element, selected, this.keyCheckedTable)
    element[h] = selected;
    this.dataSelected.emit({h, element});

  }

  public inputOptionRow(h: string, element: string[], idValue: number | string, key: string = 'id') {

    if (!this.isCopyDataInputs) {
      this.copyElementDataSource = JSON.parse(JSON.stringify(this.dataSource.data))
      this.isCopyDataInputs = true;
    }

    const foundElement = this.dataSource.data.find(el => el[key] === element[key]);
    foundElement[h] = idValue;
    
    if (JSON.stringify(this.copyElementDataSource) === JSON.stringify(this.dataSource.data)) {
      this.disabledBtnUpdate = true;
    } else {
      this.disabledBtnUpdate = false;
    }
  }

  public isColumnIcon(column: string): boolean {
    return this.columnsIcons.includes(column);
  }

  public isColumnIconColor(column: string): boolean {
    return this.columnsIconColors.includes(column);
  }

  updateInputsTable(): void {
    this.infoTableModifications.emit({original: this.copyElementDataSource, changed: this.dataSource.data});
  }

  private initializateValues(): void {
    
    if (this.columnActions) {
      this.columnActionsOnlyNames = this.columnActions.map(element => element.column);
    }
    if (this.specificStyleByColumn) {
      this.specificStyleByColumnOnlyNames = this.specificStyleByColumn.map(element => element.column);
      this.specificStyleByColumnRowOnlyNames = this.specificStyleByColumn;
    }
    if (this.globalStyleByColumn) {
      this.globalStyleByColumnOnlyNames = this.globalStyleByColumn.map(element => element.column);
    }
    if(this.statusElementCheck=='true'){
      const dataInitial = this.dataTable;
      dataInitial.subscribe(data => {
        const initialData = data.filter(element=>element["statusElementCheck"]=="1").map(element=>element[this.keyCheckedTable])
        this.dataSelectedToEmit = initialData;
      });
    }
    
    this.pageSize = this.pagePersonalized ? this.pagePersonalized : this.pageSize;
  }

  // private subscribeToTranslate(): void {
  //   const toTranslated: Array<object> = [{ 'name': 'cantidadpagina', 'paginatorItem': 'itemsPerPageLabel' }, { 'name': 'primerapagina', 'paginatorItem': 'firstPageLabel' },
  //   { 'name': 'anteriorpagina', 'paginatorItem': 'previousPageLabel' }, { 'name': 'siguientepagina', 'paginatorItem': 'nextPageLabel' },
  //   { 'name': 'ultimapagina', 'paginatorItem': 'lastPageLabel' }];

  //     toTranslated.forEach(element => {
  //         this.matpaginator[element['paginatorItem']] = [element['name']];
  //     });

  // }

  // private initializeExportPermissions(): void {
  //   this.radioButtonName = Math.random().toString();
  //   if (typeof this.exportableButtonPermission !== 'undefined') {
  //     this.exportData = this.permission.validateAction(this.exportableButtonPermission).toString();
  //   }
  // }

  convertArrayToObject = (array, key) => {
    const initialValue = {};
    array.forEach(element => {
      initialValue[element] = ''
    });
    return initialValue;
  };

  private initializeDataTable(): void {

    this.dataSelectedToEmit = [];
    if (typeof this.dataTable !== 'undefined') {
      this.initializeDataTypeDataTable();
    }
    if (typeof this.data !== 'undefined') {
      this.initializeDataTypeDataSimple();
    }
  }

  public checkEditableColumnAndElement(column: string, row: Object): boolean{
    if (this.noEditableColumns.length == 0){
      return false
    }

    if(row.hasOwnProperty("enableEditingRow")){
      return !this.noEditableColumns.includes(column) && row["enableEditingRow"]
    }
    else{
      return !this.noEditableColumns.includes(column)
    }
  }

  public showSaveEditedValuesComfirmation(): void{
    if(!this.showAlertConfirmEdit){
      this.saveEditedValues();
      return;
    }
    Swal.fire({
      html: $localize`¿Realmente desea guardar los cambios?`,
      imageUrl: 'assets/img/warning.png',
      imageWidth: 200,
      imageHeight: 201,
      imageAlt: 'Jarvis',
      showDenyButton: true,
      confirmButtonColor: '#1A948D',
      cancelButtonColor: '#615E9B',
      confirmButtonText: 'Aceptar',
      focusCancel: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.saveEditedValues();
      }
      if (result.isDenied) {
        this.discartEditedValues();
      }
    });
  }

  public discartEditedValues(): void{    
    this.isEditingMode.emit(false);    
    this.isEditingField = !this.isEditingField;
    if(this.copyElementDataSource){
      this.dataSource.data = [...this.copyElementDataSource];
    }
    this.isCopyDataInputs = false;
  }


  public saveEditedValues(): void{
    this.isEditingMode.emit(false);
    this.isEditingField = !this.isEditingField;
    let originalAndChanged = {original: this.copyElementDataSource, changed: this.dataSource.data};
    let servicesToUpdate = [];

    if(typeof originalAndChanged.original == "undefined") {
      return;
    }

    for (const key in originalAndChanged.changed) {
      if (JSON.stringify(originalAndChanged.changed[key]) !== JSON.stringify(originalAndChanged.original[key])) {
        servicesToUpdate.push(originalAndChanged.changed[key]);
      }
    }
    originalAndChanged["rowChanged"] = servicesToUpdate
    this.emitEdditedValues.emit(originalAndChanged)
    
  }

  public changePropertyForEdditingMode(newValue, row, column, key="document"){
    if (!this.isCopyDataInputs) {
      this.copyElementDataSource = JSON.parse(JSON.stringify(this.dataSource.data))
      this.isCopyDataInputs = true;
    }
    const foundElement = this.dataSource.data.find(el => el[key] === row[key]);
    foundElement[column] = newValue;
  }


  public initializeDataTypeDataTable(): void {
    
    this.dataTable.subscribe(data => {

      if (typeof data !== 'undefined' && data.length > 0) {
          this.dataDisplayColumns = Object.keys(data[0]);
          const objectForm = this.convertArrayToObject(this.dataDisplayColumns, '')
          this.formControl = this.formBuilder.group(objectForm)
          this.callForm()

          if (typeof this.actions !== 'undefined' && this.actions.length > 0) {
            this.dataDisplayColumns.push('acciones');
          }

          if (typeof this.selectAll !== 'undefined' && (this.selectAll === 'true')) {
              this.dataDisplayColumns.push('selectElements');
          }

          let displaycolums = [];
          if (typeof this.HiddensColumns !== 'undefined') {
            if (this.HiddensColumns.length > 0) {
              displaycolums = this.dataDisplayColumns.filter(el => !this.HiddensColumns.includes(el));
              this.dataDisplayColumns = displaycolums
              this.displayedColumns = displaycolums;
              this.initDataFieldSeleted(displaycolums)
            }
          } else {
            this.displayedColumns = this.dataDisplayColumns;
            this.initDataFieldSeleted(displaycolums)
          }

          this.dataAll = data
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          setTimeout(() => {
            this.dataSource.sort = this.sort;
          }, 1000);

          this.getIndexColumnsGroups(this.dataDisplayColumns);
      }

      if (this.columnsGroups || this.showBtnUpdate === 'true') {
        this.hiddenOptionsGroupUpdate = false;
      }
    });

  }

  private initializeDataTypeDataSimple(): void {
    if (this.data.length > 0) {
      let displaycolums = [];
      this.dataDisplayColumns = Object.keys(this.data[0]);
      if (typeof this.actions !== 'undefined' && this.actions.length > 0) {
        this.dataDisplayColumns.push('acciones');
      }
      // valida si seletc all es true para mostrar los checkbox en la tabla
      if (typeof this.selectAll !== 'undefined' && this.selectAll === 'true') {
        this.dataDisplayColumns.push('selectElements');
      }

      if (typeof this.HiddensColumns !== 'undefined') {
        if (this.HiddensColumns.length > 0) {
          displaycolums = this.dataDisplayColumns.filter(el => !this.HiddensColumns.includes(el));
          this.displayedColumns = displaycolums;
        }
      } else {
        this.displayedColumns = this.dataDisplayColumns;
        this.initDataFieldSeleted(displaycolums)
      }

      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  initDataFieldSeleted(displaycolums) {
    this.dataFieldSeleted = []
    if (typeof displaycolums !== 'undefined') {
      if (displaycolums.length > 0) {
        displaycolums.forEach((e, i) => {
          this.dataFieldSeleted.push({ name: e, selected: false })
        });
      }
    }
  }

  applyFilter(filterValue: string) {
    this.isFilterSimple = true
    this.dataSource.filterPredicate = ((data: String, filter: string) => {
      const dataStr = Object.keys(data)
      .reduce((currentTerm: string, key: string) => {
        return currentTerm + (data)[key] + '◬';
      }, '')
      .toLowerCase();
      return filterValue.split(' ').every((term: string) => dataStr.indexOf(term.trim().toLowerCase()) !== -1);
    });
    this.dataSource.filter = filterValue;
  }

  applyMultipleFilter(dataToFilter: Array<FilteredByColumn>): void {
    this.isFilterSimple = true
    this.dataSource.filterPredicate = (data: String, filter: string) => {
      const dataArray = JSON.parse(filter);
      const sizeFilter = dataArray.length;
      switch (sizeFilter) {
        case 1:
          return dataArray[0]['values'].includes(data[dataArray[0]['column']])
        case 2:
          return (dataArray[0]['values'].includes(data[dataArray[0]['column']]) &&
                  dataArray[1]['values'].includes(data[dataArray[1]['column']]))
        case 3:
        return (dataArray[0]['values'].includes(data[dataArray[0]['column']]) &&
                dataArray[1]['values'].includes(data[dataArray[1]['column']]) &&
                dataArray[2]['values'].includes(data[dataArray[2]['column']]))
        default:
          return true;
      }
    };

    const dataStringify = JSON.stringify(dataToFilter);
    this.dataSource.filter = dataStringify;
  }

  callForm() {

    if (typeof this.formControl !== 'undefined') {
      this.formControl.valueChanges.subscribe(value => {
        let objectValues = {}
        for (const key in value) {
          if (value.hasOwnProperty(key)) {
            const element = value[key].trim().toLowerCase() as string;
            objectValues[key] = element
          }
        }
        const filter = JSON.stringify(value);
        this.isFilterSimple = false
        this.dataSource.filter = filter;
      });
    }
  }

  isAllSelected() {
    const numSelected = this.dataSelectedToEmit.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.selection.clear();
    if(this.isAllSelected()){
      this.dataSource.data.forEach(row => {
        if(this.dataSelectedToEmit.includes(row[this.keyCheckedTable])){
          this.selection.select(row)
        }
      });
    }
  }

  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  actionEmit(action, element, index) {
    this.dataActionEmit = { action, element, index: this.nameDatatable + index };
    this.cambioValor.emit(this.dataActionEmit)
  }

  sendExcel() {
    if(this.customizedDownload == 'true'){
      this.downloadFileCustomized.emit(true);
    }else{
      // this.excelservice.exportAsExcelFile(this.dataSource.filteredData, 'TEO')
    }
  }

  disableOrEnableAllOmision(idaction) {
    const action = { id: idaction }
    const element = this.selection.selected
    const index = this.nameDatatable + 1
    this.dataActionEmit = { action, element, index };
    this.cambioValor.emit(this.dataActionEmit)
    setTimeout(() => {
      this.selection.clear();
    }, 3000);
  }

  // handleListFields() {
  //   let result = this.dialog.open(FieldselectviewerComponent, {
  //     width: '400px',
  //     height: '450px',
  //     data: this.dataFieldSeleted
  //   });
  //   result.afterClosed().subscribe(data => {
  //     let resultAfterClose = []
  //     data.forEach(e1 => {
  //       if (e1.selected) {
  //         resultAfterClose.push(e1.name)
  //       }
  //     });
  //     this.displayedColumns = resultAfterClose
  //   })
  // }

  public isNumber(data: string): boolean {
    return this.leftedColumns.includes(data);
  }

  public shouldRoutate(data: string): boolean {
    return this.rotateColumns.includes(data);
  }

	public isNumberRight(data: string): boolean {
    return this.rightedColumns.includes(data);
  }

  public hasAction(data: string): boolean {
    return this.columnActionsOnlyNames.includes(data);
  }

  public isSelectable(data: string): boolean {
    if(typeof this.columnsSelecteables != "undefined"){      
      this.keySelected = this.columnsSelecteables.indexOf(data);
      return this.columnsSelecteables.includes(data);
    }
    return false;
  }

  public isInput(data: string): boolean {
    return this.columnsInputTables.includes(data);
  }

  public getActionProperty(data: string,property, row: Object = null): string {
    const element = this.columnActions.filter(element => element.column === data);
    const elementToReturn = element[0] ? element[0][property] : '';
    if((property=="style" || property=="styleText") && elementToReturn){
      const styleToReturn = elementToReturn(row,data);
      return styleToReturn;
    }
    
    if (property == 'icon' && typeof elementToReturn == 'function') {
      const iconToReturn = elementToReturn(row,data);
      return iconToReturn;
    }

    if (property == 'iconStyle' && typeof elementToReturn == 'function') {
      const iconStyleToReturn = elementToReturn(row,data);
      return iconStyleToReturn;
    }
    return 'elementToReturn'
  }

  public actionColumnEmit(column: string, row): void {
    const idColumnNoString = this.columnActions.filter(element => element.column === column);
    const idColumn = idColumnNoString[0] ? idColumnNoString[0]['action'] : '';
    this.trigerColumnAction.emit({idColumn, row});
  }

  public getParticularStyle(column: string, value: string, row: Object = null): string {
		let isStyleRow: boolean = false;
		let haveKeyRow: boolean = false;
		let colorStyle: string = '';

    if (this.specificStyleByColumnOnlyNames.includes(column)) {
			this.specificStyleByColumnRowOnlyNames.forEach((element: ColumnStyle) => {
				if (element.column == column && element['row'] !== undefined) {
					haveKeyRow = true;
					if (element.row == row[element.claveRow]) {
						isStyleRow = true;
						colorStyle = element.getColor(value);
						return;
					}
				}
			});

			if (isStyleRow) {
				return colorStyle;
			}

			if (!isStyleRow && !haveKeyRow) {
				haveKeyRow = false;
				isStyleRow = false;
				const style = this.specificStyleByColumn.filter(element => element.column === column);
				return style[0]['getColor'](value);
			}

    } else if (this.specificStyleByColumn[0]['column'] === 'all') {
      return this.specificStyleByColumn[0]['getColor'](row);
    } else {
      // Do Nothing
    }
  }

  public getGlobalStyleByColumn(column: string, row: DinamicInterfaceTable = {}, isHeader: boolean): Object {
		if (this.specificStyleHeader && isHeader) {
			for (const iterator of this.specificStyleHeader) {
				if (iterator.column == column) {
					return iterator.style;
				}
			}
		}

		if (isHeader ) {
			return {fontWeight: 'bold'}
		}

		if (this.isLabelLevel(column)) {
			return row.style;
		}
    if (this.globalStyleByColumnOnlyNames.includes(column)) {
      const style = this.globalStyleByColumn.filter(element => element.column === column);
      return style[0].style;
    } else
      return {};
      // Do Nothing
  }


  public getParticularBackgorundStyle(column: string, value: string, row: Object=null, type:number=1): string{
    if(!this.specificBackgroundByColumn){
      return type == 1 ? "transparent" : "#000"
    }
    if(this.specificBackgroundByColumn && this.specificBackgroundByColumnOnlyNames.includes(column)){
      const style = this.specificBackgroundByColumn.filter(element => element.column == column);
      return style[0]["getBackColor"](value,row,column);
    }else if(this.specificBackgroundByColumn[0]["column"]=="all"){
      return this.specificBackgroundByColumn[0]["getBackColor"](row);
    }else{
      return type == 1 ? "transparent" : "#000"
    }
  }

  public getParticularBackgorundStyleColor(column: string, value: string, row: Object=null, type:number=1): string{
    if(!this.specificBackgroundByColumn){
      return type == 1 ? "transparent" : "#000"
    }
    if(this.specificBackgroundByColumn && this.specificBackgroundByColumnOnlyNames.includes(column)){
      const style = this.specificBackgroundByColumn.filter(element => element.column == column);
      return style[0]["changeColorText"] ? style[0]["getBackColor"](value,row,column,style[0]["changeColorText"]) : style[0]["getBackColor"](value,row,column );
    }
  }

  public haveIconWithBackground(column: string): boolean{
    const style = this.specificBackgroundByColumn.filter(element => element.column == column);
    return style[0]?.icon ? true : false;
  }

  public getParticularTooltipAndIconWithBackground(column: string, value, type:number): string{
    if(typeof this.specificBackgroundByColumn == "undefined"){
      return "";
    }
    
    const style = this.specificBackgroundByColumn.filter(element => element.column == column);
    if(style.length<1){
      return "";
    }
    
    if(type == 1 && style[0].hasOwnProperty("icon") && typeof style[0]["icon"] == "function"){
      const dataReturn = style[0]["icon"](value[column])[type];
      return dataReturn;
    }

    if(type == 1 && style[0].hasOwnProperty("tooltip") && typeof style[0]["tooltip"] == "function"){      
      const dataReturn = style[0]["tooltip"](value[column],value);
      return dataReturn;
    }

    if(type == 1 && !(style[0].hasOwnProperty("icon") && typeof style[0]["icon"] == "function") ){      
      return "";
    }
    const dataReturn = style[0]["icon"](value[column])[type]
    return dataReturn
  }

  public getParticularStyleIconWithBackground(column: string, value ): string{
    const style = this.specificBackgroundByColumn.filter(element => element.column == column);
    return style[0]["iconStyle"] ? style[0]["iconStyle"](value[column]): {}
  }

  public isSkickyColumn(element: string): boolean{
    return this.skickyColumn.includes(element);
  }

  public emitElementsChecked(isChecked: boolean,row:SelectMultipleCheckElemnt,allSelected:boolean): void {  
    if(isChecked){
      if(!allSelected && !this.dataSelectedToEmit.includes(row[this.keyCheckedTable])){
        this.dataSelectedToEmit.push(row[this.keyCheckedTable])
      } else {
        this.masterToggle();
        this.dataSelectedToEmit = this.dataSource.filteredData.map(element => element[this.keyCheckedTable]);
      }
    } else {
      if (!allSelected) {
        this.dataSelectedToEmit = this.dataSelectedToEmit.filter(element => element !== row[this.keyCheckedTable]);
      } else {
        this.dataSelectedToEmit =  [] ;
        this.masterToggle();
      }
    }

    this.seletedElements.emit(this.dataSelectedToEmit);

  }

  public isCheckedIndividual(element: SelectMultipleCheckElemnt ): boolean {
    return this.dataSelectedToEmit.includes(element[this.keyCheckedTable]);
  }

  public changeToggleColumnsGroup( option: number, event: MatButtonToggleChange, toggleGroup: MatButtonToggleGroup ) {
   const idBtn = option;
   let newColumns: string[];

    if (event.source.checked) {
      newColumns = this.dataDisplayColumns.filter((el: string) => this.columnsGroups[idBtn].columns.includes(el));
      newColumns = newColumns.concat(this.displayedColumns);
      newColumns = this.dataDisplayColumns.filter((el: string) => newColumns.includes(el));
    } else {
      newColumns = this.displayedColumns.filter((el: string) => !this.columnsGroups[idBtn].columns.includes(el));
    }
    this.displayedColumns = newColumns;
  }

  public getIndexColumnsGroups(array: string[]): void {
    for (let index = 0; index < array.length; index++) {
      this.groupColumnsIndexSimple.push(array[index]);
    }
  }

  public getActionButtonColor(element, rule): string{
    return rule(element);
  }

  public getIconAction(element, rule): string{
    return typeof rule == "function" ? rule(element) : rule;
  } 

  public getLabelAction(element, rule): string{
    return typeof rule == "function" ? rule(element) : rule;
  } 

  public uploadInfoCBZ(): void{
    this.uploadInfo.emit(true);
  }

  public emitRadioSelected(row): void{
    this.seletedRadioButton.emit(row);
  }

	public isLabelLevel(data: string): boolean {
    return this.levelRow.includes(data);
  }

	public getStylesActions(element:DinamicInterfaceTable = {}):  Object {
		if (typeof element.styleAction !== 'undefined') {
			return element.styleAction['style'];
		}else{
			return {'max-width.px': 'width'};
		}
	}

	public getDisabledAction(element: DinamicInterfaceTable = {}, idButton: string | number ): boolean {
		let response: boolean = true;
		if (typeof element.styleAction != 'undefined') {
			element.styleAction['hidden'].forEach((bu: ConfigActionButton) => {
				if (bu.id == idButton) {
					response = bu.show;
				}
			});
		}

		return response;
	}

	private findValueInArray(array: Array<Object>, valueSearch: string): boolean {
		array.forEach((element: Object) => {
			
		});
		return true;
	}


  public behaviorExcel(keyboardEvent: KeyboardEvent, j: number, i: number): void {
    let isMovingKey = false;
    if (keyboardEvent.code === 'ArrowUp') {
      isMovingKey = true;
      j--;
    }
    if (keyboardEvent.code === 'ArrowLeft') {
      isMovingKey = true;
      i--;
    }
    if (keyboardEvent.code === 'ArrowRight') {
      isMovingKey = true;
      i++;
    }
    if (keyboardEvent.code === 'ArrowDown') {
      isMovingKey = true;
      j++;
    }
    if (this.document.getElementsByName('d' + j + 'c' + i).length > 0) {
      const element = this.document.getElementsByName('d' + j + 'c' + i)[0] as HTMLInputElement
      element.focus();
    }

    if (this.document.getElementsByName('d' + j + 'c' + i).length > 0 && isMovingKey) {
      const element = this.document.getElementsByName('d' + j + 'c' + i)[0] as HTMLInputElement
      element.select();
    }
  }

	public actionBtnRow(column: string, row:Object): void {
		let action = {column: column, row: row};
		this.cambioValorBtnRow.emit(action)
	}


	public checkBtnColumnAndElement(column: string, row: Object): boolean{
		if (this.noBtnColumns.includes(column)){
			return true;
		}
		if (this.noBtnColumns.length == 0){
			return true;
		}
		if(row.hasOwnProperty("enableBtnRow")){
			return !this.noBtnColumns.includes(column) && row["enableBtnRow"];
		}
		return false
	}
		
	public checkBtnStyleColumnAndElement(row: Object): Object{
		if(row.hasOwnProperty("enableBtnRowStyle")){
			return row['enableBtnRowStyle'];
		}
		return {}
	}
	
  public changeStatusAndEmitShowMore(newStatus: string): void{
    this.showMoreConfiguration.currentStatus = newStatus;
    this.showMoreLess.emit(true);
  }

  public startEditingMode():void{
    this.isEditingField = !this.isEditingField;
    this.isEditingMode.emit(true);
  }

}
