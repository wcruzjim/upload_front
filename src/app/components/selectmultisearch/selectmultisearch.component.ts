import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

export interface Data{
  elements: object[];
  selected: object[];
}

@Component({
  selector: 'app-selectmultisearch',
  templateUrl: './selectmultisearch.component.html',
  styleUrls: ['./selectmultisearch.component.scss']
})
export class SelectmultisearchComponent implements OnInit {

  @Input() data: EventEmitter<Data>;
  @Input() setDataSelected: EventEmitter<object>;
  @Input() name: string;
  @Input() id: string;
  @Input() title: string;
  @Input() multiple: string;
  @Output() cambioValor: EventEmitter<object[]> = new EventEmitter();
  /** control for the selected bank for multi-selection */
  public bankMultiCtrl: UntypedFormControl = new UntypedFormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public bankMultiFilterCtrl: UntypedFormControl = new UntypedFormControl();

  /** list of banks filtered by search keyword */
  public filteredBanksMulti: ReplaySubject<object[]> = new ReplaySubject<object[]>(1);

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();
  banks;
  items;
  firstFormGroup: UntypedFormGroup;
  dataSelected = [];
  constructor(public _formBuilder: UntypedFormBuilder) { }
  ngOnInit() {
    // set initial selection
    // this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);

    // load the initial bank list

    this.firstFormGroup = this._formBuilder.group({
      select: [[], Validators.required]
    })

  }

  ngAfterViewInit() {
    this.data.subscribe(data => {
      let valuesSelected = []
      if (typeof data != 'undefined') {
        if (data.elements.length > 0) {
          this.banks = data.elements
          if (typeof data.selected != 'undefined') {
            this.banks.forEach((e,i)=>{
              data.selected.forEach(element => {
                if (e[this.id] == element[this.id]) {
                  valuesSelected.push(e)
                }
              });
            })
            this.bankMultiCtrl.setValue(valuesSelected);
            this.firstFormGroup.controls.select.setValue(valuesSelected);
          }
          this.filteredBanksMulti.next(this.banks.slice());
          this.bankMultiFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
              this.filterBanksMulti();
            });
        }else{
          this.banks = []
          this.bankMultiCtrl.setValue([]);
          this.firstFormGroup.controls.select.setValue([]);
          this.filteredBanksMulti = new ReplaySubject<object[]>(1);
        }
      }
    })

  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  toggleSelectAll(selectAllValue: boolean) {
    this.filteredBanksMulti.pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(val => {
        if (selectAllValue) {
          this.firstFormGroup.controls.select.setValue(this.banks);
          const value: object[] = val;
          this.cambioValor.emit(value);
        } else {
          this.cambioValor.emit([])
          this.firstFormGroup.controls.select.setValue([]);
        }
      });
  }
  /**

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredBanksMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.multiSelect.compareWith = (a, b) => a && b && a.id === b.id;
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

  getItem(value) {
    this.items = value
  }

  sendDataItems(values) {
    this.cambioValor.emit(values)
  }


}
