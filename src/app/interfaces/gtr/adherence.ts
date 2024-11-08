import { Response } from "../../models/Response";
import { DataGraph } from "../chart/chart";
import { SelectType } from "../dashboard/powerbi";


export interface GetPlatFormMultipleClients extends Response {
    result: Array<SelectType>;
}

export interface TableAdherence {
    documento: string;
    nombre: string;
    pcrc: string;
    cod_pcrc: string;
    usuario: string;
    inicio_conexion: Date;
    fin_conexion: Date;
    plataforma: string;
    cliente: string;
    conectado: boolean;
}

export interface GetTableAdherence extends Response {
    result: Array<TableAdherence>
}

export interface TableAdherenceFormat {
    documento: string;
    nombre: string;
    cliente: string;
    pcrc: string;
    'Código PCRC': string;
    usuario: string;
    "Inicio Conexión": Date;
    "Fin Conexión": Date;
    plataforma: string;
}

export interface ConnectionMonitoring {
    id_login: string;
    extension: number;
    reason: string;
    state: string;
    first_name: string;
    skill: string;
    time: number;
    operations_id: string;
    pcrc_name: string;
    platform: string;
    cliente: string;
}

export interface ConnectionMonitoringFormat {
    "cod skill": string;
    login: string;
    extension: number;
    estado: string;
    razón?: string;
    tiempo: string;
    usuario: string;
    cliente: string;
}

export interface GetConnectionMonitoring extends Response {
    result: Array<ConnectionMonitoring>
}

export interface GetDataAdherenceDashboard extends Response {
    result: AdherenceDataDashboard
}
export interface GetDataAdherenceDashboardEvol extends Response {
    result: AdherenceEvolAgent
}

export interface GetDataAdherenceByAgent extends Response {
    result: Array<AdherenceEvolAgent>
}

export interface AdherenceDataDashboard {
    ByPcrcs: Array<AdherenceByPcrcs>;
    Table: Array<AdherenceTable>;
    Agent: Array<AdherenceEvolAgent>;
    Connected: Array<AdherenceConnectedAgent>;
    Shifts: Array<AdherenceShifts>;
    Required: Array<AdherenceRequiredAgents>
}

export interface AdherenceByPcrcs {
    adherencia: string;
    cliente: string;
    cod_pcrc: string;
    conectados: string;
    faltantes: string;
    inhaderentes: string;
    pcrc: string;
    requeridos: string;
    turnos: string;
}

export interface AdherenceTable {
    Conectados: string;
    Faltantes: string;
    Intervalo: string;
    Requeridos: string;
    Turnos: string;
}

export interface AdherenceShifts {
    Tiempo: string;
    "Turnos programados": string;
}

export interface AdherenceRequiredAgents {
    "Agentes requeridos": string;
    Tiempo: string;
}

export interface AdherenceEvolAgent {
    Adherencia: string;
    Documento: string;
    "Fecha corte": string;
    Nombre: string;
    PCRC: string;
}
export interface AdherenceConnectedAgent {
    pendiente: string
}

export interface GetDataAdherenceRanges extends Response {
    result: string
}

export interface newParam {
    date: Date,
    startTime: string,
    endTime: string,
    interval: number,
    document: string,
    source: number,
}

export interface AdherenceGeneralStatistic {
    idColumn: string;
    row: AdherenceTable;
}

export interface GetDetailAdherenceGeneral extends Response {
    result: Array<DetailAdherenceGeneral>;
}
export interface DetailAdherenceGeneral {
    Adherencia: string;
    Dia: string;
    Documento: string;
    'Intervalo Fecha': string;
    Nombre: string;
    PCRC: string;
}

export interface AgentsWithoutUser {
    documento: string;
    nombre: string;
    cliente: string;
    pcrc: string;
    cod_pcrc: string;
}

export interface DataAgentsWithoutUser extends Response {
    result: Array<AgentsWithoutUser>
}

