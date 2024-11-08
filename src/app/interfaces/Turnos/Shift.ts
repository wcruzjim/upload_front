import { Response } from "../../models/Response";
import { ErrorsAutomaticShift } from "./AutomaticShifts";
import { IdNameDictionary } from "./IdNameDictionary";

export interface Shift{
    id_tur_turnos_usuarios:number;
    inicio: string;
    fin: string;
    fecha_creacion:string;
    fecha_modificacion:string;
    color_fondo:string;
    categoria_corta:string;
    categoria:string;
    descanso:string;
}


export interface TypeFormats extends Response{
    result: Array<IdNameDictionary>
}

export interface GetInterval extends Response{
    result: Array<string>
}

export interface GetPCRCsForInterval extends Response{
    result: Array<string>
}

export interface GetFormatsType extends Response{
    result: Array<IdNameDictionary>
}

export interface ResultManaulLoad{
    "total":string,
    "ingresados":string,
    "duplicados":string,
    "turnos eliminados":string,
    "novedades rechazadas":string,
    "novedades insertadas":string
}

export interface ConfigCargaFechaActual extends Response{
    result: number
}

export interface ResultShiftIntegration extends Response{
    result: ErrorsAutomaticShift
}
