import { Component, OnInit, ViewChild, Input, EventEmitter, Output, SimpleChanges, OnChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { IdNameDictionary } from '../../../app/interfaces/Turnos/IdNameDictionary';


@Component({
  selector: 'app-selectmultsearch',
  templateUrl: './selectmultsearch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./selectmultsearch.component.scss']
})
export class SelectmultsearchComponent implements OnInit, OnChanges {

  @Input() data: EventEmitter<object[]>;
  @Input() setDataSelected: EventEmitter<object[]>;
  @Input() iconsValues: EventEmitter<string>;
  @Input() iconsColor: EventEmitter<string>;
  @Input() name: string;
  @Input() id: string;
  @Input() title: string;
  @Input() checkValitation: boolean;
  @Input() multiple: string;
  @Input() disabled: boolean=false;
  @Input() optional: string;
  @Input() touched: EventEmitter<boolean> = new EventEmitter();
  @Output() cambioValor: EventEmitter<object[]> = new EventEmitter();
	@Input() appearance: string = "outline";
  @Input() showAllOption:boolean = true;
  @Input() virtualDOM: boolean=false;

  /** control for the selected bank for multi-selection */
  public bankMultiCtrl: UntypedFormControl = new UntypedFormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: UntypedFormControl = new UntypedFormControl();

  /** list of banks filtered by search keyword */
  public filteredBanksMulti: ReplaySubject<object[]> = new ReplaySubject<object[]>(1);

  public copyForm : Array<IdNameDictionary>= [];
  public alreadySelectedVirtual : Array<string> = [];

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;
  @ViewChild(CdkVirtualScrollViewport) cdkVirtualScrollViewport: CdkVirtualScrollViewport;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();
  public banks : Object[] = [];
  items;
  firstFormGroup: UntypedFormGroup;
  dataSelected: object[] = [];
  public isFilter: [];  
  constructor(public _formBuilder: UntypedFormBuilder, public changeDetectorRef: ChangeDetectorRef) { }

  public clientMultiFilterCtrl: UntypedFormControl = new UntypedFormControl("", [
		Validators.required
	]);

  ngOnInit() {        
    const disabledForm = this.disabled || typeof this.disabled == "undefined" ? true : false;

    if(this.optional && this.optional=="true"){
      this.firstFormGroup = this._formBuilder.group({
        select: [{ value: '', disabled: disabledForm }]
      })
    }else{
      this.firstFormGroup = this._formBuilder.group({
        select: [{ value: '', disabled: disabledForm }, Validators.required]
      })
    }

    if(this.virtualDOM){
      this.firstFormGroup.controls.select.valueChanges.subscribe(data=>{      
        if(data){
          this.copyForm = this.multiple == "true" ? data : [data];
          this.alreadySelectedVirtual = this.multiple == "true" ? data.map(element=>element.id) : [data.id];
        }
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.hasOwnProperty("disabled")){
      const valueDisabled = changes.disabled.currentValue
      if(valueDisabled){
        if(this.firstFormGroup && this.firstFormGroup.controls['select'] ){
          this.firstFormGroup.controls['select'].disable()
        }
      }else{
        if(this.firstFormGroup && this.firstFormGroup.controls['select'] ){
          this.firstFormGroup.controls['select'].enable()
        }
      }
    }
    if(this.checkValitation && this.firstFormGroup){
      this.firstFormGroup.markAllAsTouched();
    }
  }

  ngAfterViewInit() {
    this.validationSetDataSelected();
    this.data.subscribe(data => {
      if (typeof data != 'undefined') {
        this.copyForm = [];
        this.alreadySelectedVirtual = [];
        if (data.length>0) {
          this.banks = data
          this.filteredBanksMulti.next(this.banks.slice());
          this.bankMultiFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
              this.filterBanksMulti();
            });
        }else{
          this.banks = []
          this.filteredBanksMulti = new ReplaySubject<object[]>(1);
          this.firstFormGroup.controls.select.setValue([]);
        }
      }
    });

    if (typeof this.touched != 'undefined') {
      this.touched.subscribe((state: boolean) => {
        if (state) {
          this.firstFormGroup.controls['select'].markAsTouched();
        }else{
          this.firstFormGroup.controls['select'].markAsUntouched();
        }
      });
    }
  }

  validationSetDataSelected(){
    let valuesSelected = []
    
    if (typeof this.setDataSelected != 'undefined') {
      this.setDataSelected.subscribe(data => {
        if (this.multiple=='true') {   
          valuesSelected = data;
        }else{
          valuesSelected = data;
        }
        this.bankMultiCtrl.setValue(valuesSelected);
        this.firstFormGroup.controls.select.setValue(valuesSelected);
        this.changeDetectorRef.detectChanges();
      })
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  toggleSelectAll(selectAllValue: boolean) {

    this.filteredBanksMulti.subscribe((isFilter: []) => this.isFilter = isFilter );

    this.filteredBanksMulti.pipe(take(1), takeUntil(this._onDestroy))
    .subscribe(val => {
        if (selectAllValue) {
          if (this.isFilter.length > 0 || val.length == 0) {
            this.firstFormGroup.controls.select.setValue(val);
          }else{
            this.firstFormGroup.controls.select.setValue(this.banks);
          }
          this.cambioValor.emit(val);
        } else {
          this.cambioValor.emit([])
          this.firstFormGroup.controls.select.setValue([]);
        }
      });
  }

  protected filterBanksMulti() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksMulti.next(this.banks.slice());
      return;
    } else {      
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(
      this.banks.filter(bank => bank[this.name].toLowerCase().indexOf(search) > -1)
    );    
  }


  sendDataItems(values) {
    this.cambioValor.emit(values)
  }

  openedChange(opened): void {    
    if (!opened && this.virtualDOM) {
      this.cdkVirtualScrollViewport.setRenderedContentOffset(0);
    } 
  }

}
