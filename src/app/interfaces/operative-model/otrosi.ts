import { Response } from "../../models/Response";

export interface Otrosi {
    fecha_inicio_aplicacion:string;
    estado:string;
    tipos:string;
    fecha_creacion_registro:string;
}

export interface OtrosiResponse extends Response {
    result:Array<Otrosi>;
}
