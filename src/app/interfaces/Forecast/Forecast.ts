import { Response } from "../../models/Response";

export interface Forecast {
    id?: string
    nombre: string
    descripcion: string
    filtro: string
    fecha_creacion: string
    documento_creacion: string
    fecha_modificacion: string
    documento_modificacion: string
    asa?: number,
    threshold?: number,
    factor?: number,
}

//DetailforecastComponent
export interface Customers2 {
    id: string;
    cliente: string;
}

//ForecastconfiguracionComponent
export interface ElementForecastConfiguracion {
    id?: string;
    pcrc?: string;
    centros_costos?: string;
    cola?: string;
}

export interface SelectedForecastConfiguracion {
    id?: number;
    minutos?: string;
    name?: string;
    servicio?: string;
}

//ForecastconfiguracionComponent sendServices
export interface SelectedSendServices {
    servicio?: string;
    name?: string;
}

//ForecastconfiguracionComponent services
export interface Services {
    servicio: string;
}

//ForecastconfiguracionComponent intervals
export interface Intervals {
    id?: string;
    minutos?: string;
}

export interface ExportIntervalFormat {
    cliente: string;
    pcrc_servicio: string;
    fecha: Date;
    intervalo: string;
    total_combinaciones: null;
    total_md1: string;
    total_md2: string;
    total_md3: string;
    total_md4: string;
    total_md5: string;
    total_md6: string;
    total_md7: string;
    total_md8: string;
    total_md9: string;
    total_md10: string;
    total_md11: string;
    total_md12: string;
    total_md13: string;
    total_md14: string;
}

export interface ResponseExportIntervalFormat extends Response {
    result: Array<ExportIntervalFormat>
}

export interface MaxMinValuesSavedAgents {
    interval: string;
    date: Date;
    metricas: MetricaSavedAgents[];
}

export interface MetricaSavedAgents {
    name: string;
    valor: number;
}

export interface AgetnsToSave {
    date: string;
    agents: number;
}

export interface SaveAgentsIntradey extends Response {
    result: string
}

export interface DataGraphAgents {
    x: string;
    y: string;
}

export interface AdditionalConfigurationGraphAgents {
    day: Date;
    percentage: null;
    scale: number;
}

export interface SelectForecastHistory {
    radioButtonElements: string;
    id: string;
    agents: string;
    nombre: string;
    descripcion: string;
}

export interface GetSelectForecastHistory extends Response {
    result: Array<SelectForecastHistory>
}

export interface EdditValueShifts extends Response{
    result: boolean;
}

export interface Combinations {
    cliente: string;
    programa: string;
    pcrc: string;
    fecha: string;
    quincena: string;
    quincena_1: string;
    var1: string;
    var2: string;
    var3: string;
    var4: string;
    var5: string
}

export interface GetCombinations extends Response {
    result: Array<Combinations>
}

export interface DetailForecast {
    fecha: Date;
    día: string;
    Llamadas?: string;
    AHT?: string;
    NS?: string;
    Ocupacion?: string;
    total?: string;
    type_turbo?: number;
    "Max Agentes Int" ?: string;
    "00:00"?: string;
}

export interface DetailDimensioning {
    date?: Date
    Transacciones?: number
    tiempo_gestion?: number
    sla?: number
    occupancy?: number
    agentes?: number
}


export interface AgentStringifyWithPCRC{
    pcrc: string;
    data: Array<AgentStringify>;
}
export interface AgentStringify{
    fecha: Date
    'AHT'?: number;
    'HC'?: string;
    'Llamadas'?: number;
    'Max Agentes Int'?: string;
    'NS'?: string;
    'Ocupacion'?: number;
    'día'?: string;
}

export interface FinalForecastError {
    pcrc?: string;
    "precisión transacciones": number;
    "precisión duración": string;
    "modelo transacciones": string;
    "modelo duración": string;
}

export interface FormatedForecastError {
    pcrc: string;
    score_cantidad: number;
    nombre_modelo_cantidad: string;
    score_duracion: string;
    nombre_modelo_duracion: string;
}

export interface GetForecastError extends Response {
    result: { error: Array<FormatedForecastError>; graph: any, transactionBestModel: string, durationBestModel: string }
}

export interface FormatedForecastError {
    pcrc: string;
    nombre_modelo_cantidad: string;
    score_cantidad: number;
    score_duracion: string;
    score_cantidad_dia?: string;
    score_duracion_dia?: string;
    nombre_modelo_duracion: string;
}

export interface FormatedPCRCAccessClient {
    id: string;
    name: string;
}

export interface GetPCRCAccessClient extends Response {
    result: Array<FormatedPCRCAccessClient>
}

export interface SaveAgents {
    name: string;
    rangeStart: Date;
    rangeEnd: Date;
    description: string;
    idForecastClient: string;
}

export interface SaveForecastForClient {
    name: string;
    pcrc: string;
    rangeStart: Date;
    rangeEnd: Date;
    interval: string;
    multiplicity: number;
    serviceLevel: number;
    threshold: string;
    idForecastClient: string;
}

export interface GetPcrcForecastSaved extends Response {
    result: Array<string>
}

export interface ForecastIntradayInformation {
    transactions: Array<DetailForecast>;
    aht: Array<DetailForecast>;
    agents: Array<DetailForecast>
    agentsIti?: Array<DetailForecast>
    agentsVsIti?: Array<ForecastDataGraph>
    agentDetailForDim?: Array<DetailDimensioning>
    slaDetailForDim?: Array<DetailDimensioning>
    slaNoExtra?: Array<DetailDimensioning>
    transactionsRanking?: {[key:string]: string}
    turboAdittional?:Array<{[key:string]: string}>
    summary?: Array<DetailForecast>
}

export interface GetForecastIntradayInformation extends Response {
    result: ForecastIntradayInformation
}

export interface GetIdForecastClient extends Response {
    result: number;
}

export interface DataGraph {
    x: Date;
    y: number;
}

export interface ForecastDataGraph {
    maxScale?: number;
    history: Array<DataGraph>;
    forecast: Array<DataGraph>;
}

export interface GetForecastGraph extends Response {
    result: Array<ForecastDataGraph>
}

export interface GetForecastGraphSetting extends Response {
    result: ForecastDataGraph
}

export interface GetForecastGraphSpecifiModel extends Response {
    result: {day:ForecastDataGraph, interval:ForecastDataGraph}
}

export interface SearchDataRangeForecast extends Response {
    result: {start: string, end:string}
}

export interface ChangeStatusForecast extends Response {
    result: boolean;
}

export interface BoxPlotDayType {
    day: number;
    data: Array<number>;
}

export interface ForecastHistory {
    table: Array<Array<object>>;
    boxPlot: Array<BoxPlotDayType>
    histogram: Array<number>;
}
export interface GetForecastHistory extends Response {
    result: ForecastHistory;
}

export interface DataDetailForcast {
    name: string;
    pcrc: string;
    rangeDates: string;
    interval: string;
    multiplicity: string;
    serviceLevel: string;
    threshold: string;
    error: string;
    transactions: string;
    aht: string;
    agents: string;
    ns: string;
    ocupation: string;
}

export interface DataTableErrorModels {
    radioButtonElements: string;
    precisión: string;
    ["precisión día"]?: string;
    modelo?: string;
    ["metodología"]?: string;
    checkedRow: boolean;
}

export interface SelectOptions {
    id: number;
    name: string;
}


export interface ResponseSelectOptions extends Response {
    result: Array<SelectOptions>
}

export interface ResponseBoolean extends Response {
    result: boolean
}

