import { Response } from '../../models/Response';

export interface Positions {
    id_cargo: number;
    id_posicion: number;
    id_funciones: number;
    tipo_Cargo:string;
    cargo_rol:string;
    requiere_forecast:string;
    flujo_escalamiento:string;
    nombre: string;
    sociedad: string;
    validate_color: number;
}

export interface ResponsePositions extends Response {
    result: Positions[]
}

export interface FormatTablePositions{
    cargo: number
    posicion: number
    funcion: number
    nombre: string
    validate_color: number
}

export interface CurrentPositions{
    id: number
    name: number
}

export interface ResponseCurrentPositions extends Response {
    result: CurrentPositions[]
}

export interface CurrentFunctions{
    id: number
    funcion: number
}

export interface ResponseCurrentFunctions extends Response {
    result: CurrentFunctions[]
}

export interface SavePositionGeneral{
    positions: number
    functions: number
}

export interface ResponseBooleanString extends Response {
    result: boolean | string
}

export interface SavePosition{
    name: string
}

export interface SaveFunction{
    positions: number
    name: string
}

export interface SelectValues{
    id: number
    name: string
}

export interface ResponseSelectValues extends Response{
    result:SelectValues[];
}

export interface RoleValue{
    id: number
    name: string
}

export interface ResponseRoleValue extends Response {
    result: RoleValue[]
}

export interface DataNewPosition{
    positionSelected: number | null
    functionSelected: number | null
    typePosition: number
    typeRol: number
    flujoEscalamiento: number
    requiereForecast:number
    society: Array<SocietyValue> | null | string
}

export interface SocietyValue{
    id: number
    name: string
}

export interface ResponseSocietyValue extends Response {
    result: SocietyValue[]
}


