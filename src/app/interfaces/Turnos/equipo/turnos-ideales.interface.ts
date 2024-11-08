import { Response } from "../../../models/Response";

export interface MissingShiftAgents {
    dias_faltantes: string;
    cedula: string;
    cod_pcrc: string;
    asesor: string;
    lider: string;
}

export interface ResponseMissingShiftAgents extends Response {
    result: MissingShiftAgents
}

export interface TeamShifts {
    pendingSwap: PendingSwap[];
    allSwap: AllSwap[];
}

export interface AllSwap {
    id_tur_turnos_intercambios: string;
    identificacion_emisor: string;
    identificacion_receptor: string;
    id_tur_turnos_usuarios_emisor: string;
    id_tur_turnos_usuarios_receptor: string;
    estado: string;
    fecha_creacion: Date;
    observaciones: null;
    usuario_red_aplicador: null | string;
}

export interface PendingSwap {
    id_tur_turnos_intercambios: string;
    identificacion_emisor: string;
    identificacion_receptor: string;
    id_tur_turnos_usuarios_emisor: string;
    id_tur_turnos_usuarios_receptor: string;
    estado: string;
    fecha_creacion: Date;
    turno: Date;
    solicitante: string;
    solicitado:                      string;
}


export interface GetMyTeamShifts extends Response{
    result: TeamShifts;
}

export interface QueryIdealShift {
    selectionDate: Date;
    documentUser: string | null;
}

export interface IdealShift {
    id: string;
    dia_semana: number;
    descanso: number;
    fecha: Date;
    inicio: Date;
    fin: Date;
    duracion_corta: string;
    unnasigned: boolean;
}

export interface SaveIdealShift {
    shifts: IdealShift;
    documentUser: string | null;
}

export interface ResponseIdealShift extends Response {
    result: IdealShift[]
}

export interface ConfigurationWeek {
    rango_fechas: RangoFechas;
    limites: Limites;
}

export interface Limites {
    totalHours: Total;
    totalRests: Total;
}

export interface Total {
    minValue: number;
    maxValue: number;
    metric: string;
    value: number;
    color: string;
}

export interface RangoFechas {
    inicio: Date;
    fin: Date;
}

export interface ResponseConfigurationWeek extends Response {
    result: ConfigurationWeek;
}

export interface SavedIdealShift{
    id: string,
    unnasigned: boolean,
}

export interface ResponseSavedIdealShift extends Response {
    result: SavedIdealShift[];
}

export interface ResponseWeeklyHoursStatistics extends Response {
    result: string;
}

export interface SchedulesSettings{
    days_before_exchange: number;
    enable_gift_day: number;
}

export interface SchedulesSettingsResponse extends Response{
    result : SchedulesSettings;
}



