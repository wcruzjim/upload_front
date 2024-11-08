import { Response } from "../../models/Response";
import { SelectType } from "../dashboard/powerbi";

export interface Traducciones {
    id_gtr_estados_traducciones: number,
    estado: string,
    traduccion: string,
    id_dp_clientes?: number,
    status: string
}

export interface TraduccionesCliente {
    cliente: string,
    conteo: number,
    id: number
}

export interface TraduccionesFormated {
    id_gtr_estados_traducciones: number,
    estado: string,
    traduccion: string,
    id_dp_clientes?: number,
    status: string
}

export interface TraduccionesClienteFormated {
    cliente: string,
    conteo: number
}

export interface GetTraducciones extends Response {
    result: Array<Traducciones>
}

export interface GetTraduccionesCliente extends Response {
    result: Array<TraduccionesCliente>
}