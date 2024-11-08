import { EventTemplate } from "./EventTemplate";

export interface InterchangeableShift {
  id_tur_turnos_usuarios: number;
  cedula: number;
  descanso: string;
  eventos: Array<EventTemplate>;
  eventos_resumidos;
  inicio: string;
  fin: string;
  nombre: string;
}

export interface InterchangeShiftAvailable {
  eventos: Evento[];
  id_tur_turnos_usuarios: string;
  inicio: Date;
  fin: Date;
  cedula: string;
  nombre: string;
  descanso: string;
  fin_turno_anterior: Date;
  inicio_turno_siguiente: null;
  eventos_resumidos: EventosResumido[];
}

export interface Evento {
  id_tur_turnos_usuarios: string;
  cedula: string;
  inicio_turno: Date;
  fin_turno: Date;
  fin_turno_anterior: Date;
  inicio_turno_siguiente: null;
  descanso: string;
  inicio: Date;
  fin: Date;
  num_tipo_turno: string;
  nombre: string;
  icono: string;
  descripcion: string;
  color: string;
  primer_nombre: string;
  primer_apellido: string;
}

export interface EventosResumido {
  nombre: string;
  icono: string;
  color: string;
  descripcion: string;
}
