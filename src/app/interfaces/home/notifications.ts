import { Communications } from "./communication";
import { SafeUrl } from "@angular/platform-browser";
import { Response } from "../../models/Response";
export interface responseNotificationDetail extends Response{
    result: notificationDetail[];
}
export interface notificationDetail{
    titulo: string;
    contenido: string;
    comentario_activo: string;
    comentario_obligatorio: string;
    timeNotification: string;
}
export interface notificationComment{
    comentario_obligatorio: string;
    id_notification: string;
}
export interface responseSelect extends Response{
    result: select[];
}
export interface select{
    id: string;
    name: string;
    client?: string;
    Society?: string;
}
export interface responseFilters extends Response{
    result: filters[];
}
export interface responseStatus{
    status: number;
}
export interface countNotification extends Response{
    result: number;
}
export interface filters{
    id_notificaciones_tipo_filtros: string;
    valor: string;
}
export interface responseMediaMultiple extends Response{
    result: mediaMultiple[];
}
export interface mediaMultiple{
    file?: SafeUrl;
    id_jarvis_uploads: string;
    nombre_file: string;
    tipo_file: string;
}
export interface responseNotification extends Response{
    result: notification[];
}
export interface notification{
    'documento creador': SafeUrl;
    'documento_modificador': string;
    estado: string;
    'fecha fin': string;
    'fecha inicio': string;
    fecha_creacion: string;
    fecha_modificacion: string;
    'id notificaciones': string;
    'nombre creador': string;
    'título': string;
}
export interface responseNotificationById extends Response{
    result: notificationById;
}
export interface responseAddFiles extends Response{
    result: number;
}
export interface responseAddNotification extends Response{
    result: string;
}
export interface notificationById{
    activo: string;
    comentario_activo: string;
    comentario_obligatorio: string;
    contenido: string;
    descripcion: string;
    duracion_pemanencia_minima: string;
    fecha_fin_vigencia: string;
    fecha_inicio_vigencia: string;
    id_notificaciones?: string;
    id_notificaciones_tipos: string;
    obligatorio: string;
    titulo: string;
    documento_creador?: string;
    estado?: string;
    fecha_creacion?: string;
}
export interface filtersDrop{
    canalidades: string;
    cargos: string;
    cecos: string;
    clientes: string;
    departamentos: string;
    estadosUsuario: string;
    modalidadesDeTrabajo: string;
    municipios: string;
    pcrcs: string;
    roles: string;
    sedes: string;
    sociedad: string;
    tipoCargos: string;
}
//---------------------------------------------

export interface responseNotifications extends Response{
    result: filterResult[];
}
export interface responseNotificationsCommunicate extends Response{
    result: Communications[];
}
export interface responseNotificationsMediaMultiple extends Response{
    result: Filetipe[];
}

export interface Filetipe{
    nombre_file: string;
    tipo_file: string;
    id_jarvis_uploads: string;
    file: {
        changingThisBreaksApplicationSecurity: string;
    }
}
export interface Media{
    body: Blob;
    headers: {
        normalizedNames: object
    },
    ok: boolean;
    status: number,
    statusText: string
    type: number;
    url: string;
}
export interface filterResult extends Response{
    id: string;
    name: string;
}

export interface responseNotificationsExport extends Response{
    result: exportResult[];
}

export interface exportResult{
    cargo:string,
    cod_pcrc?: string;
    documento: string;
    documento_jefe?: string;
    fecha_lectura?: string;
    id_notificaciones: string;
    nombre_completo: string;
    nombre_jefe?: string;
    nombre_notificacion: string;
    pcrc?: string;
    tipo_estado?: string;
}
export interface responseNotificationsPrincipal extends Response{
    result: notificationsPrincipal[];
}
export interface responsedeleteMediaNovalid{
    status:number;
}
export interface notificationsPrincipal{
    'documento creador': string;
    estado: string;
    'fecha fin': string;
    'fecha inicio': string;
    'id notificaciones': string;
    título: string;
}
export interface responseNotificationsDetail extends Response{
    result: notificationsDetail[];
}
export interface notificationsDetail{
    documento: string;
    nombre_completo: string;
    cargo: string;
    fecha_lectura: string;
}
export interface responseNotificationsDetailMetrics extends Response{
    result: notificationsDetailMetrics[];
}
export interface notificationsDetailMetrics{
    faltantes: string;
    leidos: string;
    porcentaje: string;
    publico_objetivo: string;
}