import { Response } from '../../models/Response';

export interface GlobalInformationPcrc extends Response {
    cliente: string;
    pcrc: string;
    centro_costos_homologacion: string;
    sociedad: string;
    nombre: string;
    idCiudad: string;
    ciudad: string;
    idEstado: number;
    estado: string;
    idCanal?: number;
    descripcion?: string;
}

export interface GetGlobalInformationPcrc extends Response {
    result: Array<GlobalInformationPcrc>
}

export interface FormatedPcrc {
    cliente: string;
    pcrc: string;
    sociedad: string;
    nombre: string;
    idCiudad: string;
    ciudad: string;
    idEstado: number;
    estado: string;
    idCanal?: number;
    descripcion?: string;
    centro_costos_homologacion?: string;
}
export interface PcrcCreate {
    cliente: number;
    ceco: number;
    pcrc: string;
    ciudad: string;
    observacion: string;
    canal?: string;
    descripcion?: string;
}

export interface GetPcrcCreate extends Response {
    result: Array<PcrcCreate>
}


export interface FormatedPcrcCreate {
    'cliente': number;
    'ceco': number;
    'pcrc': string;
    'ciudad': string;
    'observacion': string;
    'canal'?: string;
    'descripcion'?: string;
}

export interface CreatePcrc extends Response {
    result: string;
}

export interface GetInformationClients {
    id: number;
    name: string;
}

export interface GetInformationCostCenters {
    id: number;
    name: string;
}

export interface GetInformationCity {
    id: number;
    name: string;
}


export interface SelectedClients {
    unnasigned: boolean
}

export interface ResponseDataCostCenters extends Response {
    id: number;
    name: string;
}

export interface HistoryPcrc extends Response {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}

export interface GetHistoryPcrc extends Response {
    result: Array<HistoryPcrc>
}

export interface FormatedHistoryPcrc {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}

export interface PcrcEdit {
    idPcrc: string;
    pcrc: string;
    ciudad: string;
    observacion: string;
    idCanal?: string;
    descripcion?: string;
}

export interface GetPcrcEdit extends Response {
    result: Array<PcrcEdit>
}

export interface FormatedEditPcrc {
    'idPcrc': string;
    'pcrc': string;
    'idCiudad': string;
    'ciudad': string;
    'estado': string;
    'observacion': string;
    'idCanal'?: string;
    'descripcion?'?: string;
}

export interface EditPcrc extends Response {
    result: string;
}

export interface SelectOption {
    id: number;
    name: string;
}
