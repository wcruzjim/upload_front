export interface EventDetail{
    id_tur_eventos_turnos:string,
    id_tur_turnos_usuarios:string,
    inicio:string,
    fin:string,
    num_tipo_turno:string,
    color:string,
    descripcion:string,
    fecha_modificacion:string,
    icono:string,
    id_nov_novedad:string,
    nombre:string,
    summarizedTime?:string
}

export interface SimpleEvent{
    evento:string,
	inicio:string,
	fin:string,
	novedad:string
}

