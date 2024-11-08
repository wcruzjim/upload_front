import { Response } from "../../models/Response";
import { SelectType } from "../dashboard/powerbi";

export interface Skills {
    id_skills: number,
    name?: string,
    id_dp_clientes?: number,
    status?: number,
    internal_code: string,
    cod_pcrc?: number
}

export interface Estados {
    id_gtr_estados?: number,
    name: string,
    estado: string,
    id_gtr_skills: number,
    status?: number
}

export interface RangoEstados {
    id_gtr_rango_estados: number,
    id_gtr_estados: number,
    tiempo_inicio: number,
    tiempo_fin: number,
    icono: string,
    color_fondo: string,
    color_fuente?: string
}

export interface EstadosFormated {
    id_gtr_estados?: number,
    name: string,
    estado: string,
    id_gtr_skills: number,
    status?: string
}

export interface RangoEstadosFormated{
    id_gtr_rango_estados: number,
    tiempo_inicio: string,
    tiempo_fin: string,
    color_fondo: string,
    icono: string
}

export interface GetSelectOptions extends Response {
    result: Array<SelectType>;
}

export interface GetSkills extends Response {
    result: Array<Skills>
}

export interface GetEstados extends Response {
    result: Array<Estados>
}

export interface GetRangoEstados extends Response {
    result: Array<RangoEstados>
}