import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlerComponent } from '../../../app/components/errores/error_handler/error_handler.component';
const  configalert = {
  width:'95%',
  height: '95%'
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(
    public dialog: MatDialog
  ) {
    //This is intentional
  }
  
  /**
   * Muestra un mensage en forma de modal
   * @param datos 
   * @param config 
   */
  showAlert(datos, config=configalert){
    this.dialog.open(ErrorHandlerComponent, {
      width: config.width,
      height: config.height,
      data: {dato: datos}
    });
  }

  showAlertReturnObservable(datos, config=configalert, urlRedirect="", inputFile={}){
    return this.dialog.open(ErrorHandlerComponent, {
      width: config.width,
      height: config.height,
      data: {dato: datos, uploadFlag:urlRedirect, file:inputFile},
    });
  }


}
