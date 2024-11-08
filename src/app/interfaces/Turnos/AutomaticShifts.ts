import { Response } from "../../models/Response";

export interface PcrcAccess {
    id: string;
    pcrc: string;
}

export interface StatisticTable {
    fecha: string;
    requeridos?: number;
    ajustados?: number;
    "ajuste absoluto": string;
    "cantidad asesores"?: string;
    "turnos requeridos"?: string;
    "turnos programados"?: string;
}

export interface StatisticTableNoFormat {
    date: string;
    interval?: string;
    required: number;
    solver: number;
    abs_fit: number;
    relative_fit: number;
}

export interface ReadeableShifts {
    date: Date;
    documento?: string;
    nombre?: string;
    pcrc?: string;
    id_shift?: number;
    factor?: number;
    "0:00"?: string;
    "0:15"?: string;
    "0:30"?: string;
    "0:45"?: string;
    "1:00"?: string;
    "1:15"?: string;
    "1:30"?: string;
    "1:45"?: string;
    "2:00"?: string;
    "2:15"?: string;
    "2:30"?: string;
    "2:45"?: string;
    "3:00"?: string;
    "3:15"?: string;
    "3:30"?: string;
    "3:45"?: string;
    "4:00"?: string;
    "4:15"?: string;
    "4:30"?: string;
    "4:45"?: string;
    "5:00"?: string;
    "5:15"?: string;
    "5:30"?: string;
    "5:45"?: string;
    "6:00"?: string;
    "6:15"?: string;
    "6:30"?: string;
    "6:45"?: string;
    "7:00"?: string;
    "7:15"?: string;
    "7:30"?: string;
    "7:45"?: string;
    "8:00"?: string;
    "8:15"?: string;
    "8:30"?: string;
    "8:45"?: string;
    "9:00"?: string;
    "9:15"?: string;
    "9:30"?: string;
    "9:45"?: string;
    "10:00"?: string;
    "10:15"?: string;
    "10:30"?: string;
    "10:45"?: string;
    "11:00"?: string;
    "11:15"?: string;
    "11:30"?: string;
    "11:45"?: string;
    "12:00"?: string;
    "12:15"?: string;
    "12:30"?: string;
    "12:45"?: string;
    "13:00"?: string;
    "13:15"?: string;
    "13:30"?: string;
    "13:45"?: string;
    "14:00"?: string;
    "14:15"?: string;
    "14:30"?: string;
    "14:45"?: string;
    "15:00"?: string;
    "15:15"?: string;
    "15:30"?: string;
    "15:45"?: string;
    "16:00"?: string;
    "16:15"?: string;
    "16:30"?: string;
    "16:45"?: string;
    "17:00"?: string;
    "17:15"?: string;
    "17:30"?: string;
    "17:45"?: string;
    "18:00"?: string;
    "18:15"?: string;
    "18:30"?: string;
    "18:45"?: string;
    "19:00"?: string;
    "19:15"?: string;
    "19:30"?: string;
    "19:45"?: string;
    "20:00"?: string;
    "20:15"?: string;
    "20:30"?: string;
    "20:45"?: string;
    "21:00"?: string;
    "21:15"?: string;
    "21:30"?: string;
    "21:45"?: string;
    "22:00"?: string;
    "22:15"?: string;
    "22:30"?: string;
    "22:45"?: string;
    "23:00"?: string;
    "23:15"?: string;
    "23:30"?: string;
    "23:45"?: string;
}

