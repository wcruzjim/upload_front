import { Response } from '../../models/Response';
import { DataGraph, ForecastDataGraph } from '../Forecast/Forecast';
import { ErrorsAutomaticShift } from '../Turnos/AutomaticShifts';
import { IdNameDictionary } from '../Turnos/IdNameDictionary';
import { SelectType } from '../dashboard/powerbi';
import { AreaTimeFollowUp } from '../gtr/adherence';
import { SelectedColumns } from '../tables/DataActionTable';

export interface GlobalInformationForecastClients extends Response {
    id: string;
    fecha_creacion: Date;
    intervalo: string;
    nombre: string;
    Transacciones: number;
    tiempo_gestion: number;
    Agentes_Prom: number;
    Nivel_de_servicio: number;
    Ocupacion: number;
    pcrc?: string;
    rango_fechas_inicio?: Date;
    rango_fechas_fin?: Date;
    id_intervalo?: number;
    multiplicidad?: number;
    servicio?: number;
    umbral?: number;
}

export interface GetGlobalInformationForecastFinalClients extends Response {
    result: Array<GlobalInformationForecastClients>
}


export interface GetInformationForecastFinalClients {
    id: number;
    name: string;
}
export interface FormatedForecastClients {
    id: string;
    fecha_creacion: Date;
    error_transacciones?: string;
    error_duracion?: string;
    estado?: number;
    intervalo: string;
    nombre: string;
    Transacciones: number;
    tiempo_gestion: number;
    Agentes_Prom: number;
    Nivel_de_servicio: number;
    Ocupacion: number;
    pcrc?: string;
    rango_fechas_inicio?: Date;
    rango_fechas_fin?: Date;
    id_intervalo?: number;
    multiplicidad?: number;
    servicio?: number;
    umbral?: number;
}

export interface FormatedFinalForecastClients {
    id: string;
    fecha_creacion: Date;
    error?: string;
    "precision transacciones"?: string;
    "precision duracion"?: string;
    intervalo: string;
    nombre: string;
    Transacciones: number;
    estado?: number;
    "Tiempo Gestión": number;
    "Agentes": number;
    "Nivel Servicio": number;
    Ocupacion: number;
    pcrc?: string;
    rango_fechas_inicio?: Date;
    rango_fechas_fin?: Date;
    id_intervalo?: number;
    multiplicidad?: number;
    servicio?: number;
    umbral?: number;
}

export interface ForecastFinalClientCreate {
    nombre: string;
}

export interface GetForecastClientCreate extends Response {
    result: Array<ForecastFinalClientCreate>
}

export interface CreateForecastFromSimulation {
    result: string;
}

export interface RestoreForecastSimulation {
    result: string;
}
export interface FormatedForecastClientCreate {
    'Nombre': string;
}

export interface CreateForecastFinalClients extends Response {
    result: string;
}

export interface CreateForecastFinalAgents extends Response {
    result: string;
}

export interface HistoryForecastClients extends Response {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}

export interface GetHistoryForecastFinalClients extends Response {
    result: Array<HistoryForecastClients>
}

export interface FormatedHistoryForecastClients {
    historial: string;
    observacion: string;
    ejecutor: string;
    fecha: string;
}

export interface GetInfoForecastDetail extends Response {
    result: Array<DetailForecast>;
}

export interface DataForGraph{
    x: Date;
    y: number
}
export interface IntradaySaved{
    semana?: number;
    intradiaTransacciones : Array<DataForGraph>;
    intradiaDuracion : Array<DataForGraph>
    
}

export interface GetIntradaySaved extends Response{
    result: Array<IntradaySaved>
}

export interface GetInfoForecastSimulationDetail extends Response {
    result: Array<DetailForecast>;
}

export interface UpdateDelta extends Response{
    result: string
}

export interface ModelsToUse{
    models:string;
    enables: Array<string>;
}

export interface GetModelsToUse extends Response{
    result: ModelsToUse
}

export interface DownloadInfoFiles extends Response{
    result: Array<string>
}

export interface SaveAgents extends Response{
    result: boolean
}


export interface DetailForecast {
    nombre: string;
    fechas: string;
    intervalo: string;
    multiplicidad: string;
    servicio: string;
    umbral: string;
    pcrc: string;
    error?: string;
    precision_transaction?: string;
    precision_duration?: string;
    transacciones?: string;
    tiempo_gestion?: string;
    agentes_Prom?: string;
    nivel_de_servicio?: string;
    ocupacion?: string;
    metodologias?: string;
    modelos?: string;
    id_pronostico_clientes?: string;
    intradia?: string;
    useHolidays?:string;
    smoothIntraday?:string;
    codeHolidaysUse?: string;
    nameHolidaysUse?: string;
    ajuste_horas?:string;
    cargado_archivo?:number;
    cargado_dia?:number;
    amountDataHistory? : string;
}

export interface DetailForecastSimulation {
    fechas: string;
    rango_fechas_inicio?: Date;
    rango_fechas_fin?: Date;
    intervalo: string;
    multiplicidad: string;
    servicio: string;
    umbral: string;
    pcrc: string;
}

export interface DataDelta {
    dataType: string;
    intervalType: string;
    rangeEnd: string;
    rangeStart: string;
    hourStart: string;
    hourEnd: string;
    deltaValue: string;
    idForecast: string;
}

