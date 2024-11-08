import { Response } from '../../models/Response';

export interface RetirosGeneral extends Response {
    result:SolicitudRetiro[]
}

export interface SolicitudRetiro {
    fecha_solicitud:string
    documento:string
    nombre_completo:string
    tipo_medida:string
    motivo_medida:string
    aspecto_medida:string
    fecha_alta:string
    fecha_baja:string
    telefono1:string
    celular1:string
    celular2:string
    email_personal:string
    email_corporativo:string
    observacion:string
}