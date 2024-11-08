import { Response } from "../../models/Response";

export interface StructContentSelect {
    value: string;
    viewValue: string;
  }
export interface ResponseStructContentSelect extends Response {   
    result: StructContentSelect[];
} 
export interface DataTablePersonasSeleccionar {
    id:                   number;
    personasSeleccion:    string;
    cantidadAsesores:     number;
    porcentajeRotacion:   string | number;
} 

export interface DataTableEstadoSolicitudesMeta4 {
    totalCandidatos:  number;
    candidatosOJT:    number;
    candidatosEnEntrenamiento: number;
    candidatosBaja:   number;
} 

export interface data_table_consolidado_personal_disponibilidad_modalidad {
    disponibilidad_lv: string;
    disponibilidad_s:    string;
    disponibilidad_df: string;
    modalidad:   string;
    cantidad_estimada: string;
    cantidad_real: string;        
} 

export interface data_table_historico_personal_entrenamiento {
    documento: string;
    nombre:    string;
    estado_actual: string;       
    jefe_actual: string;       
} 

export interface DataSolicitud {
    cod_pcrc: string;
    perfil: string;
    id_gh_perfil: number;
    cargo: string;
    tipo_contrato: number;
    vigencia_disp: number;
    tipo_vinculacion: number;
    tipo_ruta: number;
    requiere_entrenamiento: number;
    sede: number;
    duracion_jornada: number;
    id_estado_aprobacion: number;
    duracion_contrato: number;
    id_dp_tipo_solicitud: number;
    tipo_solicitud: string;
    ciudad_labora: number;
    fecha_formacion: Date;
    fecha_ojt: Date;
    fecha_conex: Date;
    holgura: number;
    asesores_crecimiento: number;
    asesores_reemplazo: number;
    asesores_requeridos: number;
    observacion: string;
} 
export interface data_solicitud_insert {
    id_solicitud: number;
    id_estado_aprobacion: string;
} 
export interface data_solicitud_update {
    status: boolean;
    id_estado_aprobacion: string;
} 

export interface InsertDataSolicitud {
    datosSent: DataSolicitud;
}

export interface ResponseDataSolicitud extends Response {   
    result: data_solicitud_insert;
} 
export interface ResponseDataSolicitudUpdate extends Response {   
    result: data_solicitud_update;
} 

export interface DataSolicitudModificar {
    id_dp_solicitudes: number;    
    id_estado_aprobacion: number;
    descripcion_rechazo: string;
    tipo_solicitud: string;
    fecha_formacion: Date;
    fecha_ojt: Date;
    fecha_conex: Date;
    asesores_crecimiento: number;
    asesores_reemplazo: number;
    asesores_requeridos: number;
    estado: string;
} 

export interface ResponseDataSolicitudModificar extends Response {   
    result: boolean;
}

export interface InsertDataSolicitudModificar {
    datosSent: DataSolicitudModificar;
}

export interface DataRotationPercentaje {   
    cod_pcrc: string;
    tipo: number;
    porcentaje: string;
} 

export interface DataHolguraRotation {   
    cod_pcrc: string;
    rotacion: string;
    rotacion_aula: string;
    rotacion_ojt: string;
} 

export interface ResponseDataHolguraRotation extends Response{   
    result: DataHolguraRotation;
} 

export interface ResponseDataRotationPercentaje extends Response{   
    result: DataRotationPercentaje[];
} 

export interface DataRotationPercentajeExperience {   
    codigo_pcrc: string;
    cliente: string;
    nombre_pcrc: string;    
    activos: number;
    retiros:number;
    rotacion: string;
    activos_ojt: number;
    retirados_ojt: number;
    rotacion_ojt: string;
    retirados_aula: number;
    rotacion_aula: string;
} 

export interface ResponseDataRotationPercentajeExperience extends Response{   
    result: DataRotationPercentajeExperience[];
} 

export interface DataRecursoSolicitudes {
      id_dp_solicitudes: number;
      cantidad_puestos: number;
      cantidad_diademas: number;
      perfil: string;
      fecha_instalacion: Date;
      fecha_produccion: Date;        
      tipo_solicitud: number;
      tipo_recurso: number;
      especificaciones: string;
      ubicacion: number;
      id_dp_plataforma: number;
      grabacion: number;
      instalacion_office: number;
      multicanal: number ;
      aplicaciones: number;
} 

export interface InsertDataRecursoSolicitudes {
    datosSent: DataRecursoSolicitudes;
}

export interface ResponseInsertDataRecursoSolicitudes extends Response{   
    result: boolean;
}

export interface DataPorcentajeRotacionSolicitud {
    id_dp_solicitudes: number;
    porcentaje_contratacion: string;
    porcentaje_seleccion: string;
    porcentaje_ojt: string;
    porcentaje_formacion: string;
}

export interface ResponseDataInfoPorcentajeRotacion extends Response{   
    result: DataPorcentajeRotacionSolicitud[];
}

export interface InsertDataPorcentajeRotacionSolicitud {
    datosSent: DataPorcentajeRotacionSolicitud;
}

