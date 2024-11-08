import { Response } from '../../models/Response';

export interface GlobalInformationForecastClients {
    id: string;
    fecha_creacion: Date;
    cliente: string;
    numero_pronosticos: string;
    ajuste: string;
    idEstado: number;
    estado: string;
}


export interface GetGlobalInformationForecastClients extends Response {
    result: Array<GlobalInformationForecastClients>
}


export interface GetInformationForecastClients {
    id: number;
    name: string;
}
export interface FormatedForecastClients {
    id: string;
    fecha_creacion: Date;
    cliente: string;
    numero_pronosticos: string;
    "error_transacciones"?: string;
    "error_duracion"?: string;
    idEstado: number;
    estado: string;
}

export interface FinalFormattedClients {
    id: string;
    fecha_creacion: Date;
    cliente: string;
    "Numero Pronosticos": string;
    "precision transacciones"?: string;
    "precision duracion"?: string;
    idEstado: number;
    estado: string;
}

export interface ForecastClientCreate {
    cliente: string;
    observacion: string;
}

export interface GetForecastClientCreate extends Response {
    result: Array<ForecastClientCreate>
}


export interface FormatedForecastClientCreate {
    'Cliente': string;
    'Observacion': string;
}

export interface CreateForecastClients extends Response {
    result: string;
}

export interface HistoryForecastClients extends Response {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}

export interface GetHistoryForecastClients extends Response {
    result: Array<HistoryForecastClients>
}

export interface FormatedHistoryForecastClients {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}
