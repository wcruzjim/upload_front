import { ConfigAction } from '../../../interfaces/tables/tables';
import { Response } from '../../../models/Response';

export interface SelectOption {
    id: number;
    name: string;
}

export interface GlobalForecast {
    fecha: string;
    documento: string;
    nombre: string;
    cargo: string;
    distribucion: string;
    peso: string;
    idEstado: string;
    estado: string;
    acceso: number;
}

export interface GetGlobalForecast extends Response {
    result: Array<GlobalForecast>
}

export interface FormatedForecast {
    fecha: string;
    documento: string;
    nombre: string;
    cargo: string;
    'distribución': string;
    '%': string;
    idEstado: string;
    estado: string;
    acceso: number;
}

export interface GlobalForecastDetail {
    id: number;
    cliente: string;
    centroCostos: number;
    peso: string;
    idEstado: string;
    estado: string;
}

export interface GetGlobalForecastDetail extends Response {
    result: Array<GlobalForecastDetail>
}

export interface FormatedForecastDetail {
    id: number;
    cliente: string;
    'centro costos': number;
    '%': string;
    idEstado: string;
    estado: string;
}

export interface GetParametersDetail {
    document: number;
    dateDetail: string;
}

export interface FilterForecastDistribution {
    filter: boolean
}

export interface SelectOption {
    id: number;
    name: string;
}

export interface FormatedExportForecast {
    idExporte: number;
    exportable: string;
    funcion: string;
}

export interface ExportForecast {
    idExporte: number;
    exportable: string;
    funcion: string;
}

export interface GetExportForecast extends Response {
    result: Array<ExportForecast>
}

export interface FormatedExportForecast {
    idExporte: number;
    exportable: string;
    funcion: string;
}

export interface GetExportDataDistributionForecast extends Response{
    result: boolean;
}

export interface FormatedFilterExport {
    'Fecha': string;
}

export interface FilterExports {
    filter: boolean
}

export interface ValidateUpdateDates extends Response {
    dateStart: Date;
    dateEnd: Date;
    validateAlert: number;
}

export interface GetValidateUpdateDates extends Response {
    result: Array<ValidateUpdateDates>
}

export interface ResultDaysEnabled extends Response {
    result: string;
}

export interface DataHistoryDetail {
    estado: string;
    centroCostos: string;
    gestionadoPor: string;
    motivo: string;
    fechaGestion: string;
    estadoGestion: string;
}

export interface ActiveOptionReturn {
    estado: number;
}

export interface GlobalRejectionDetail {
    resultDataDetail:  Array<DataHistoryDetail>;
    activeReturn: ActiveOptionReturn;
}

export interface GetGlobalRejectionDetail extends Response {
    result: Array<GlobalRejectionDetail>
}

export interface FormatedRejectionDetail {
    estado: string;
    'centro costos': string;
    'gestionado por': string;
    motivo: string;
    'fecha gestión': string;
    estadoGestion: string;
}

export interface GetInformationClients {
    id: number;
    name: string;
}

export interface DataFilterCostCenter {
    fecha: string;
    clientes: Array<string>;
}

export interface ResponseGeneralForecastManage extends Response {
	result: DataResultForecatManage
}

export interface DataResultForecatManage {
    dateActive: boolean;
    dataFilterArea: Array<DataFilterManage>;
    dataFilterClient: Array<DataFilterManage>;
    dataFilterCostCenter: Array<DataFilterManage>;
    dataByArea: Array<TotalForecastByArea>;
    dataByDocument: Array<TotalForecastByDocument>;
}

export interface DataFilterManage {
    id: number;
    nombre: string;
}

export interface TotalForecastByArea {
    idAreaGeneral: string;
    areaGeneral: string;
    directo: string;
    cantidadDirecto: string;
    transversal: string;
    cantidadTransversal: string;
    rechazado: string;
    cantidadRechazado: string;
}

export interface GetTotalForecastByArea extends Response {
    result: Array<TotalForecastByArea>
}

