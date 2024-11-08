import { Response } from '../../models/Response';


export interface dataCardsResponse extends Response{
    result:dataCards[];
}

export interface FiltersByPadreResponse extends Response{
    result:DatosFilterItemIdName[];
}

export interface dataCards {
    id_configuracion_carga_exporte?:number;
    id_per_acciones?:number;
    titulo?:string;
    icon?:string;
    titulo_modal?:string;
    ruta_descarga_excel?:string;
    rtua_carga_excel?:string;
    id_cargas_plantilla_base?:number;
    aplica_filtros?:number;
}

export interface DatosFilterItemResponse extends Response{
    result:DatosFilterItem[];
}

export interface DatosFilterItem {
    datosFilter?: DatosFilterItemIdName[]; 
    datos_desde?: null | string; 
    datos_iniciales?: string; 
    depende_de?: string; 
    id_configuracion_exportes?: string; 
    id_filtro?: string; 
    id_jarvis_configuracion_insumos_tipos_filtros?: string; 
    metodo_controlador?: string; 
    nombre_filtro?: string; 
    requerido?:string;
    nombre_input?: boolean; 
}

export interface DatosFilterItemIdName {
    id: string;
    name: string;
}

export interface FiltrosSelected {
    centro_costos: [] | DatosFilterItemIdName[];
    codigo_pcrc: [] | DatosFilterItemIdName[];
    cliente: [] | DatosFilterItemIdName[];
}



