import { Response } from '../../models/Response';

export interface CreateCostCenterAdmin extends Response {
    result: string;
}

export interface GlobalInformationCecosAdmin extends Response {
    ceco: number;
    cecoPais: number;
    descripcion: string;
    areaGeneral: string;
    responsable: string;
    idEstado: number;
    estado: string;
}

export interface GetGlobalInformationCecosAdmin extends Response {
    result: Array<GlobalInformationCecosAdmin>
}

export interface FormatedCostCentersAdmin {
    ceco: number;
    cecoPais: number;
    descripcion: string;
    areaGeneral: string;
    responsable: string;
    director?: string;
    idEstado: number;
    estado: string;
}

export interface CecoCreateAdmin {
    idCeco: number;
    nameCeco: string;
    tipo: string;
    areaGeneral: string;
    idResponsable: number;
    responsable: string;
    homologacion: string;
    observacion: string;
}

export interface GetCecoCreate extends Response {
    result: Array<CecoCreateAdmin>
}

export interface FormatedCecoCreate {
    'IdCeco': number;
    'NameCeco': string;
    'Tipo': string;
    'AreaGeneral': string;
    'IdResponsable': number;
    'Responsable': string;
    'Homologacion': string;
    'Observacion': string;
}

export interface GetInformationResponsible {
    id: number;
    name: string;
}

export interface HistoryCecosAdmin extends Response {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}

export interface GetHistoryCecosAdmin extends Response {
    result: Array<HistoryCecosAdmin>
}

export interface FormatedHistoryCostCentersAdmin {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}
