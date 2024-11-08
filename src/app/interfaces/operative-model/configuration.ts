import { UntypedFormGroup } from "@angular/forms";
import {Response} from '../../models/Response';
import { NumberSymbol } from "@angular/common";

export interface OptionSelected {
    id: number;
    icon: string;
    path: string;
    title: string;
    value: number;
    isSelected: boolean;
}

export interface MetricOperativeModel {
    isOpen: boolean;
    indicador: string;
    meta: number;
    idMetric: number;
    toSave: SaveConfiguration;
    isEditable: boolean;
}

export interface Select {
    id: string;
    name: string;
}

export interface Agents {
    documento: number;
    nombre: string;
    pcrc: string;
    selectElements: string;
}

export interface PcrcResponse {
    pcrc: string;
    documento: number;
    pcrc_nombre: string;
}

export interface AgentsResponse {
    avatar: number;
    documento: number;
    nombreCompleto: string;
    pcrc: string;
}

export interface Metrics {
    indicador: string;
    meta: number;
    id: number,
    editable: boolean
}

export interface AgentMetric {
    metrics: Array<Metrics>;
    agents: Array<AgentsResponse>
    validDays: Array<string>
}

export interface SaveConfiguration {
    form: UntypedFormGroup;
    option: string;
    users: Array<number>;
    atLeastOneAgent: boolean;
    preloaderUser: Array<{ nombre: string, documento: number }>
    chackOptionValidation: boolean
}

export interface UpdateConfiguration {
    idMetric: number;
    observations: string
}

export interface MetricToSendAndSave {
    agents: Array<string>;
    date: string;
    diagnosis: string;
    feedback: string;
    idMetric: number;
    note: number;
    observations: string;
    options: string;
    plan: string
}

export interface ResponseConfiguration {
    result: AgentMetric[];
    jwt: string;
    status: number;
    statusText: string;
}

export interface ResponseSavedUpdatedMetric {
    result: string;
    jwt: string;
    status: number;
    statusText: string;
}

export interface ResponseAllPCRC {
    result: Array<PcrcResponse>;
    jwt: string;
    status: number;
    statusText: string;
}

export interface Historic {
    id_metrica: string;
    historicCombinedNoFilled?: string;
    corte: string;
    fecha_seguimiento: Date;
    documento_cargue: string;
    fecha_creacion: Date;
    indicador: string;
}

export interface AssesOptions {
    nombre: string
}

export interface FilterHistory {
    availableLeaderHistoricPlan: string[];
    availableCutOff: string[];
    availablesMonth: string[];
    completeOptions? : string[];
}

export interface MonthAvalible {
    fecha_actual: string;
}
export interface DatosMetricasGestion {
    documento:          string;
    nombre_completo?:   string;
    pcrc:               string;
    avatar?:            string;
    "Dias vacaciones"?: string;
    horas_conexion?:    string;
    Ausentismo?:        string;
    procesos?:          string;
    Prorroga?:          string;
    idProrroga?:        string;
    prorrogas_h?:        string;
    estado?:            string;
    estado_curso?:      string;
}
export interface DatosMetricas {
    documento:         string;
    nombreCompleto:    string;
    pcrc:              string;
    avatar?:            string;
    "Dias vacaciones"?: string;
    Horas_Conexion?:   string;
    Ausentismo?:        string;
    Procesos?:        string;
    Prorroga?:        string;
    idProrroga?:        string;
    prorrogasH?:        string;
    estado?:            string;
    estado_curso?:      string;
}
export interface DatosMetricasExperencia {
    documento:          string;
    "nombre completo"?:  string;
    nombreCompleto?:    string;
    avatar?:            string;
    pcrc?:              string;
    estado?:            string;
    feedbacks?:         string;
    valoraciones?:      string;
    encuestas?:         string;
    "feedbacks pendientes"?: string;
}

export interface DatosMetricasExperenciaFormateados {
    documento:string;
    nombre_completo:string;
    pcrc:string;
    estado:string;
    feedbacks_pendientes:string;
    feedbacks_completos:string;
    valoraciones:string;
    encuestas:string;
    aprendizaje_agil:number;
    boss:number;
    user_logged_in:number;
}

export interface ResponseMonthAvalible extends Response{
    result:  MonthAvalible[];
}
export interface ResponseDatosMetricas extends Response{
    result:  DatosMetricas[];
}
export interface ResponseDatosMetricasGestion extends Response{
    result:  DatosMetricasGestion[];
}
export interface ResponseDatosMetricasExperencia extends Response{
    result:  DatosMetricasExperencia[];
}

export interface Sanciones {
    id?:      string;
    sancion: string;
    estado?:  string;
}
export interface Motivos {
    id?:      string;
    motivo: string;
    estado?:  string;
}

export interface VistaDataModalPD {
    id?:      string;
    vista: 'sanciones' | 'motivos';
    modo_creacion: boolean;
    nombre?: string;
    estado?: string;
}


export interface UpdateSanciones {
    id: string;
    sanciones: string;
    estado: string;
}

export interface StyloReturn {
    color?:      string;
    backgroundColor?: string;
    fontWeight?: string;
}

export interface DatosValoracion {
    dimension?:      string;
    fecha?:      string;
    observacion?:      string;
    observaciones?:      string;
    plataforma?:      string;
    "rol valorador"?:      string;
    score?:      string;
    valorador?:      string;
}
export interface DatosFeedbacks {
    Gestionado?:      string;
    compromiso?:      string;
    compromisos?:      string;
    dimension?:      string;
    fecha?:      string;
    observacion?:      string;
    observaciones?:      string;
    plataforma?:      string;
    "tipo feedback"?:      string;
    valorador?:      string;
}
export interface DatosFormacion {
    documento?:      string;
    descripcion?:      string;
    descripciones?:      string;
    estado?:      string;
    fecha_creacion?:      string;
    fecha_fin?:      string;
    fecha_inicio?:      string;
    fecha_modificacion?:      string;
    id_externo?:      string;
    id_mo_preturnos?:      string;
    id_mo_preturnos_resultados?:      string;
    id_preturno_plataforma?:      string;
    porcentaje_avance?:      string;
    titulo?:      string;
}
export interface DatosSSTTeletrabajo {
    name?:      string;
    documento?:      string;
    descripcion?:      string;
    descripciones?:      string;
    estado?:      string;
    fecha_creacion?:      string;
    fecha_fin?:      string;
    fecha_inicio?:      string;
    fecha_modificacion?:      string;
    id_externo?:      string;
    id_mo_preturnos?:      string;
    id_mo_preturnos_resultados?:      string;
    id_preturno_plataforma?:      string;
    porcentaje_avance?:      string;
    titulo?:      string;
    botiquinExtintor?:      string;
    cables?:      string;
    descansapies?:      string;
    espacio?:      string;
    estado_proceso?:      string;
    fechaSeguimiento?:      string;
    inspeccion?:      string;
    mouseTeclado?:      string;
    silla?:      string;
    sst?:      string;
    superficie?:      string;
    vista_frontal?:      string;
    observaciones?:      string;
    observacion?:      string;
    recomendaciones?:      string;
    recomendacion?:      string;
}