export interface ResponseInsertDataPorcentajeRotacionSolicitud extends Response{   
    result: boolean;
}

export interface DataInfoDisponibilidad {
    id_dp_solicitudes:        number;
    asesores_reemplazo:       number;
    asesores_crecimiento:     number;
    id_dp_disponibilidad_lv:  number;
    id_dp_disponibilidad_s:   number;
    id_dp_disponibilidad_df:  number;
    id_dp_modalidad:          number;
} 
export interface ResponseDataInfoDisponibilidad extends Response{   
    result: DataInfoDisponibilidad[];
}

export interface InsertDataInfoDisponibilidad {
    datosSent: DataInfoDisponibilidad;
}

export interface ResponseInsertDataDisponibilidad extends Response{   
    result: boolean;
}

export interface DataInfoDisponibilidadMap {
    requestAsesoresRee:        number;
    requestAsesoresCre:       number;
    requestLunvie:     number;
    requestSab:  number;
    requestDomfest:   number;
    requestModalidad:  number;
}

export interface DataInfoSolicitud {
    cod_pcrc: string;
    perfil:  string;
    cargo:  string;
    tipo_contrato:   number;
    vigencia_disp: number;
    tipo_vinculacion: number;
    tipo_ruta: number;
    tipo_candidato: number;
    requiere_entrenamiento: number;
    sede: number;
    duracion_jornada: number;
    id_estado_aprobacion: number;
    descripcion_rechazo: string;
    duracion_contrato: number;
    tipo_solicitud: string;
    holgura: number;
    ciudad_labora: number;
    fecha_formacion: Date;
    fecha_ojt: Date;
    fecha_carga: Date;
    fecha_conex: Date;
    observacion: string;
    estado: string;
    cantidad_puestos: number;
    cantidad_diademas: number;
    perfil_recurso: string;
    fecha_instalacion: Date;
    fecha_produccion: Date;        
    tipo_solicitud_recurso: number;
    tipo_recurso: number;
    especificaciones: string;
    ubicacion: number;
    id_dp_plataforma: number;
    grabacion: number;
    instalacion_office: number;
    multicanal: number;
    aplicaciones: number;
    asesores_requeridos:number;
} 

export interface ResponseDataInfoSolicitud extends Response{   
    result: DataInfoSolicitud[];
} 


export interface DataEstadoPersonal {
    tipo_estado:  number;
} 

export interface ResponseDataEstadoPersonal extends Response{   
    result: DataEstadoPersonal[];
} 

export interface SelectType {
    value: string;
    viewValue: string;
}

export interface SelectPersonal {
    requestAsesoresCre: string;
    requestAsesoresRee: string;
}

export interface TotalSelectPersonal {
    asesores_crecimiento: string;
    asesores_reemplazo: string;
}

export interface DataObservacion {
    id_dp_solicitudes: number;
    observacion: string;
}

export interface InsertDataObservacion {
    datosSent: DataObservacion;
}

export interface ResponseInsertDataObservacion extends Response {   
    result: number;
}

export interface DataControlCambio {
    id_dp_solicitudes: number;
    fecha_formacion_base: Date;
    fecha_formacion_nueva: Date;
    fecha_ojt_base: Date;
    fecha_ojt_nueva: Date;
    fecha_conexion_base: Date;
    fecha_conexion_nueva: Date;
    estado_base: string;
    estado_nuevo: string;
    cantidad_asesores_base: number;
    cantidad_asesores_nuevo: number;
    area_solicitante: number;
    documento_solicitador: string;
    id_observacion: number; 
}   

export interface InsertDataControlCambio {
    datosSent: DataControlCambio;
}

export interface ResponseInsertDataControlCambio extends Response{   
    result: boolean;
}
export interface FormatedExportPersonal {
    idExporte: number;
    exportable: string;
    funcion: string;
}
export interface GetExportPersonal extends Response {
    result: Array<ExportPersonal>
}
export interface ExportPersonal {
    idExporte: number;
    exportable: string;
    funcion: string;
}
export interface GetExportDataDistributionPersonal extends Response{
    result: boolean;
}


export interface ResponseDataEstadoSolicitud extends Response{
    result: boolean;
}

export interface requests_pending_approval {
    id_solicitud: number;
    nombre_cliente: string;
    cod_pcrc: string;
}

export interface response_requests_pending_approval extends Response {   
    result: Array<requests_pending_approval>;
}
export interface requests_rejected {
    id_solicitud: number;
    nombre_cliente: string;
    cod_pcrc: string;
}

export interface response_requests_rejected extends Response {   
    result: Array<requests_rejected>;
}
export interface StructureFormatted {
    id: string;
    motivo: string;
    descripcion: string;
}

export interface responseStructureFormatted extends Response {
    result: Array<StructureFormatted>
}

export interface dataSelectedCard {
    exportable:string;
    funcion:string;
    icon:string;
    idExporte:string;
    permiso:string;
}

export interface filterFormValue {
    typeDate:number;
    dateStart:Date;
    dateEnd:Date;
}










