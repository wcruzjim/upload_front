import { Response } from '../../models/Response';
import { DataActionTable } from '../tables/DataActionTable';
import { ConfigAction } from '../tables/tables';
import { SelectValues } from '../generic';

export interface GetExistingMonths {
    id: number;
    name: string;
}

export interface GetInformationClients {
    id: number;
    name: string;
}

export interface ResponseGetInformationClients extends Response {
    result: Array<ListClienteSelect> 
}

export interface GetInformationCostCenters {
    id: number;
    name: string;
}

export interface CECOMultipleCientes{
    centros_costos: string;
    id: string
}

export interface SelectOption {
    id: number;
    name: string;
}

export interface SelectedClients {
    clients: boolean
}

export interface ResponseDataCostCenters extends Response {
    id: number;
    name: string;
}

export interface FormatedFilter {
    fecha?: string;
    cliente?: Array<string>;
    ceco?: Array<string>;
}

export interface ListClienteSelect {
    id: number;
    clienteArea: string;
}

export interface ListCecoSelect {
    id: number;
    centrosCostos: string;
}

export interface FilterSend {
    id: string;
    name: string;
}

export interface InfoCard {
    name: string;
    value: number;
    style?: DataSummaryStyle;
    sign?: string;
}

export interface DataSummaryStyle {
    titleColor: string;
}

export interface ResponseDataSummary extends Response {
    result: InfoResultaPageInitial
}

export interface InfoTableSummary {
    id?: string;
    tipo: string;
    estimado_cdg: string;
    frec_cdg: string;
    estimado_operacion: string;
    frec_operacion: string;
    presupuesto: string;
    frec_ppto: string;
    cumplimiento_cdg_vs_ppto: string;
    cumplimiento_ops_vs_ppto: string;
    level: string;
    style_action: ConfigAction
}

export interface InfoResultaPageInitial {
    infoCard: Array<InfoCard>;
    infoTable: Array<InfoTableSummary>;
}

export interface InfoTableSummaryFormat {
    id?: string;
    tipo: string;
    'estimado cdg': string;
    'costo / estimado cdg': string;
    'estimado ops': string;
    'costo / estimado ops': string;
    presupuesto: string;
    'costo / estimado ppto': string;
    '% cump cdg vs ppto': string;
    '% cump ops vs ppto': string;
    style: DinamicInterface
    styleAction: ConfigAction
}

export interface DinamicInterface {
    [key: string]: string
}

export interface ActionDataTable {
    action: Array<DataActionTable>;
    element: InfoTableSummaryFormat;
}

export interface InfoTableTypeDetailIncomeCdg {
    cliente: string;
    ceco: string;
    ingreso_bruto_cdg: string;
    ingreso_neto_cdg: string;
    cumplimiento_cdg: string;
    ppto: string;
    descuento_cdg: string;
    nombre_modificador_cdg: string;
    fecha_modificacion_cdg: string;
}

export interface ActionDataTableSubCosto {
    action: Array<DataActionTable>;
    element: InfoTableSubCosto;
}

export interface InfoTableSubCosto {
    id: string
    name: string
    cost?: string
}
export interface IdCostoSelected {
    idCostoSelected: string
}

export interface InfoTableTypeDetailFormatIncomeCdg {
    cliente: string;
    ceco: string;
    'ingreso bruto cdg': string;
    'ingreso neto cdg': string;
    'descuento cdg': string;
    ppto: string;
    'cumplimiento cdg': string;
    'nombre modificador cdg': string;
    'fecha modificacion cdg': string;
}


export interface InfoTableTypeDetailFormatIncomeOperacion {
    cliente: string;
    ceco: string;
    'ingreso bruto operacion': string;
    'ingreso neto operacion': string;
    'descuento operacion': string;
    ppto: string;
    'cumplimiento operacion': string;
    'nombre modificador operacion': string;
    'fecha modificacion operacion': string;
}

export interface ResponseInfoTableTypeDetailIncomeCdg extends Response {
    result: Array<InfoTableTypeDetailIncomeCdg>
}

export interface InfoTableTypeDetailCost {
    descripcion: string;
    costo_cdg: string;
    costo_operacion: string;
    costo_ppto: string;
    cumplimiento_cdg: string;
    cumplimiento_operacion: string;
}

export interface ResponseInfoTableTypeDetailCost extends Response {
    result: Array<InfoTableTypeDetailCost>
}

export interface InfoTableTypeDetailCostFormat {
descripcion: string;
    'costo cdg': string;
    'costo operación': string;
    'costo ppto': string;
    'cumplimiento cdg vs ppto': string;
    'cumplimiento operación vs ppto': string;
}

export interface ResponseInfoTableTypeDetailCostSuper extends Response {
    result: ResultInfoTableTypeDetailCostSuper
}

export interface InfoTableTypeDetailCostSuper {
    cargo: string;
    costo?: string;
    costo_cdg?: string;
    costo_operacion?: string;
}

