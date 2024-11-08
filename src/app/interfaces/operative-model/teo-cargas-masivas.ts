import { Response } from '../../models/Response';
import { SelectType } from '../dashboard/powerbi';

export interface CreateMetricResponse extends Response{
    result:SelectType[];
}

export interface obtenerInsumos extends Response{
    result:Insumos[];
}

export interface Insumos {
    id:number;
    name:String;
}