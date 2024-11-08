import { Response } from "../../models/Response";
import { SelectValues } from "../generic";
export interface DataTableSelection {
    id:                   string;
    radicado:             string;
    radicado_meucci:      string;
    cliente:              string;
    pcrc:                 string;
    asesores_crecimiento: string;
    asesores_reemplazo:   string;
    requeridos:           string;
    perfil:               string;
    disponibilidad_min:   string;
    vigencia_disp:        string;
    duracion_jornada:     string;
    duracion_contrato:    string;
    formacion:            Date;
    fecha_ojt:            Date;
    conexion:             Date;
    estado:               string;
    analista:             string;
    tipo_solicitud:       string;
    observacion:          string;
    ciudad:               string;
    fecha_carga:          Date;
} 

export interface ResponseDataTableSelection extends Response{   
    result: DataTableSelection[];
}

export interface IformValueSs {
    typeDate:number;
    dateStart:Date;
    dateEnd:Date;
    radicado:String;
}

export interface loadValuesInputsInitialsResponse extends Response{
    result:loadValuesInputsInitials;
}

export interface loadValuesInputsInitials{
    clientes:SelectValues[];
    directores:SelectValues[];
}

export interface filtersResponse extends Response{
    result:SelectValues[];
}