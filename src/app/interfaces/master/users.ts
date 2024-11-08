import { Response } from "../../models/Response";

export interface UserByCeco extends Response {
    id_dp_usuarios_actualizacion: string;
    documento: string;
    nombre_cargo: string;
    plataforma: string;
    id_dp_plataforma: string;
    usuario: string;
    codigo_logueo: string;
    nombre_ceco: string;
    id_ceco: string;
    nombre: string;
    cliente: string;
    fecha_modificacion: Date;
    nombre_modificacion: string
}

export interface GetUserByCeco extends Response {
    result: Array<UserByCeco>
}

export interface FormatedUsers {
    documento: string;
    nombre: string;
    cargo: string;
    cliente: string;
    "Centro Costo": string;
    plataforma: string;
    usuario: string;
    "Codigo Logueo": string;
    "Fecha Modificacion": Date;
    "Usuario Modificador": string;
    "Historico"?: string;
}

export interface GetHistoryUsers extends Response {
    result: Array<UsersHistory>
}

export interface UsersHistory {
    id: number;
    "Código de logueo": string;
    usuario: string;
    CECO: string;
    "Fecha Modificacion": Date;
    "Usuario Modificador": string;
    plataforma: string;
    Observacion: string;
}

export interface UpdateDeleteUsersObservations extends Response {
    result: boolean
}
