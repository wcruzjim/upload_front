import { Response } from "../../models/Response";

export interface TableAutomaticNotifications {
    id_notificacion: number
    titulo: string
    mensaje: string
    tipo: number
    auxiliar:string
    id_skill: number
    estado: string
    tiempo: number
    intervaloTiempo: number
    patronMensajes: number
    posicion: number
    skill_name: string
    skill_internal_code: string
    id_cliente: string
    cliente: string
    cod_pcrc: string
}

export interface GetTableAutomaticNotifications extends Response {
    result: Array<TableAutomaticNotifications>
}


export interface DataNewNotification{
    titulo: string
    mensaje: string
    tipo: string
    auxiliar :string
    idSkills : number
    estado: number
    tiempo: number
    intervaloTiempo: number
    patronMensajes: number
    posicion: number
}

export interface AutomaticNotificationResponse extends Response {
    result: string;
}