export interface ReadeableShiftsFormated {
    fecha: Date;
    "id Turno"?: number;
    cantidad?: number;
    "0:00"?: string;
    "0:15"?: string;
    "0:30"?: string;
    "0:45"?: string;
    "1:00"?: string;
    "1:15"?: string;
    "1:30"?: string;
    "1:45"?: string;
    "2:00"?: string;
    "2:15"?: string;
    "2:30"?: string;
    "2:45"?: string;
    "3:00"?: string;
    "3:15"?: string;
    "3:30"?: string;
    "3:45"?: string;
    "4:00"?: string;
    "4:15"?: string;
    "4:30"?: string;
    "4:45"?: string;
    "5:00"?: string;
    "5:15"?: string;
    "5:30"?: string;
    "5:45"?: string;
    "6:00"?: string;
    "6:15"?: string;
    "6:30"?: string;
    "6:45"?: string;
    "7:00"?: string;
    "7:15"?: string;
    "7:30"?: string;
    "7:45"?: string;
    "8:00"?: string;
    "8:15"?: string;
    "8:30"?: string;
    "8:45"?: string;
    "9:00"?: string;
    "9:15"?: string;
    "9:30"?: string;
    "9:45"?: string;
    "10:00"?: string;
    "10:15"?: string;
    "10:30"?: string;
    "10:45"?: string;
    "11:00"?: string;
    "11:15"?: string;
    "11:30"?: string;
    "11:45"?: string;
    "12:00"?: string;
    "12:15"?: string;
    "12:30"?: string;
    "12:45"?: string;
    "13:00"?: string;
    "13:15"?: string;
    "13:30"?: string;
    "13:45"?: string;
    "14:00"?: string;
    "14:15"?: string;
    "14:30"?: string;
    "14:45"?: string;
    "15:00"?: string;
    "15:15"?: string;
    "15:30"?: string;
    "15:45"?: string;
    "16:00"?: string;
    "16:15"?: string;
    "16:30"?: string;
    "16:45"?: string;
    "17:00"?: string;
    "17:15"?: string;
    "17:30"?: string;
    "17:45"?: string;
    "18:00"?: string;
    "18:15"?: string;
    "18:30"?: string;
    "18:45"?: string;
    "19:00"?: string;
    "19:15"?: string;
    "19:30"?: string;
    "19:45"?: string;
    "20:00"?: string;
    "20:15"?: string;
    "20:30"?: string;
    "20:45"?: string;
    "21:00"?: string;
    "21:15"?: string;
    "21:30"?: string;
    "21:45"?: string;
    "22:00"?: string;
    "22:15"?: string;
    "22:30"?: string;
    "22:45"?: string;
    "23:00"?: string;
    "23:15"?: string;
    "23:30"?: string;
    "23:45"?: string;
}

export interface DayGraph {
    x: string;
    y: number;
}

export interface DataConfigToGlobalGraph {
    type: string;
    data: DataConfigToGraph;
    options: Options;
}

export interface DataConfigToGraph {
    datasets: Dataset[];
}

export interface Dataset {
    label: string;
    data: null | Array<DayGraph> | Array<number>;
    borderColor: string;
    backgroundColor: string;
    yAxisID: string;
}

export interface Options {
    maintainAspectRatio: boolean;
    responsive: boolean;
    interaction: Interaction;
    stacked: boolean;
    plugins: Plugins;
    scales: Scales;
}

export interface Interaction {
    mode: string;
    intersect: boolean;
}

export interface Plugins {
    title: Title;
}

export interface Title {
    display: boolean;
    text: string;
}

export interface Scales {
    y: Y;
    y1: Y;
}

export interface Y {
    type: string;
    display: boolean;
    position: string;
    max: number;
    grid?: Grid;
}

export interface Grid {
    drawOnChartArea: boolean;
}

export interface GraphDataNoFormat {
    date: string;
    resources: number;
    time: string;
    type: string;
}

export interface RequiredAgents {
    fecha: Date;
    intervalo_1: string;
    intervalo_2: string;
    intervalo_3: string;
    intervalo_4: string;
    intervalo_5: string;
    intervalo_6: string;
    intervalo_7: string;
    intervalo_8: string;
    intervalo_9: string;
    intervalo_10: string;
    intervalo_11: string;
    intervalo_12: string;
    intervalo_13: string;
    intervalo_14: string;
    intervalo_15: string;
    intervalo_16: string;
    intervalo_17: string;
    intervalo_18: string;
    intervalo_19: string;
    intervalo_20: string;
    intervalo_21: string;
    intervalo_22: string;
    intervalo_23: string;
    intervalo_24: string;
    intervalo_25: string;
    intervalo_26: string;
    intervalo_27: string;
    intervalo_28: string;
    intervalo_29: string;
    intervalo_30: string;
    intervalo_31: string;
    intervalo_32: string;
    intervalo_33: string;
    intervalo_34: string;
    intervalo_35: string;
    intervalo_36: string;
    intervalo_37: string;
    intervalo_38: string;
    intervalo_39: string;
    intervalo_40: string;
    intervalo_41: string;
    intervalo_42: string;
    intervalo_43: string;
    intervalo_44: string;
    intervalo_45: string;
    intervalo_46: string;
    intervalo_47: string;
    intervalo_48: string;
}

