import { Response } from "../../models/Response";
import { SelectType } from "../dashboard/powerbi";

export interface ResourcesGeneral {
  '0': string;
  '1': string;
  '2':string;
}

export interface ResourcesGeneralResponse extends Response{
    result: Array<ResourcesGeneral>
}

export interface ResourcesByCity{
    Item: string;
}

export interface ResourcesByCityResponse extends Response{
    result: Array<ResourcesByCity>
}

export interface ResourcesByBuilding{
    Total_administrativos: string,
    Total_operativos: string,
    'Usada_%_administrativos': string,
    'Usada_%_operativos':string,
    Usada_administrativos:string,
    Usada_operativos:string,
    Ciudad:string,
    Edificio:string, 
}

export interface ResourcesByBuildingResponse extends Response{
    result: Array<ResourcesByBuilding>
}
export interface ResourcesByFloor{
    Capacidad_total_administrativos: string,
    Capacidad_total_operativos: string,
    'Capacidad_usada_%_administrativos': string,
    'Capacidad_usada_%_operativos':string,
    Capacidad_usada_administrativos:string,
    Capacidad_usada_operativos:string,
    Ciudad:string,
    Edificio:string,
    Piso:string
}

export interface ResourcesByFloorResponse extends Response{
    result: Array<ResourcesByFloor>
}

export interface DinamicInterface{
    [key: string]: string
}

export interface GetListResponse extends Response{
    result: Array<SelectType>
}