export interface SaveValueDimensioningDay{
    break: number;
    fedback: number;
    idForecast: number;
    otros_dos: number;
    otros_uno: number;
    payHourMaxCountry: number;
    payrollHours: number;
    payrollUse: number;
    reducers: number;
    training: number;
}

export interface SaveFormValueDimensioningDayResult extends Response{
    result : boolean
}

export interface SaveReducersByDay extends Response{
    result : boolean
}

export interface ValuesDimensionigStorage {
    payHourMaxCountry?: number;
    payrollUse?: number;
    payrollHours?: number;
    reductor?: number;
    reductors?: string;
    payrollUseParticular?: string;
    dayAdjustment?: string;
    breakAdjustment?: string;
    trainingAdjustment?: string;
    fedbackAdjustment?: string;
    otrosUnoAdjustment?: string;
    otrosDosAdjustment?: string;
    plantaAdjustment?: string;
    plantAdjustmentDay?: string;
    break: number;
    training: number;
    fedback: number;
    otros_uno: number;
    otros_dos: number;
    tipo_calculo?: number;
    tipo_dimensionamiento?: string;
    uso_nomina? : number,
    horas_rac? : number,
    horas_legal? : number,
    reductores ? : string,
    ajuste_dia? : string,
    ajuste_break? : string,
    ajuste_training ? : string,
    ajuste_fedback? : string,
    ajuste_otros_uno? : string,
    ajuste_otros_dos? : string,
    ajuste_plan_a_usar? : string,
    tipo_dimensionam? : string,
    fecha_calculo? : Date,
    scenaryTurboDefault?:number,
    scenaryTurboChoosed?:string,
    mapperScenary?:Array<SelectType>,

}
export interface GetValuesDimensionig extends Response{
    result: {dimInfo:Array<ValuesDimensionigStorage>, weeklyHoursAmount: number}
}


export interface FormValuesReducers{
    break: number;
    fedback: number;
    otros_dos: number;
    otros_uno: number;
    payrollUse: number;
    payrollHours: number;
    reducers: number;
    training: number;
}

export interface DataSaveTable{
    dataToSaveStr: string;
    dataToSaveAdjustmentStr: string;
    dataToSaveBreakdStr: string;
    dataToSaveTrainingStr: string;
    dataToSaveFedbackStr: string;
    dataToSaveOtrosUnoStr: string;
    dataToSaveOtrosDosStr: string;
    dataToSavePlantaStr: string;
    dataTurboScenaryStr: string
}

export interface HeaderForecastFromFile{
    "Fecha":Date;
    "00:00" :number;
}

export interface HeaderForecastFromFileAndDescription{
    data: Array<HeaderForecastFromFile>;
    description: string;
}


export interface TableTurboTab{
    fecha?: Date;
    transacciones?: number;
    aht?: number;
    date: Date
    time: string
    transactions: number
    duration: number
    required: number
    resources_erlang: number
    ns_erlang: number
    oc_erlang: number
    resources_fit: number
    ns_fit: number
    oc_fit: number
    gap: number
}
export interface GetTableTurboTab extends Response{
    result:Array<TableTurboTab>
}

export interface GraphUnformatted {
    x: Date;
    y: number;
    type: string;
}

export interface OriginalFittedSolver{
    day: number,
    resources: number,
    shift: number
}


export interface SummaryTurboTab{
    date: Date;
    time: string;
    amount: number;
    type: string;
}
export interface AllDataTurboTab{
    data: Array<TableTurboTab>;
    editable_columns: Array<string>;
    graph: Array<GraphUnformatted>;
    fit?: Array<OriginalFittedSolver>
    isAllDays?: boolean;
    dateSelected?: string;
    noFitted?: ErrorsAutomaticShift;
    summary?: Array<SummaryTurboTab>;
    data_summary?: Array<TableTurboTab>;
    name: string;
    id: number;
}

export interface GetTableTurboTabNS extends Response {
    result: AllDataTurboTab
}

export interface GetRankingTableTurboTab extends Response{
    result: Array<SelectTurboTab>
}

export interface ListCountriesWithHolidays extends Response{
    result: Array<IdNameDictionary>
}

export interface SelectTurboTab{
    radioButtonElements: number,
    fecha: string,
    total: string,
    puesto: number
}

export interface AllTurboTable {
    id: number;
    nombre: string;
    is_generic: number;
    fecha_dimensionamiento: Date;
    radioButtonElements: string;
    checkedRow: boolean;
}

export interface GetAllTurboTable extends Response{
    result: Array<AllTurboTable>
}


export interface BooleanResponse extends Response{
    result: Array<boolean>
}


export interface GraphMetodologyAggregated {
    transactions: Array<ForecastDataGraph>;
    duration: Array<ForecastDataGraph>;
}
export interface GraphMethodology {
    day: GraphMetodologyAggregated;
    interval: GraphMetodologyAggregated
}

export interface MetricsTable{
    metrica: string;
    valor: number;
}

export interface GraphAndScoreRealForecast{
    graph: {
        transactions: AreaTimeFollowUp;
        duration: AreaTimeFollowUp
    };
    metrics: {
        transactions: Array<MetricsTable>;
        duration: Array<MetricsTable>
    }
}

export interface GetGraphAndScoreRealForecast extends Response{
    result: GraphAndScoreRealForecast;
}