export interface ResultInfoTableTypeDetailCostSuper {
    data: Array<InfoTableTypeDetailCostSuper>;
    estado: boolean
}


export interface ResponseInfoTableTypeDetailCostApoyo extends Response {
    result: ResultInfoTableTypeDetailCostApoyo
}

export interface ResultInfoTableTypeDetailCostApoyo {
    data: Array<InfoTableTypeDetailCostApoyo>;
    estado: boolean
}

export interface InfoTableTypeDetailCostApoyo {
    sub_area: string;
    costo?: string;
    costo_cdg?: string;
    costo_operacion?: string;
}

export interface InfoTableTypeDetailCostApoyoFormat {
    'sub area': string;
    costo?: string;
    'costo cdg'?: string;
    'costo operacion'?: string;
}

export interface ResponseInfoTableSummaryGeneral extends Response {
    result: Array<InfoTableSummaryGeneral>
}

export interface InfoTableSummaryGeneral {
    cliente: string;
    id_ceco: string;
    ceco: string;
    ing_estimado_cdg: number | string;
    ing_estimado_operacion: number | string;
    ing_ppto: string;
    cump_ingreso_cdg: string;
    cump_ingreso_operacion: string;
    mc_abs_cdg: string;
    mc_abs_operacion: string;
    mc_abs_ppto: string;
    cump_mc_abs_cdg: string;
    cump_mc_abs_operacion: string;
    mc_cdg: number | string;
    mc_operacion: number | string;
    mc_ppto: number | string;
    cump_mc_cdg: string;
    cump_mc_operacion: string;
    deterioro_cdg: string;
    deterioro_operacion: string;
}

export interface InfoTableSummaryGeneralFormat {
    cliente: string;
    'id ceco': string;
    ceco: string;
    'ing estimado cdg': number | string;
    'ing estimado ops': number | string;
    'ing ppto': string;
    'cump ingreso cdg': string;
    'cump ingreso ops': string;
    'mc abs cdg': string;
    'mc abs ops': string;
    'mc abs ppto': string;
    'cump mc abs cdg': string;
    'cump mc abs ops': string;
    'mc cdg': number | string;
    'mc ops': number | string;
    'mc ppto': number | string;
    'cump mc cdg': string;
    'cump mc ops': string;
    'deterioro cdg': string;
    'deterioro ops': string;
}

export interface ResponseString extends Response {
    result: string
}

export interface DinamicInterfaceTable {
    [key: string]: string
}
export interface ResponseListExport extends Response {
    result: Array<ListExport>
}
export interface ListExport {
    id: number;
    name: string;
    action?: Array<string>;
    fecha?: string;
    icon?:string;
}

export interface ResponseSelect extends Response {
    result: Array<SelectValues>
}

export interface ResponseSelectNumber extends Response {
    result: Array<SelectValuesNumber>
}

export interface SelectValuesNumber {
    id: number;
    name: string;
}

export interface DataGetExport {
    fieldDate: string
    fieldTypeExport: string
}

export interface ResponseDinamic extends Response {
    result: Array<DinamicInterfaceTable>
}

export interface DataAction {
    id: string
    funcion: string
    name: string
}

export interface InfoTableConsolidateSummaryFormat {
    'id': string;
    'tipo': string;
    'estimado cdg': string;
    'estimado ops': string;
    'presupuesto': string;
    '% cump cdg vs ppto': string;
    '% cump ops vs ppto': string;
    style: DinamicInterface
    styleAction: ConfigAction
}

export interface InfoTableConsolidateSummary {
    'id': string;
    'tipo': string;
    'estimado_consolidado': string;
    'estimado_cdg': string;
    'estimado_operación': string;
    'presupuesto': string;
    'cumplimiento_cdg_vs_ppto': string;
    'cumplimiento_ops_vs_ppto': string;
    level: string;
    style_action: ConfigAction;
}

export interface ResponseConsolidateSummary extends Response {
    result: Array<InfoTableConsolidateSummary>
}

export interface DataMonths {
    dateActive: string
    fecha: string
}
export interface ResponseDataMonths extends Response {
    result: Array<DataMonths>
}

export interface ListSociety {
    id: number;
    name: string;
}

export interface ResponseListSociety extends Response {
    result: Array<ListSociety>
}


export interface ResponseSelectCheck extends Response {
    result: Array<SelectValuesCheck>
}

export interface SelectValuesCheck {
    id: string
    name: string
    completed: boolean
}
export interface ItemConfig {
    id_mc_config: string
    mc_config_descripcion: string
    mc_config_valor: string
}

export interface ResponseItemConfig extends Response {
    result: Array<ItemConfig>
}

export interface formEditNombreCosto {
    nombreCosto: string;
}

export interface ResponseBoolean extends Response {
    result: boolean
}

export interface NewNameCost {
    newMame: string
}



