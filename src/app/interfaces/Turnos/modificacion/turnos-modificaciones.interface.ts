import { Response } from "../../../../app/models/Response";
import {EventDetail, SimpleEvent} from './EventDetail';
export interface TurnosProgramados {
    nombre:string,
    apellido:string,
    id_turno:string,
    inicio:string,
    fin:string,
    cedula:string,
    estado:string,
    pcrc:string,
    creado:string,
    modificado:string,
    descanso:string,
    usuario_publicador:string,
    categoria:string,
    cat_corta:string,
    color_fondo:string
}

export interface TurnosUpdate extends TurnosProgramados{
    eventos:EventDetail
}


export interface ResponseTurnos extends Response {
    result: TurnosProgramados
}

export interface HistoryTurnDetail{
    id_turno:string,
    inicio_turno:string,
    fin_turno:string,
    documento:string,
    PCRC:string,
    fecha_creacion:string,
    fecha_modificacion:string,
    descanso:string,
    usuario_publicador:string,
    cantidad_eventos:string,
    eventos:SimpleEvent[]
}


export interface HistoryTurn{
    descripcion:string,
    documento_modificador:string,
    fecha_historial:string,
    id_tur_historial_turnos:string,
    id_tur_turnos_usuarios:string,
    nombre_modificador:string,
    tipo_historial_turno:string,
    turno_posterior:string,
    turno_previo:string
}

