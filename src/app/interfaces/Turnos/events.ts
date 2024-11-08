import { Response } from "../../models/Response";

export interface Events {
  id_tur_tipo_turnos: string;
  num_tipo_turno: string;
  nombre: string;
  descripcion: string;
  icono: string;
  color: string;
  activo: string;
  min_tiempo: number;
  max_tiempo: number;
  aplicacion_manual: string;
}

export interface EventFormatted {
  id: string,
  icono: string;
  min_tiempo: number;
  max_tiempo: number;
  aplicacion_manual?: string;
  tipo: string;
  nombre: string;
  descripcion: string;
  color: string;
  activo: string;
  editar?: number;
}

export interface ListErrors {
  name?: string;
  description?: string;
  numType?: string;
  active?: string;
  minDuration?: string;
  maxDuration?: string;
  icon?: string;
  color?: string;
}


export interface SelectType {
  id: number | string;
  name: string;
}

export interface CheckedErrors {
  required?: boolean;
  minlength?: { requiredLength: number };
  maxlength?: { requiredLength: number };
  pattern?: boolean;
  email?: boolean;
  min?: { min?: number, max?: number };
  max?: { min?: number, max?: number };
}

export interface GetEvents extends Response {
  result: Events[];
}

export interface UpdateCreateEvent extends Response {
  result: Boolean;
}

export interface EventToExcludeEditShift extends Response{
  result: Array<string>
}