import { Response } from '../../models/Response';
export interface MenuDashboard {
    id: number;
    permision: string;
    title: string;
    icon?: string;
    tooltip?: string;
}

export interface CourseInduccion {
    documento: string;
    nombre_completo: string;
    curso?: string;
    estado?: string;
}

export interface Induccion{
    nombreCurso: string;
    estado: string;
    url: string;
    link_evaluacion: string;
    fecha_modificacion?: string;
}

export interface GetInduccion extends Response {
    result: Induccion[];
}

export interface CourseInduccion{
    documento: string;
    nombre: string;
    curso?: string;
    estado?: string;
}

export interface GetCourseInduccion extends Response {
    result: CourseInduccion[];
}

export type StyleListType = 1 | 2 