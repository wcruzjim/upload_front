import { Response } from "../../models/Response";

export interface Platform {
    plataforma: string;
    sigma: number;
    teo: number;
    llamada: number;
    id: number;
}

export interface GetPlatforms extends Response {
    result: Array<Platform>
}

export interface FormatedPlatform {
    'Nombre Plataforma': string;
    'Marcación Sigma': string;
    'Marcación TEO': string;
    'Aplica Llamada': string;
    id?: number
}

export interface updateCreatePlatform extends Response {
    result: boolean;
}

export interface FormatedClients {
    id: number;
    cliente: string;
    "nombre plataforma"?: Array<string> | string;
    plataformas?: string;
}

export interface FormatedClientsPlatforms {
    id: number;
    cliente: string;
    "nombre plataforma": Array<string>;
}

export interface DataPlatforms {
    plataforma: string;
    estado: string
}

export interface GetClients extends Response {
    result: Array<FormatedClients>
}

export interface SaveClientPlatform extends Response {  
    result: boolean;
}

export interface DataGetValidacionesArr {
    id_validacion: string;
    nombre_validacion: string;
}
export interface DataGetValidaciones extends Response {
    result: DataGetValidacionesArr[];
}
export interface ValidacionesByClientArr {
    id_validacion: string;
    id_dp_clientes: string;
    id_dp_plataforma: string;
}
export interface ValidacionesByClient extends Response {
    result: ValidacionesByClientArr[];
}
export interface NombreValidacion extends Response {
    result: NombreValidacionArr[];
}
export interface NombreValidacionArr extends Response {
    nombre_validacion: string;
}
export interface ActualizacionValidacion extends Response {
    result: boolean;
}

