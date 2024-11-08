import { Component,EventEmitter, Output, ChangeDetectorRef} from '@angular/core';
import { SelectionCapacityService } from '../services/selection-capacity/selection-capacity.service';
import { AlertService } from "../services/alert/alert.service";
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { NgxUiLoaderService } from "ngx-ui-loader";
//INTERFACES
import { FormatedWorkTeam, GetGlobalInformationPersonal, 
} from '../interfaces/selection-capacity/selection-capacity';
import { urlBase } from '../../app/config/globals';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private _liveAnnouncer: LiveAnnouncer,
    private readonly ngxService: NgxUiLoaderService,
    private readonly selectionCapacityService: SelectionCapacityService,
    private readonly changeDetectorRef: ChangeDetectorRef,
		public alertservice: AlertService
  ) { 
    //This is intentional
  }
  @Output() file_uploads: EventEmitter<Array<FormatedWorkTeam>> = new EventEmitter();
  public show_file_uploads: boolean = false;
  public personalLefted: Array<string> = [];
  public columnActions: Array<DataActionTable> = [];
  public HiddensColumns: Array<string> = [];


  ngOnInit() {
    this.personalLefted = [ 'id_file_uploads','documento','fecha_carga','estado','nombre_file','tipo_file'];
    this.columnActions = [
      // { id: 1,  name: $localize`Ver`, view: true, icon: 'visibility', class: 'btn-info' },
      { id: 2,  name: $localize`Descargar`, view: true, icon: 'download', class: 'btn-danger' }
    ];
    this.HiddensColumns = ['id_file_uploads'];
    this.get_file_uploads();
  }

  private get_file_uploads(): void {
    this.ngxService.start();
    this.selectionCapacityService.get_file_uploads().then((data: GetGlobalInformationPersonal) => {
      this.ngxService.stop();
      const dataResult = data.result;
      const data_file_uploads = this.format_file_uploads(dataResult['file_uploads']);
      this.show_file_uploads = data_file_uploads.length > 0;
      this.changeDetectorRef.detectChanges();
      this.file_uploads.emit(data_file_uploads);
    }).catch(error => {
      this.ngxService.stop();
      this.alertservice.handleErrorRequest($localize`Error al recuperar los archivos`);
    });
  }

  public resultUploadFile(): void {
    this.get_file_uploads();
  }

  private format_file_uploads(format): Array<FormatedWorkTeam> {
    return format.map(data_file_uploads => {
      return {
        id_file_uploads: data_file_uploads['id_file_uploads'],
        'Archivo digital': data_file_uploads['documento'],
        'fecha de carga': data_file_uploads['fecha_carga'],
        estado: data_file_uploads['estado'],
        'nombre de file': data_file_uploads['nombre_file'],
        'tipo de file': data_file_uploads['tipo_file']
      }
    });
  }

  public showActionWorkTeam(actionEvent) : void{
    switch(actionEvent.action.id){
      case 1:{
        break;
      }
      case 2: {
        this.descargarFile(actionEvent.element.id_file_uploads);
        break;
      }
      default: {
        // Do something
        break;
      }
        
    }
  }

  public descargarFile(idFile):void{
    const url = `${urlBase}uploadFile/downloadFile/${idFile}`;
    window.open(url);
  }

}

export interface DataActionTable {
  id: number;
  style?: Function;
  name: string;
  class: string;
  icon: string;
  view: boolean;
}



