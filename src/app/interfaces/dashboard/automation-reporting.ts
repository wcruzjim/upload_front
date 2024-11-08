import { Response } from "../../models/Response";

export interface ClientsAutomation {
    id: number;
    client: string;
}

export interface ClientsAutomationReporting extends Response {

    result: ClientsAutomation[];
}

export interface FileName {
    idFile: number;
    clientFile: string;
}

export interface FileNameReport extends Response {

    result: FileName[];
}

export interface ResourceClient {
    nombre_insumo: string;
    id_insumo: number;
 }

 export interface ResourceClientReport extends Response {

    result: ResourceClient[];
}

export interface FieldsEditTable 
{
    nameField: string,
    description  : string,
    type: string ,
    lengthField : number,
    optional : boolean
    defaulValue : string,
    isNull : boolean,
    withOutSign : boolean
}

export interface DescribeTableInterface extends Response 
{
    result : Describe[];
}

export interface Describe
{
    Field : string,
    Type: string,
    Length: number,
    Null: boolean | string,
    Default: string,
    Extra: string | boolean,
    Key: string,
    Collation : string,
    Comment : string,
    Status: string
}

export interface matBadge
{
    label : string,
    desc : string,
    hidden : boolean
}

export interface infoInsumoAutomat_itf
{
    result : [
        activo : number,
        dia_agregacion: string,
        id_cliente : number,
        id_insumo : number,
        nombre_campo_actualizacion : string,
        nombre_insumo : string,
        prevision_carga : string
    ]
}

export interface infoInsumoAutomat_itf_extend
{
    result : [
        insumo_automatizacion : intf_insumo_automatizacion,
        valores_dia_agregacion : intf_valores_dia_agregacion,
        valores_prevision_carga : intf_valores_prevision_carga
    ];    
}

export interface intf_insumo_automatizacion
{
    activo : number,
    dia_agregacion: string,
    id_cliente : number,
    id_insumo : number,
    nombre_campo_actualizacion : string,
    nombre_insumo : string,
    prevision_carga : string
   
}

export interface intf_insumo_automatizacion_result extends Response
{
    result : intf_insumo_automatizacion;   
}

export interface intf_valores_dia_agregacion
{
    alias : string,
    descripcion : string,   
}

export interface intf_valores_prevision_carga
{
    alias : string,
    descripcion : string
}

export interface DialogDropData {
    field: string;
    message : string
  }
  
export interface runTableEdit
{           
    Actualizar_nombre_temporal_tabla : Array<string>,
    Validar_tabla : Array<string>,
    Validar_llaves: Array<string>,
    Validar_insumo: Array<string>,
    Actualizar_tabla: Array<string>,
    Actualizar_llaves: Array<string>,
    Actualizar_insumo: Array<string>,
    Actualizar_nombre_original_tabla: Array<string>, 
    Revertir_Cambios : Array<string>  
}

export interface runTableEdit_result extends Response
{
    result : runTableEdit;
}

export interface runTableCreate
{
    Validar_tabla : Array<string>, 
    Validar_llaves : Array<string> , 
    Validar_insumo : Array<string>, 
    Crear_Tabla : Array<string>,
    Crear_Insumo : Array<string>    
}

export interface runTableCreate_result extends Response
{
    result : runTableCreate;
}

export interface KeysError 
{
    Primary : string ,
    Unique : Array<string>,
    Key : Array<string>,
}

export interface ResponseKey extends Response {

    result: KeysError;
}

export interface infoTable
{
    tabla : string,
    comentario: string,
    numero_filas: number,
    numero_columnas: number,
    Size_MB: number,
    activo: number,
    id_insumo: number
}

export interface infoTable extends Response
{
    result : infoTable
}

export interface booleano extends Response
{
    result : boolean
}

export interface describeTableInterface extends Response
{
    result : keys;
}

export interface keys 
{
    [index: number]: string | object[];
    
}
export interface key
{
    0: string,
    1: Array<string>,
    2: string
}