export interface SummaryUpload {
    days: string;
    minimum: string;
    maximum: string;
    minimumDate: Date;
    maximumDate: Date;
}

export interface GetGeneratedShifts extends Response {
    result: AutomaticResponseDataShift
}

export interface Statistics_number_shifts {
    day: "string";
    agent_pcrc: string;
    times: string;
    factor: string;
}

export interface FormatSummaryShift {
    documento: string;
    descanso: number;
    pcrc: string;
    dateStart: Date;
    startConnection: string;
    endConnection: string;
    start_lunch: string;
    start_first_rest: string;
    start_second_rest: string;
    start_third_rest: string;
    start_fourth_rest: string;
}

export interface SummaryPcrc {
    pcrc: string;
    fecha?: string;
    semana: number;
    dia: number;
    horas_pagas: number;
    horas_conexion: number;
    horas_descanso: number;
    horas_almuerzo: number;
    horas_capacitacion: number;
    utilizacion_agentes: string;
}

export interface SummaryWeek {
    documento: string;
    pcrc: string;
    semana: number;
    horas_pagas: number;
    horas_conexion: number;
    horas_descanso: number;
    horas_almuerzo: number;
    horas_capacitacion: number;
    nombre: string;
    horas_contrato: string;
    horasMinMax: string;
}

export interface SummaryPcrcFormatted {
    pcrc: string;
    fecha?: string;
    semana: number;
    dia: string;
    "horas pagas": number;
    "horas conexión": number;
    "horas descanso": number;
    "horas almuerzo": number;
    "horas capacitación": number;
    "utilización agentes": string;
}

export interface SummaryWeekFormatted {
    documento: string;
    pcrc: string;
    semana: number;
    "horas disponibilidad": string;
    "horas pagas": number;
    "horas conexión": number;
    "horas descanso": number;
    "horas almuerzo": number;
    "horas capacitación": number;
    "nombre": string;
    "horas contrato": string;
}

export interface SlaAndPCRC {
    pcrc: string;
    data: SlaDayWeek[];
}

export interface SlaDayWeek {
    fecha: Date;
    Hora: string;
    Dia: string;
    Semana: number;
    pcrc: string;
    "Asesores pronosticados": number;
    "Asesores programados": number;
    "Ajuste intervalo": number;
    Reductores: number;
    "Llamadas pronosticadas": number;
    "AHT pronosticado": number;
    "NS programado": number;
    Ocupacion: number;
    "Capacidad atencion": number;
}


export interface AutomaticResponseDataShift {
    errorCompatibility: { error_totales: Array<Object> };
    events: Array<TypeEvent>;
    format_summary_shift?: Array<FormatSummaryShift>;
    graphs: Array<{ pcrc: string, data: Array<GraphDataNoFormat> }>;
    informeHorasEstadisticas: Array<any>
    isUnreachable: boolean;
    shifts: Array<TypeShift>
    pcrc: Array<string>
    shifts_redeables: Array<ReadeableShifts>;
    shifts_redeables_expanded: Array<ReadeableShifts>;
    uniquesDays: Array<{ pcrc: string, data: Array<string> }>
    statistics: Array<{ pcrc: string, data: StatisticObject }>;
    statistics_number_shifts: Array<{ pcrc: string, data: Array<Statistics_number_shifts> }>;
    week_duration_per_agent: Array<{ documento: string, duration: number }>;
    summary_for_pcrc: Array<SummaryPcrc>;
    summary_for_week: Array<SummaryWeek>;
    slaByDay: Array<SlaAndPCRC>;
    slaByWeek: Array<SlaAndPCRC>;
	no_compatible?;
}

