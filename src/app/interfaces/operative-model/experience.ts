import { SelectType } from "../dashboard/powerbi";

export interface ResponseFakeService {
    result: Experience[] | Feedback[] | Valoracion[] | Encuesta[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ResponseExperienceService {
    result: Experience[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ResponseFeedbackService {
    result: Feedback[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ResponseValoracionService {
    result: Valoracion[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ResponseEncuestaService {
    result: Encuesta[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ResponseFormacionService {
    result: Formacion[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ResponseFormacionDetalleService {
    result: Formacion[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface Experience {
    documento: string;
    encuestas:string;
    estado:string;
    feedbacks:string;
    feedbacksCompletos:string;
    nombreCompleto: string;
    pcrc:string;
    valoraciones:string;
    aprende:number;
    jefe:number;
    userLoggedIn:number;
}
export interface Feedback {
    Gestionado: string;
    compromiso: string;
    compromisos: string;
    dimension: string;
    fecha: string;
    observacion?: string;
    observaciones: string;
    plataforma: string;
    "tipo feedback": string;
    valorador: string;
}
export interface Valoracion {
    dimension: string;
    fecha: string;
    observacion: string;
    observaciones: string;
    plataforma: string;
    "rol valorador": string;
    score: string;
    valorador: string;
}
export interface Encuesta {
    fecha: string;
    id_externo: string;
    plataforma: string;
    tipologia: string;
}
export interface Formacion {
    aprende: string;
    documento: string;
    estado: string;
    nombre_completo: string;
    pcrc: string;
    jefe: number;
    user_logged_in:number;
}
export interface FormacionDetalle {
    descripcion: string;
    descripciones: string;
    documento: string;
    estado: string;
    fecha_creacion: string;
    fecha_modificacion: string;
    id_preturno: string;
    plataforma: string;
    porcentaje_avance: string;
    tipo: string;
    titulo: string;
}

export interface FormattedFeedback {
    fecha:string;
    gestionado:string;
    valorador:string;
    compromiso:string;
    compromisos:string;
    tipo_feedback: string;
    plataforma: string;
    dimension: string;
    observacion: string;
    observaciones: string;
}

export interface FormacionFormateada {
    documento:string;
    nombre_completo:string;
    pcrc: string;
    estado: string;
    aprendizaje_agil:string;
    boss:number;
    user_logged_in:number;
}

export interface DetalleFormacionFormateado {
    tipo:string;
    titulo:string;
    fecha_inicio:string;
    fecha_fin:string;
    score:string;
    estado:string;
    descripcion:string;
    descripciones:string;
}



export interface ProcesosDisciplinariosPendientesResponse extends Response {
    result:Array<ProcesosDisciplinariosPendientes>;
}

export interface DesempenoResponse extends Response {
    result:Array<Desempeno>;
}

export interface Desempeno {
    [fecha: string]: string;
    documento: string;
    estado: string;
    fecha_alta: string;
    nombre_completo: string;
    pcrc: string;
    historico?:string;
    pendientes?:string;
    boss:string;
    user_logged_in:string; 
}


export interface ProcesosDisciplinariosPendientes {
    documento:string;
    estado:string;
    fecha_creacion:string;
    fecha_sancion:string;
    id_estado:number;
    id_proceso_disciplinario:number;
    id_sancion:number;
    sancion:string;
    siguiente_accion:string;
    id_desempeno:number;
    tipo_desempeno:string;
    mes?:string;
}


export interface DetalleFeedbackResponse extends Response {
    result:DetalleFeedback;
}


export interface DetalleFeedback {
    'acción'?:string;
    'documento':string;
    'estado':string;
    'fecha sanción':string;
    'fecha_creacion':string;
    'id_estado':number;
    'id_proceso_disciplinario':number;
    'id_sancion':number;
    'sanción':string;
    'siguiente_accion':string;
    'tipo desempeño':string;
    'diagnostico'?:string;
    'plan_accion'?:string;
    'readOnly'?:boolean;
}

export interface ProcesoDisciplinarioPendiente {
    'acción':string;
    'documento':string;
    'estado':string;
    'fecha sanción':string;
    'fecha_creacion':string;
    'id_estado':number;
    'id_proceso_disciplinario':number;
    'id_desempeno':number;
    'id_sancion':number;
    'sanción':string;
    'siguiente_accion':string;
    'tipo desempeño':string;
}

export interface PliegoCargosPendiente {
    'acción':string;
    'documento':string;
    'estado':string;
    'fecha sanción':string;
    'fecha_creacion':string;
    'id_estado':number;
    'id_proceso_disciplinario':number;
    'id_sancion':number;
    'id_desempeno':number;
    'sanción':string;
    'siguiente_accion':string;
    'tipo desempeño':string;
    'pregunta_concepto_jefe':string;
    'readOnly'?:boolean;
}

export interface PliegoCargosGestionado {
    id_proceso_disciplinario: number;
    id_estado_anterior:number;
    id_estado_nuevo:number;
    concepto_jefe:string;
    observaciones:string;
}

export interface StyleTextEncuestas {
    color:string;
    fontWeight:string;
}

export interface Fallos {
    desempeno:string;
    documento:string;
    fecha:string;
    mes:string;
}

export interface DisciplinaryProcessNotificationResponse extends Response {
    result:Array<DisciplinaryProcessNotification>;
}

export interface DetalleLlamadoAtencionResponse extends Response {
    result:DisciplinaryProcessNotification;
}

export interface DisciplinaryProcessNotification {
    id_proceso_disciplinario: number;
    id_estado:number;
    documento: string;
    fecha_sancion: string;
    nombre_completo: string;
    cargo: string;
    documento_jefe: string;
    nombre_completo_jefe: string;
    pcrc: string;
    municipio: string;
    cliente: string;
    compromisos:Array<string>;
    desempeno:string;
    sociedad:string;
    email:string;
    tipo_documento:string;
    tipo_documento_autor_proceso:string;
    ip?:string;
    usuario_red?:string;
    fecha_radicado?:string;
    documento_autor_proceso?:string;
    nombre_completo_autor_proceso?:string;
    usuario_red_autor_proceso?:string;
    ip_autor_proceso?:string;
    feha_gestionado_jefe?:string;
    anio_radicado?:number;
    mes_radicado?:string;
    dia_radicado?:number;
    mes_sancion?:string;
    readOnly?:boolean;
}

export interface DetallePliegoCargosResponse extends Response {
    result:ManagedChargeSheet;
}


export interface ChargeSheetNotification {
    id_proceso_disciplinario: number;
    id_estado:number;
    documento: string;
    fecha_sancion: string;
    nombre_completo: string;
    cargo: string;
    municipio: string;
    id_desempeno:number;
    desempeno:string;
    sociedad:string;
    concepto_jefe:string;
    tipo_documento:string;
    tipo_documento_autor_proceso:string;
    ip?:string;
    usuario_red?:string;
    fecha_gestionado_empleado?:string;
    documento_autor_proceso?:string;
    nombre_completo_autor_proceso?:string;
    cargo_autor_proceso:string;
    usuario_red_autor_proceso?:string;
    ip_autor_proceso?:string;
    feha_gestionado_jefe?:string;
    anio_gestionado_empleado?:number;
    mes_gestionado_empleado?:string;
    dia_gestionado_empleado?:number;
    mes_sancion?:string;
    readOnly?:boolean;
    questions?:Array<ChargeSheetQuestions>;
    cantidad_personas:number;
    cantidad_personas_cumplen:number;
    cantidad_personas_incumplen:number;
    string_codigo_sustantivo:string;
    id_meta_desempeno:number;
    meta_desempeno:string;


}

export interface ManagedChargeSheet {
    datosPliegosCargos: ChargeSheetNotification;
    preguntas:Array<ChargeSheetQuestions>;
}

export interface ChargeSheetQuestions {
    id_pregunta:number;
    pregunta:string;
    respuesta?:string;
}


export interface ChargeSheetNotificationResponse extends Response {
    result:ManagedChargeSheet;
}


export interface CompromisosProcesoDisciplinarioResponse extends Response {
    result:Array<CompromisoProcesoDisciplinario>;
}

export interface AcuseDeReciboResponse extends Response {
    result:boolean;
}

export interface ProcesoDisciplinarioGuardadoResponse extends Response {
    result:boolean;
}

export interface AcuseDeRecibo {
    id_proceso_disciplinario: number;
    id_estado_anterior:number;
    id_estado_nuevo:number;
    email?:string;
}

export interface CompromisoProcesoDisciplinario {
    id_compromiso:number;
    compromiso:string;
}

export interface CompromisoProcesoDisciplinario {
    id_compromiso:number;
    compromiso:string;
}

export interface CompromisosParaGuardar {
    id_proceso_disciplinario:number;
    documento:string;
    id_estado_anterior:number;
    id_estado_nuevo:number;
    compromiso:string;
}

export interface HistoricoDesempenoResponse extends Response {
    result:Array<HistoricoDesempeno>;
}

export interface HistoricoDesempeno {
    documento:string;
    nombre:string;
    fecha:string;
    desempeno:string;
    novedad:string;
    observacion_novedad:string;
    id_sancion:number;
    sancion:string;
    id_estado:number;
    estado:string;
    id_proceso_disciplinario:number;
    id_exonerado:number;
    escala_proceso_disciplinario:string;

}

export interface FormattedHistoricoDesempeno {
    documento:string;
    nombre:string;
    fecha:string;
    desempeno:string;
    novedad:string;
    observacion_novedad:string;
    id_sancion:number;
    sancion:string;
    id_estado:number;
    estado:string;
    id_proceso_disciplinario:number;
    id_exonerado:number;
    exonerado:string;
    escala_proceso:string;
    accion:string;
}

export interface DisciplinaryProcessHistoryParameters {
    costCenterIdList?:Array<number>;
    document?:string;
    endDate:string;
    startDate:string;
    penaltyIdList:Array<number>;
    statusIdList:Array<number>;
    deletedId?:number;
}

export interface DisciplinaryProcessHistoryResponse extends Response {
    result:Array<DisciplinaryProcessHistory>;
}

export interface DisciplinaryProcessHistory {
    id_proceso_disciplinario:number;
    fecha_radicado:string;
    documento:string;
    nombre:string;
    id_sancion:number;
    sancion:string;
    id_estado:number;
    fecha_sancion:string;
    fecha_creacion:string;
    estado:string;
    id_exonerado:number;
    exonerado?:string;
    cargo:string;
    centro_costos:string;
    centro_costos_encargo:string;
    motivo_eliminado:string;
    responsable:string;
    observaciones_responsable:string;
    id_sancion_pliego:number;
    sancion_pliego:string;
    accion?:string;
    exonerar?:string;
}

export interface DisciplinaryProcessDetailsResponse extends Response {
    result:DisciplinaryProcessDetails;
}

export interface DisciplinaryProcessDetails {
    details:FeedbackDetails|Array<CompromisoProcesoDisciplinario>;
    history:Array<DisciplinaryProcessHistoryDetails>;
}

export interface FeedbackDetails {
    diagnostico:string;
    plan_accion:string;
}

export interface DisciplinaryProcessHistoryDetailsResponse extends Response {
    result:Array<DisciplinaryProcessHistoryDetails>;
}

export interface DisciplinaryProcessHistoryDetails {
    fecha:string;
    documento:string;  
    usuario_red:string;
    ip:string;
    estado_anterior:string;
    estado_nuevo:string;
}

export interface MotivosExoneracionResponse extends Response {
    result:Array<SelectType>;
}

export interface EstadosProcesosDisciplinariosResponse extends Response {
    result:Array<SelectType>;
}

export interface UserIdResponse extends Response {
    result:string;
}

export interface ColumnActionStyle {
    backgroundColor:string;
}

export interface FeedbackGestionadoJefe {
    id_feedback:number;
    documento:string;
    id_estado_anterior_feedback:number;
    id_estado_nuevo_feedback:number;
    diagnostico:string;
    plan_accion:string;
    fecha_feedback:string;
}

export interface DisciplinaryProcessResponse extends Response {
    result:Array<DisciplinaryProcess>;
}

export interface DisciplinaryProcess {
    fecha_proceso:string;
    documento_autor_proceso:string;
    nombre_autor_proceso:string;
    fecha_falta:string;
    motivo:string;
    sancion:string;
    centro_costos:string;
    dias_suspension:string;
    observaciones:string;
    subido_por:string;
    fecha_creacion:string;
    fecha_modificacion:string;
}


export interface CuadroComparativoPliegoCargosResponse extends Response {
    result:Array<CuadroComparativoPliegoCargos>;
}

export interface CuadroComparativoPliegoCargos {
    id_proceso_disciplinario:number;
    concepto_jefe?:string;
    observaciones?:string;
    cantidad_personas:number;
    cantidad_personas_cumplen:number;
    cantidad_personas_incumplen:number;
    id_meta_desempeno:number;
    meta_desempeno:string;
}

export interface CuadroComparativoFormateadoPliegoCargos {
    parametro:string;
    cantidad_personas:number;
    porcentaje:number;
}


export interface PliegoCargosRadicado {
    id_proceso_disciplinario:number;
    id_estado_anterior:number;
    id_estado_nuevo:number;
    respuestas:RespuestasPliegoCargos;
}


export interface RespuestasPliegoCargos {
    '1':string;
    '2':string;
    '3':string;
    '4':string;
    '5':string;
    '8':string;
    '9':string;
}

export interface TablaDesempeno {
    parametro:string;
    desempeno:string;
}

export interface ProcesoDisciplinarioExonerado {
    idProcesoDisciplinario:number;
    fechaFalta:string;
    documento:string;
    idMotivoEliminado?:number;
}