import { Response } from "../../models/Response";
import { IdNameDictionary } from "../Turnos/IdNameDictionary";
  
  export interface ExportableAuxiliares{
    "Auxiliar"?: string;
    "Descripción auxiliar"?: string;
    "Identificador a colocar en carga masiva"?: string;
    "nombre_auxiliar_tipo_pago"?: string;
    "IdCargaMasivaColumnaC"?: string;
    ""?: string;
    "id_dp_plataforma"?: string;
    "nombre_plataforma"?: string;
  }

  export interface ExportableAuxiliaresResponse extends Response{
      result: ExportableAuxiliares;
  } 

  export interface GetDocumentsUploadedPayroll extends Response{
    result: Array<IdNameDictionary>
  }

  export interface DataDeletePayroll {
    rangeStart:Date;
    rangeEnd:Date;
    type:string;
    uploadBy:string;
  }