export interface StatisticObject {
    day: Array<StatisticTableNoFormat[]>,
    month: Array<StatisticTableNoFormat>,
    intervals: Array<StatisticTableNoFormat>,
}

export interface TypeEvent {
    id: number;
    date: Date;
    start: Date;
    end: Date;
    type_event: number
}

export interface TypeShift {
    id: number;
    date: Date;
    start: string;
    end: string;
    status: number;
    pcrc: string;
    day_off: number;
    status_assigned: number;
    creation_date: Date;
}

export interface SaveShifts extends Response {
    result: boolean
}

export interface Rests {
    pcrc: string;
    lunes: string;
    martes: string;
    miercoles: string;
    jueves: string;
    viernes: string;
    sabado: string;
    domingo: string;
    lunes_rest: boolean;
    martes_rest: boolean;
    miercoles_rest: boolean;
    jueves_rest: boolean;
    viernes_rest: boolean;
    sabado_rest: boolean;
    domingo_rest: boolean;
}
export interface GetRests extends Response {
    result: Array<Rests>
}

export interface Days {
	lunes: number;
	martes: number;
	miercoles: number;
	jueves: number;
	viernes: number;
	sabado: number;
	domingo: number;
}


export interface AgentFormated {
    radioButtonElements: number;
    nombre: string;
    id: number;
    descripcion: string;
    agents: string;
}
export interface GetAgentsFormated extends Response {
    result: Array<AgentFormated>
}

export interface DownloadShift {
    fecha: Date;
    pcrc: string;
    documento: string;
    nocturno: string;
    descripción: string;
}

export interface GetDownloadShift extends Response {
    result: Array<DownloadShift>
}

export interface GetcheckHasBaseShiftForPCRC extends Response {
    result: boolean
}


export interface ReponseShiftManual {
    result: {
        data: {
            total: number;
            duplicados: number;
            ingresados: number;
            turnos_eliminados: number;
            novedades_rechazadas: number;
            novedades_insertadas: number;
        }
    }
}

export interface SaveShiftsStorage extends Response{
    result: number
}

export interface SaveShiftManual extends Response {
    result: ReponseShiftManual
}

export interface SetUpRest{
    day: number;
    name: string;
    breakfast: boolean;
    breakfastDuration: number;
    lunch: boolean;
    lunchDuration: number;
    dinner: boolean;
    dinnerDuration: number;
}

export interface AdjustedShiftsSaved {
    id: string;
    nombre: string;
    descripcion: string;
    inicio: Date;
    fin: Date;
    creador: string;
    isHistoric: string;
    publicado: string;
}

export interface GetAdjustedShiftsSaved {
    result: Array<AdjustedShiftsSaved>;
}

export interface CheckShiftHomogeneousInWeek {
    result: boolean;
}

export interface InfoHistoric{
    publicado: string;
    intervalo: number;
    requeridos: Array<RequiredAgents>;
    turnos: AutomaticResponseDataShift;
    resultado4?: boolean;
}
export interface GetInfoHistoric extends Response{
    result: Array<InfoHistoric>;
}

export interface UpdateStatusHistoric extends Response{
    result: boolean;
}

export interface GetStatusProcess extends Response{
    result: string;
}


export interface ErrorsAutomaticShiftRequest extends Response{
    result: Array<ErrorsAutomaticShift>
}
export interface ErrorsAutomaticShift {
    error_totales: TotalErrosAutomatic[];
    error_fatales: boolean;
    error_informativos: boolean;
    error_correcto: boolean;
}

export interface TotalErrosAutomatic {
    linea: string;
    columna: string;
    codigo_error: string;
    error: string;
    texto_solucion: string;
    tipo_error: string;
    dato: string;
    habilitado: string;
}

export interface EdditingValues {
    changed: ReadeableShifts;
}

export interface RestRuleChecker {
    all_rest: Array<string>
    no_rest_sunday: Array<string>
    no_accomplish_seven_day: Array<string>
    percentage_shift: Array<string>
    percentage_day: Array<string>
}









