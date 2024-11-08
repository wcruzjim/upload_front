import { Response } from "../../models/Response";
import { select } from "../home/notifications";
export interface justificationsConfig {
    id: string;
    justificacion: string;
    estado_descripcion: string;
}
export interface ResponseDiasHabilesConfig extends Response{
    result: number;
}
export interface responseJustificationsConfig extends Response{
    result: justificationsConfig[];
}
export interface selectIndicators {
    id: string;
    name: string;
    value?: string;
}
export interface responseSelectIndicators extends Response{
    result: selectIndicators[];
}
export interface ContractingGoalTableResumen {
    cod_pcrc: string;
    documento: string;
    indicadores?: number;
    nombre_completo: string;
    nombre_jefe: string;
    tipo_estado: string;
    id?:string;
    estado?:string;
    id_estado?:string;
    fecha?:string;
    observacion?:string;
}
export interface responseContractingGoalTableResumen extends Response{
    result: ContractingGoalTableResumen[];
}
export interface ContractingGoalTableDetail {
    cod_pcrc: string;
    documento: string;
    idIndicator?:string;
    indicador?:string;
    meta?:string;
    nombre_completo: string;
    nombre_jefe: string;
    tipo_estado: string;
}
export interface responseContractingEnabled extends Response{
    result: string;
}
export interface responseDate extends Response{
    result: string;
}
export interface infoObjetivePublic {
    cod_pcrc: string;
    documento: string;
    nombre_completo: string;
    nombre_jefe: string;
    tipo_estado: string;
}
export interface responseInfoObjetivePublic extends Response{
    result: infoObjetivePublic[];
}
export interface JustifyGoalTableResumen {
    cod_pcrc: string;
    documento: string;
    idJustificacion: string;
    idResponsable: string;
    justificacion: string;
    nombre_completo: string;
    nombre_jefe: string;
    responsable: string;
    tipo_estado: string;
}
export interface mygoalTableResumen {
    cod_pcrc: string;
    documento: string;
    estado: string;
    fecha: string;
    id_mo_contratacion_metas_estados: string;
    indicadores: string;
    nombre_completo: string;
    nombre_jefe: string;
    tipo_estado: string;
}
export interface responseMygoalTableResumen extends Response{
    result: mygoalTableResumen[];
}
export interface ContractingGoalDetail {
    cargo: string;
    cod_pcrc: string;
    documento: string;
    estado: string;
    fecha: string;
    id_mo_contratacion_metas_v2?: string;
    id_mo_contratacion_metas_estados?: string;
    ind_id_indicadores?: string;
    indicador: string;
    meta: string;
    nombre_completo: string;
    nombre_jefe: string;
    observacion: string;
    tipo_estado: string;
}
export interface responseContractingGoalDetail extends Response{
    result: ContractingGoalDetail[];
}
export interface justify {
    cod_pcrc: string;
    documento: string;
    id_mo_contratacion_metas_justificacion_tipo: string;
    id_mo_contratacion_metas_responsable_justificacion: string;
    observacion: string;
}
export interface responseJustify extends Response{
    result: justify[];
}
export interface goal {
    cod_pcrc: string;
    documento: string;
    fecha: string;
    ind_id_indicadores: string;
    meta: string;
}
export interface GoalAgreement {
    id: number;
    nombre: string;
    mes: Date;
    indicador: string;
    estadoId: number;
    cumplimiento: string;
    razon: string;
    estado: string;
    documento?:string;
}
export interface ContractingGoalResumen {
    documento: string;
    nombre_completo: string;
    cod_pcrc: string;
    tipo_estado: string;
    nombre_jefe: string;
    estado: string;
    fecha: string;
    ind_id_indicadores: string;
    id_mo_contratacion_metas_v2: string;
}
export interface AceptRejectAgreement {
    indicador: string;
    cumplimiento: string;
    pcrc: string;
    mes: Date;
}
export interface UpdateAgreement {
    id: number;
    cumplimiento: string;
}
export interface UpdateSanciones {
    id: string;
    sanciones: string;
    estado: string;
}
export interface responseIsChief extends Response{
    result: number;
}
export interface filtrosJustify{
    name: string;
    filtro: select[];
}