import { Response } from "../../models/Response";

export interface SelectReportesResponse extends Response {
    result:Array<SelectReportesReturn>;
}

export interface SelectReportesTipologiasResponse extends Response {
    result:Array<SelectReportesTipologiasReturn>;
}

export interface UrlMetabaseReportesIsysResponse extends Response {
    result:string;
}

export interface SelectReportesReturnResponse extends Response {
    result:SelectReportesReturn;
}

export interface SelectReportesTipologiasReturnResponse extends Response {
    result:SelectReportesTipologiasReturn;
}

export interface UrlMetabaseReportesIsysReturnesponse extends Response {
    result:UrlMetabaseReportesIsysReturn;
}

export interface SelectReportes {
    reporte: string;
    id_tipologia: number;
    id_dashboard: number;
}

export interface SelectReportesReturn {
    id: string;
    name: string;
    idTipologia: number;
    idPregunta: number;
}

export interface SelectReportesTipologias {
    tipologia: string;
    id_tipologia_: number;
    pregunta: number;    
}

export interface SelectReportesTipologiasReturn {
    id: string;
    name: string;
    idTipologia_: number;
    idPregunta_: number;
}

export interface UrlMetabaseReportesIsys {
    id_: string;
    url: string;
}

export interface UrlMetabaseReportesIsysReturn {
    id: string;
    name: string;   
}