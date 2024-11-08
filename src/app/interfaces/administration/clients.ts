import { Response } from '../../models/Response';

export interface GlobalInformationClients extends Response {
    idCliente: string;
    cliente: string;
    sociedad: string;
    fecha: Date;
    idEstado: number;
    estado: string;
}

export interface GetGlobalInformationClients extends Response {
    result: Array<GlobalInformationClients>
}

export interface FormatedClients {
    idCliente: string;
    cliente: string;
    sociedad: string;
    fecha: Date;
    idEstado: number;
    estado: string;
}

export interface ClientCreate {
    idCliente: number;
    cliente: string;
    observacion: string;
}

export interface GetClientCreate extends Response {
    result: Array<ClientCreate>
}


export interface FormatedClientCreate {
    'IdCliente': number;
    'Cliente': string;
    'Observacion': string;
}

export interface CreateClients extends Response {
    result: string;
}

export interface HistoryClients extends Response {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}

export interface GetHistoryClients extends Response {
    result: Array<HistoryClients>
}

export interface FormatedHistoryClients {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}
