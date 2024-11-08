import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-viewelementdashboard',
  templateUrl: './viewelementdashboard.component.html',
  styleUrls: ['./viewelementdashboard.component.scss']
})
export class ViewelementdashboardComponent implements OnInit {
  itemTable = [];
  @Output() dataTable: EventEmitter<object> = new EventEmitter();

  constructor( 
    @Inject(MAT_DIALOG_DATA) public item
  ) { 
    // This is intentional
  }

  ngOnInit() {
    // This is intentional
  }

}
