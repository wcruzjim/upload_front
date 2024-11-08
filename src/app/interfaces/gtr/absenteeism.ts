import { OuputActionTable } from "../tables/DataActionTable";
import { Response } from "../../models/Response";
import { SelectType } from "../dashboard/powerbi";
import { DataDashboardShowMetabase } from "../dashboard/Metabase";

export interface DataAbsenteeism {
    nombre_completo: string;
    usuario_red: string;
    documento: string;
    cliente: string;
    pcrc: string;
    servicio: string;
    cod_cliente: string;
    cargo: string;
    ultima_conexion: Date;
    primera_conexion: Date;
    inicio_turno: Date;
    fin_turno: Date;
    id_dp_cargos: string;
    diferencia_dias: string;
    avatar: string;
    modalidad_trabajo: string;
    justificacion?: string;
    jefe?:string;
    minutos_tarde?:number;
}

export interface DataAbsenteeismFormated {
    cliente?: string;
    usuario?: string;
    "ultima conexion dia": string;
    "inicio turno"?: Date;
    "fin turno"?: Date;
    "ultima conexion": Date;
    cargo?: string;
    documento: string;
    nombre: string;
    pcrc: string;
    "modalidad trabajo": string;
    justificacion?: string;
    id_prorroga?: number;
    prorrogas_h?: number;
    estado_curso?: string;
}

export interface FormattedHumanResourcesData {
    documento:string;
    nombre_completo:string;
    pcrc:string;
    estado:string;
    vacaciones:number;
    vacaciones_progresivas?:number;
    horas_conexion:number;
    ausentismo:number;
    procesos:number;
    prorroga:string;
    induccion:string;
    avatar:number;
    prorrogas_h:number;
    id_prorroga:number;
    sst_tele:number;
    sst_teletrabajo:string;
    otro_si_historial:number;
    otro_si_count:number;
    otro_si:number|string;
    llegadas_tarde:number;
    user_logged_in:number;
    alerta_horas_conexion:number;
    boss:number;
    dateFilter?:string;
    config_novedad?: boolean
}

export interface AbsenteeismGeneralStatisticFormated {
    idClient: string;
    cliente: string;
    "turnos programados": number;
    presentes: number;
    pendientes: number;
    ausentes: string;
}

export interface StatisticAbsenteeism {
    allData: Array<DataAbsenteeism>;
    present: Array<DataAbsenteeism>;
    pendings: Array<DataAbsenteeism>;
    absentisms: Array<DataAbsenteeism>;
    countingSchedules: Array<DataAbsenteeism>;
    client: string;
    countPresents: number;
    countDelays: number;
    countPending: number;
    countAbsents: number;
    countSchedules: number;
    idClient: string;
    percentageAbsentisms: number;

}

export interface AbsenteeismStatisticSummary {
    AllTotalSchedule: number;
    AllSchedule: number;
    AllAbsents: number;
    AllPending: number;
    AllDelays: number;
    AllPresents: number;
    OveralPecentageAbsentism: number;
}

export interface AbsenteeismStatisticSummaryFormated {
    name: string;
    value: number;
    icon: string;
    class: string;
    description: string;
    value2?: string;
}

export interface AbsenteeismGeneralStatistic {
    idColumn: string;
    row: AbsenteeismGeneralStatisticFormated;
}

export interface OuputActionTableHistory extends OuputActionTable {
    element: DataAbsenteeismFormated;
}

export interface HistoricAbsenteeism {
    fecha: Date;
    justificacion: string;
    id?: number,
    type?:number,
}

export interface GetHistoryByAgent extends Response {
    result: Array<HistoricAbsenteeism>
}

export interface SaveJustification extends Response {
    result: boolean;
}

export interface GetAbsenteeismTable extends Response {
    result: { genralStatistic: AbsenteeismStatisticSummary, generalData: Array<DataAbsenteeism>, statistic?: Array<StatisticAbsenteeism>, graphicDelay?: CountDelay, graphicJustification?: Array<CountJustification>};
}

export interface GetSelectOptions extends Response {
    result: Array<SelectType>;
}

export interface GetAbsenteeismDashboard extends Response {
    result: Array<DataDashboardShowMetabase>
}

export interface GetIdUserUnique extends Response {
    result: number
}

export interface GetExportableAbsenteeismData extends Response {
    result: Boolean;
}

export interface GetMyTeam extends Response {
    result: Array<string>;
}

export interface SaveJustificationComplete {
    document: string;
    shiftEnd: Date;
    shiftStart: Date;
    lastConnection: Date;
    lastConnectionDays: Date;
    justification: string;
    typeConnection: string;
    pcrc: string;
}

export interface GetidFilterPCRCAdherenceDashboard extends Response {
    result: number;
}


export interface GetGeneralDataSummary extends Response {
    result: GeneralDataSummary;
}


export interface GeneralDataSummary {
    generalStatistic: GeneralStatistic[];
    statisticByCity: Array<GeneralStatistic>;
    summaryData: SummaryData;
    cities: string[];
}

export interface GeneralStatistic {
    ciudad?: string;
    cliente?: string;
    turnos: string;
    presentes: string;
    ausentes: string;
    ausentismo: string;
    modalidad_trabajo?: ModalidadTrabajo;
}

export enum ModalidadTrabajo {
    Presencial = "Presencial",
    Remoto = "Remoto",
    Total = "Total"
}

export interface SummaryData {
    Corte: Ausente[];
    Turnos: Ausente[];
    Presentes: Ausente[];
    Ausentes: Ausente[];
    Ausentismo: Ausente[];
}

export interface Ausente {
    cantidad: string;
}

export interface CityFormatted {
    name: string;
    value: string;
}

export interface IsVisibleMetabaseAbsenteeism extends Response {
    result: boolean;
}

export interface GetDataAbsenteeimLimit extends Response{
    result: string
}

export interface CountDelay {
    conteoMenor?: number;
    conteoCinco?: number;
    conteoTreinta?: number;
    conteoHora?: number;
}

export interface CountJustification {
    name?: string,
    conteo?: number,
    y?: number
}

