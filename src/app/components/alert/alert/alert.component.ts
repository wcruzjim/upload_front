import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Alert {
  icon: string,
  title: string,
  message: string | string[] | null | undefined; //quitar  null | undefined
  type?: number
}
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Alert) {
    if (typeof data.message === 'object') {
      data.type = 1;
    }else{
      data.type = 0;
    }  
  }

  ngOnInit() {
    // Comentario vacio
  }
}