export interface TableWithoutUserFormat {
    documento: string;
    nombre: string;
    cliente: string;
    pcrc: string;
    'código PCRC': string;
}

export interface AreaTimeFollowUp {
    forecast: Array<DataGraph>;
    real: Array<DataGraph>;
    difference: number;
    sumReal: number;
}
export interface GetAreaTimeFollowUp extends Response {
    result: AreaTimeFollowUp;
}


export interface SummaryIndicatorsFollowUp {
    goal: number;
    name: string;
    theme: string;
    value: string;
    real?: string;
}
export interface GetSummaryIndicatorsFollowUp extends Response {
    result: {
        data: Array<SummaryIndicatorsFollowUp>;
        equalConfiguration: boolean;
    }
}

export interface IntervalFollowUp {
    slaVsAsa: {
        NS: Array<DataGraph>;
        efficiency: Array<DataGraph>;
        ASA: Array<DataGraph>;
    }
    ataVsDropped: {
        ata: Array<DataGraph>;
        dropped: Array<DataGraph>;
    }
    answeredVsOccupancy: {
        answared: Array<DataGraph>;
        AHT: Array<DataGraph>;
        occupancy: Array<DataGraph>;
    }
    connectionVsForecasted: {
        forecasted: Array<DataGraph>;
        connected: Array<DataGraph>;
    }
}

export interface GetIntervalFollowUp extends Response {
    result: IntervalFollowUp;
}

export interface ParetoFollowUp {
    pareto: {
        motive: Array<DataGraph>;
        goals: Array<DataGraph>;
    }
}
export interface GetParetoFollowUp extends Response {
    result: ParetoFollowUp
}

export interface DetailFollowUp {
    ns: number;
    eficiencia: number;
    entered: number;
    answered: number;
    dropped: number;
    aht: number;
    asa: number;
    ata: number;
    ocupacion: number;
    horas_conexion: number;
    pcrc: string;
}

export interface GetDetailFollowUp extends Response {
    result: Array<DetailFollowUp>;
}

export interface FollowupJustification {
    name: string;
    value: string;
    theme: string;
    goal: string;
    change: string;
    icon: string;
    secondIcon: string;
}

export interface GetFollowupJustification extends Response {
    result: {
        data:Array<FollowupJustification>;
        equalConfiguration: boolean;
    }
}

export interface ActionFollowUp {
    accion: string;
    id: number;
    pcrc: string;
    nameService?: string;
}

export interface GetActionFollowUp extends Response {
    result: Array<ActionFollowUp>
}

export interface GetPcrcForService extends Response {
    result: Array<string>
}

export interface GetDescriptionHours extends Response {
    result: string
}

export interface DeleteActionJustification extends Response {
    result: boolean;
}

export interface SaveNewActionJustification extends Response {
    result: boolean;
}

export interface EditActionJustification extends Response {
    result: boolean;
}

export interface VerifyConfigurationFollowUp extends Response {
    result: boolean;
}

export interface DateAndPCRC {
    pcrc: Array<string>;
    dateFollow: string;
    pcrcAndNameService? :  Array<SelectType>
}

export interface CutOffData {
    id: number;
    id_notifications: number,
    nombre: string;
    descripcion: string;
    estado: number;
    envia_notificaciones: number;
    frecuencia: string;
    tipo_frecuencia: number;
    inicio_envio: string;
    fin_envio: string;
    documento_envios: string;
    documento_envio_corporativos?: string;
    pcrcs: string;
    clientes: string;
    frecuencia_compacta?: string;
    envia_notificaciones_redeable?: string;
}

export interface GetCutOffs extends Response {
    result: Array<CutOffData>;
}

export interface GetPCRCsForCutOFfs extends Response {
    result: Array<string>;
}

export interface CreatePDFRequest {
    id: number;
    idNotification: number;
    img0?: string;
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;
    img5?: string;
}