export interface ForecastByArea {
    'id área general': string;
    'área general': string;
    directo: string;
    'cantidad directo': string;
    transversal: string;
    'cantidad transversal': string;
    rechazado: string;
    'cantidad rechazado': string;
}

export interface TotalForecastByDocument {
    id: string;
    itemDetail: string;
	directo: string;
    costo: string;
    cantidad: number;
    estado: string;
    responsable: string;
    correoResponsable: string;
	level: string;
	style_action: ConfigAction;
}

export interface GetTotalForecastByDocument extends Response {
    result: Array<TotalForecastByDocument>
}

export interface ForecastByDocument {
    id: string;
    itemDetail: string;
	directo: string;
    costo: string;
    '#': number;
    estado: string;
    responsable: string;
    correoResponsable: string;
	style: DinamicInterface;
	styleAction: ConfigAction;
}

export interface ResponseListExport extends Response {
    result: Array<ListExport>
}
export interface ListExport {
    id: number
    name: string
}

export interface DinamicInterface {
	[key: string]: string
}

export interface ForecastConfirmation {
    nombre: string;
    centroCostos: string;
    distribucion: string;
    responsable: string;
}

export interface GetForecastConfirmation extends Response {
    result: Array<ForecastConfirmation>
}

export interface FormatedForecastConfirmation {
    nombre: string;
    'centro costos': string;
    'distribución': string;
    responsable: string;
}

export interface ResultUpdateApprove extends Response {
    result: string;
}

export interface ResultUpdateDecline extends Response {
    result: string;
}

export interface GetDataDenyForecast {
    idForecast: string;
    typeDeny: number;
}

export interface GetDataDeclineForecastOwn {
    idForecast: number;
    optionDecline: number;
}

export interface GlobalForecastManageDetail {
    id: number;
    cliente: string;
    centroCostos: number;
    cantidad: string;
    costo: string;
    idEstado: number;
    estado: string;
}

export interface GetGlobalForecastManageDetail extends Response {
    result: Array<GlobalForecastManageDetail>
}

export interface FormatedForecastManageDetail {
    id: number;
    cliente: string;
    'centro costos': number;
    '%': string;
    costo: string;
    idEstado: number;
    estado: string;
}

export interface FormatedFilter {
    dateFilter: string;
    areaFilter: string;
    clientFilter: string;
    costCenterFilter: string;
}

export interface ForecastDataExtraActivation {
    documento: string;
    nombre: string;
    cargo: string;
}

export interface GetForecastDataExtraActivation extends Response {
    result: Array<ForecastDataExtraActivation>
}

export interface ResponseCreateActivation extends Response {
    result: string;
}

export interface DataCreateActivation {
    'document': string;
    'startDate': Date | string;
    'endDate': Date | string;
}

export interface ResultInsertActivation extends Response {
    result: string;
}

export interface HistoryExtraActivation {
    fechaInicio: string;
    fechaFin: string;
    fechaConfiguracion: string;
    configuradoPor: string;
}

export interface GetHistoryExtraActivation extends Response {
    result: Array<HistoryExtraActivation>
}

export interface FormatedHistoryExtraActivation {
    'fecha inicio': string;
    'fecha fin': string;
    'fecha configuración': string;
    'configurado por': string;
}

export interface ResponseReturnRejection extends Response {
    result: string;
}

export interface cargasMasivasConfigResponse extends Response {
    result: cargasMasivasConfig[];
}

export interface cargasMasivasConfig{
    "id_configuracion_cargas_masivas":string;
    "id_per_acciones": string;
    "titulo": string;
    "icon": string;
    "titulo_modal": string;
    "ruta_descarga_excel": string;
    "ruta_carga_excel": string;
    "id_cargas_plantillas_base": string;
    "accion":string;
    "aplica_filtros":string;
}

export interface AdditionalDataItem {
    key: string;
    value: string | number;
};
  
