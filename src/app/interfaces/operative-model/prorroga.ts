export interface Prorroga {
    id_prorrogas_laborales:number;
    documento:string;
    fecha_ingreso:string;
    nombre_completo:string;
    duracion_contrato_actual:string;
    tipo_contrato:string;
    fecha_inicio_prorroga:string;
    fecha_fin_prorroga:string;
    fecha_modificacion?:string;
    se_envia_preaviso:string;
    fecha_fin_prorroga_preavisada:string;
    estado_prorroga:string;
    detalle:string;
    observacion:string;
    prorroga_actual:string;
}
