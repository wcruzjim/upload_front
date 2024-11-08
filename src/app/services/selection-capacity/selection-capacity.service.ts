import { Injectable } from '@angular/core';
import { HelperService } from '../helper/helper.service';
import { GetGlobalInformationPersonal, FormatedWorkTeamSend, FormatedWorkTeamPcrcSend, FormatedFilterWorkTeam, GetAtraccionNewsReasons,
        saveWorkTeam, SelectType, deleteWorkTeamResponse, GetGlobalInformeGeneral, FormatedNewsReasonsSend, FormatedNewsReportSend, GetAtraccionNewsReport }
        from '../../interfaces/selection-capacity/selection-capacity';

@Injectable({
  providedIn: 'root'
})
export class SelectionCapacityService {

  constructor(private readonly helperService: HelperService) { }

  public get_existing_months(): Promise<SelectType> {
    return this.helperService.get('SelectionCapacity/existingMonthsPersonalDistribution');
  }

  public get_atraccion_equipos_trabajos(dateFilter: FormatedFilterWorkTeam): Promise<GetGlobalInformationPersonal> {
    return this.helperService.post('UploadFile/uploadFile', dateFilter);
  }
  public get_file_uploads(): Promise<GetGlobalInformationPersonal> {
    return this.helperService.post('UploadFile/uploadFile',{});
  }

  public getGlobalInformeGeneral(dateFilter: FormatedFilterWorkTeam): Promise<GetGlobalInformeGeneral> {
    return this.helperService.post('SelectionCapacity/atraccionInformeGeneral', dateFilter);
  }

  public get_export_municipalities(keys:String){
    return this.helperService.post('SelectionCapacity/exportMunicipalities',{keys:keys})
  }

  public saveWorkTeam(workTeam:FormatedWorkTeamSend, idAction:number): Promise<saveWorkTeam> {
    return this.helperService.post('SelectionCapacity/saveWorkTeam',{idAction:idAction, workTeam:workTeam} );
  }

  public getAtraccionNewsReasons(): Promise<GetAtraccionNewsReasons> {
    return this.helperService.get('SelectionCapacity/getAtraccionNewsReasons');
  }

  public getAtraccionNewsReport(): Promise<GetAtraccionNewsReport> {
    return this.helperService.get('SelectionCapacity/getAtraccionNewsReport');
  }

  public saveNewsReasons(newsReasons:FormatedNewsReasonsSend, idAction:number): Promise<saveWorkTeam> {
    return this.helperService.post('SelectionCapacity/saveNewsReasons',{idAction:idAction, newsReasons:newsReasons} );
  }

  public saveNewsReport(newsReport:FormatedNewsReportSend, idAction:number): Promise<saveWorkTeam> {
    return this.helperService.post('SelectionCapacity/saveNewsReport',{idAction:idAction, newsReport:newsReport} );
  }

  public getReasons(): Promise<SelectType>{
    return this.helperService.get('SelectionCapacity/getReasons');
  }

  public getAusentFullDay(): Promise<SelectType>{
    return this.helperService.get('SelectionCapacity/getAusentFullDay');
  }

  public getStatus(): Promise<SelectType>{
    return this.helperService.get('SelectionCapacity/getStatus');
  }

  public saveWorkTeamPcrc(workTeamPcrc:FormatedWorkTeamPcrcSend, idAction:number): Promise<saveWorkTeam> {
    return this.helperService.post('SelectionCapacity/saveWorkTeamPcrc',{idAction:idAction, workTeamPcrc:workTeamPcrc} );
  }

  public deleteWorkTeamById( id: number ): Promise<deleteWorkTeamResponse> {
    return this.helperService.post('SelectionCapacity/deleteWorkTeam', { id } );
	}

  public deleteWorkTeamPcrcById( id: number ): Promise<deleteWorkTeamResponse> {
    return this.helperService.post('SelectionCapacity/deleteWorkTeamPcrc', { id } );
	}

}
