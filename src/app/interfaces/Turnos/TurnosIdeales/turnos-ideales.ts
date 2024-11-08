import { Response } from "../../../models/Response";

//ModalDetalleTurno
export interface FilteredSchedulesSearch {
    fecha: string
    turnosTotales: number
    turnosTotalesDisponibles: number
    turnosTotalesSeleccionados: number
}

//resumenDetalleTurno
export interface DataResumenToView {
    asignacion: string
    fin: string
    inicio: string
}

//ModalNuevoTurnoComponent
export interface DataMetrics {
    name: string
    value: number
}

//turnosideales
export interface TurnosIdeales {
    id: string;
    tipoDeSolicitud: string;
    inicioSolicitud: Date;
    finSolicitud: Date;
    duracionSolicitud: string;
    creadorSolicitud: string[];
    estadoSolicitud: string;
    limiteSolicitud: Date;
    motivoSolicitud: string;
    turnosSolicitud: TurnosSolicitud[];
    respuestasSolicitud: RespuestasSolicitud[];
    expiraSolicitud: Date;
    estado: string;
}

export interface RespuestasSolicitud {
    labelRespuesta: LabelRespuesta;
    value: number | string;
}

export enum LabelRespuesta {
    Disponibles = "Disponibles:",
    Seleccionados = "Seleccionados:",
    Turnos = "Turnos:"
}

export interface TurnosSolicitud {
    resumenHorariosTurnos?: ResumenHorariosTurno[];
    fechaTurno?: FechaTurno[];
}

export interface FechaTurno {
    fecha: Date;
    turnosTotales: number;
    turnosTotalesDisponibles: number;
    turnosTotalesSeleccionados: number;
}

export interface ResumenHorariosTurno {
    labelTurnosAM?: LabelTurnosAM;
    cantidadTurnosAM?: string;
    labelTurnosMID?: LabelTurnosMID;
    cantidadTurnosMID?: string;
    labelTurnosPM?: LabelTurnosPM;
    cantidadTurnosPM?: string;
}

export enum LabelTurnosAM {
    Am = "AM"
}

export enum LabelTurnosMID {
    Mid = "MID"
}

export enum LabelTurnosPM {
    Pm = "PM"
}

export interface ExportAvailabilities {
    documento: string;
    inicio_lunes: string;
    fin_lunes: string;
    hora_minima_lunes: string;
    hora_maxima_lunes: string;
    inicio_martes: string;
    fin_martes: string;
    hora_minima_martes: string;
    hora_maxima_martes: string;
    inicio_miercoles: string;
    fin_miercoles: string;
    hora_minima_miercoles: string;
    hora_maxima_miercoles: string;
    inicio_jueves: string;
    fin_jueves: string;
    hora_minima_jueves: string;
    hora_maxima_jueves: string;
    inicio_viernes: string;
    fin_viernes: string;
    hora_minima_viernes: string;
    hora_maxima_viernes: string;
    inicio_sabado: string;
    fin_sabado: string;
    hora_minima_sabado: string;
    hora_maxima_sabado: string;
    inicio_domingo: string;
    fin_domingo: string;
    hora_minima_domingo: string;
    hora_maxima_domingo: string;
}

export interface AvailabilitiesTable {
    documento: string;
    lunes: string;
    martes: string;
    miercoles: string;
    jueves: string;
    viernes: string;
    sabado: string;
    domingo: string;
}

export interface IdealFormatted {
    id: string,
    tipo: string,
    cliente: string,
    inicio: string,
    fin: string,
    totales: string,
    asignados: string,
    disponibles: string,
    creador: string
}

export interface IdealRaw {
    id: string;
    tipoDeSolicitud: string;
    cliente: string;
    inicioSolicitud: string;
    finSolicitud: string;
    respuestasSolicitud: Array<{ value: string }>;
    creadorSolicitud: string;
}


export interface GetHourMaxMin extends Response{
 result: Array<HourMaxMin>
}
export interface HourMaxMin {
    documento: string;
    pcrc: string;
    nombre_completo: string;
    horas_maximas: string;
    horas_minimas: string;
    horas_contrato: string;
}

export interface HourMaxMinFormatted {
    documento: string;
    pcrc: string;
    "Nombre Completo": string;
    "Horas Máximas"?: string;
    "Horas Mínimas"?: string;
    "Horas Contrato": string;
}

export interface GetShowContractualHours extends Response{
    result: boolean;
}

export interface DeleteAvailability extends Response{
    result: boolean;
}




