import { Response } from '../../models/Response';
import { IdNameDictionary } from '../Turnos/IdNameDictionary';

export interface GetEps extends Response {
    result: Array<IdNameDictionary>
}

export interface GetType extends Response {
    result: Array<IdNameDictionary>
}

export interface GetCode extends Response {
    result: Array<IdNameDictionary>
}

export interface DataCreateNoveltyInhability {
    documentoIncapacidad: string,
    documentoSolicitante: string,
    horaInicioNovedad: Date | string,
    horaFinNovedad: Date | string,
    numero_incapacidad: number,
    cod_diagnostico: string,
    id_eps: number,
    id_gh_tipo_incapacidad: number,
    observacion: string,
    prorroga: string,
    idDescripcion: number,
    idEscalamientoAsignado: number,
    documentacion: number
}

