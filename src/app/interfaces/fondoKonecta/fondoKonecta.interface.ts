import { Response } from '../../models/Response';

export interface solicitudFondo {
    nombre?: string;
    documento?: string;
    activos?: number;
    capital_ahorro_navideno?: number;
    capital_cumpleanos?: number;
    capital_educativo?: number;
    capital_imprevisto?: number;
    capital_junior?: number;
    capital_prestacional?: number;
    capital_vacacional?: number;
    capital_voluntario?: number;
    departamento_expedicion_cedula?: string;
    egresos_mensuales?: number;
    entidad_bancaria?: string;
    estado_civil?: string;
    fecha_capital_cumpleanos?: string;
    fecha_capital_devolucion?: string;
    fecha_capital_educativo?: string;
    fecha_capital_prestacional?: string;
    fecha_capital_junior?: string;
    fecha_expedicion_cedula?: string;
    ha_tenido_cargo_publico?: number;
    ha_tenido_funcion_publica?: number;
    medio_escucha?: string;
    municipio_expedicion_cedula?: string;
    numero_cuenta_bancaria?: number;
    pais_expedicion_cedula?: string;
    pasivos?: number;
    patrimonio?: number;
    persona_expuesta_publicamente?: string;
    porcentaje_ahorro_obligatorio?: string;
    profesion?: string;
    regalo_afiliacion?: string;
    tipo_cuenta_bancaria?: string;
    tipo_vivienda?: string;
    id? : number;
    id_fondo_estado_rechazo_solicitud? : string[];
    id_estado? : string | number;
    fecha_registro? : string | number;
    ejecutivo_fondo? : string;
    motivo_rechazo_texto? : string;
}

export interface responseCreaarSolicitudFondo extends Response {
    result: string | boolean;
}
export interface responseModificarSolicitudFondo extends Response {
    result: string | boolean;
}

export interface responseGetOwnRequests extends Response {
    result: solicitudFondo[];
}


