
export interface TurnosExcepcionales {
    cantidad : string;
    servicio : string;
    tipo : string;
    nueva_fecha : string;
    horario : string;
    cantidad_horas : string;
    condicion_turno : string;
    condicion_descanso : string;
    documento : string;
    fecha_creacion : string;
    ids_turnos_excepcionales : string;
}

export interface TurnosExcepcionalesFormatted {
    cantidad : string;
    servicio : string;
    tipo : string;
    nueva_fecha : string;
    horario : string;
    cantidad_horas : string;
    condicion_turno : string;
    condicion_descanso : string;
    documento : string;
    fecha_creacion : string;
    ids_turnos_excepcionales : string;
    'accion': number;
}

export interface IdNameDictionaryAgent {
	id_tur_turnos_usuarios: number;
	cedula: string;
	nombre_apellido: string;
}
