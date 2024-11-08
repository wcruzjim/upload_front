export interface UsuarioEnLinea {
    username: string,
    identify: string,
    machine: string,
    actions?: string,
    operation_internal_code: string,
    ceco: string,
    date_create: number,
    id_socket?: string,
    ip: string,
    pcrc: string,
    source?: string,
    transport?: string,
    EIO?:string,
    formatedHour?: string
}

export interface Filtros {
    name: string,
    value: string
}

export interface Exportable {
    usuario: string,
    maquina: string,
    ip: string,
    operacion: string,
    horas: string,
    dias: string
}

export interface ReportTablePresence {
    area: string,
    nombre: string,
    usuario: string
    estado?: string,
    hora?: string,
    promedio?: string,
    activo: string,
    conexion?: Date
}

export interface ReportTablePresenceUser {
    fecha: string,
    usuario: string
    activo: string,
    inactivo: string,
    cliente?: string
}
