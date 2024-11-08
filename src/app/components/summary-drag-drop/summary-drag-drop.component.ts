import { AfterViewInit, Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SummaryFile } from '../../../app/interfaces/drag-drop-file/drag-drop';


@Component({
  selector: 'app-summary-drag-drop',
  templateUrl: './summary-drag-drop.component.html',
  styleUrls: ['./summary-drag-drop.component.scss']
})
export class SummaryDragDropComponent implements OnInit, AfterViewInit {
  public hiddenColumns: Array<string>;
  public leftedColumns: Array<string>;
  public dataTableSummary: EventEmitter<Array<SummaryFile>> = new EventEmitter();
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) { 
    //this is intentional
  }

  ngOnInit(): void {
    this.leftedColumns = ['indicador','nombre'];
    this.hiddenColumns = ["updated_by","updated_at"];
  }
  
  ngAfterViewInit():void{
    this.dataTableSummary.emit(this.data.data);
  }

}
