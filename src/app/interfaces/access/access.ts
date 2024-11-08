import { Response } from "../../models/Response";

export interface PCRCMultipleClients {
    pcrc: string;
    documento: string;
    pcrc_nombre: string;
}

export interface CECOMultipleCientes{
    centros_costos: string;
    id: string
}

export interface GetPCRCMultipleClients extends Response {
    result: Array<Clients | PCRCMultipleClients | CECOMultipleCientes>
}

export interface GetCECOMultipleClients extends Response {
    result: Array<Clients | PCRCMultipleClients | CECOMultipleCientes> 
}

export interface Clients{
    cliente: string;
    id_dp_clientes: string;
}

export interface GetClients extends Response {
    result: Array<Clients | PCRCMultipleClients | CECOMultipleCientes>;
}

export interface GetDocumentNameAccess extends Response{
    result: {
        corporative: Array<CECOMultipleCientes>,
        noCorporative: Array<CECOMultipleCientes>
    }
}