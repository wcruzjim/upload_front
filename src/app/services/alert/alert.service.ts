import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { AlertComponent } from '../../components/alert/alert/alert.component';
import {  AlertConfig  } from '../../interfaces/alert/alert'


const  configalert = {
  width:'400px'
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }
  /**
   * Muestra un mensage en forma de modal
   * @param title 
   * @param component 
   * @param message 
   * @param config 
   */
   showAlert<T>(title, component: ComponentType<T>, message:string | string[], icon = null, config = configalert){
    const dialogRef = this.dialog.open(component, {
      width: config.width,
      data: {title: title, message: message, icon: icon}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  /**
   * Muestra un mensaje de confirmacion
   * @param title 
   * @param component 
   * @param message 
   * @param config 
   */
  async showconfirm<T>(title, component: ComponentType<T>, message,config=configalert){
    const dialogRef = this.dialog.open(component, {
      width: config.width,
      data: {title: title, message: message}
    });

    return dialogRef.afterClosed().subscribe(result => {

      return result;
    });
  }


  handleErrorRequest(message: string | string[]){
    this.showAlert('Aviso', AlertComponent, message, 'error')
  }
  
  alert( config : AlertConfig ){
    this.showAlert( config.title , AlertComponent, config.message, config.type)
  }

}
