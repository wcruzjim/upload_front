import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { Fieldselectviewer } from '../../../app/interfaces/fieldselectviewer/fieldselectviewer';
@Component({
  selector: 'app-fieldselectviewer',
  templateUrl: './fieldselectviewer.component.html',
  styleUrls: ['./fieldselectviewer.component.scss']
})
export class FieldselectviewerComponent implements OnInit {
  public fields: Fieldselectviewer[] = [];
  public allInput: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) { 
    //This is intentional
  }

  ngOnInit() {
    this.fields = this.data;
    this.fields.forEach(e=>{
      if (e.selected === true) {
        this.allInput = true
      }else{
        this.allInput = false
      }
    })
  }
  
  seletedAll(checked){
    if (checked) {
      this.fields = this.fields.map(e=>{
        e.selected = true;
        return e
      })
    }
    else{
      this.fields = this.fields.map(e=>{
        e.selected = false
        return e
      })
    }
    
  }

}
