import { Response } from '../../models/Response';

export interface SelectValues {
    id: string
    name: string
}

export interface ResponseSelect extends Response {
    result: Array<SelectValues>
}

export interface DataFormNewRequest {
    fieldTypeRequest: number
    fieldReasonRequest: number
    fieldCoverTypeRequest: number
    fieldPosition: number
    fieldCecoTuition: number
    fieldCecoForecast: number
    fieldCityWhereWork: number
    fieldPersonalSubdivision: number
    fieldEnabledBoss: number
    fieldNumberPlacesRequested: number
    fieldPositionJob: string
    fieldEquipement: string
    fieldLicenses: string
    fieldDateNeedPosition: Date
    fieldJustification: string
    fieldCurrentOfficers?: number
    fieldCurrentEncargo?: number
    fieldTotalsToday?: number
    fieldDocumentOut?: number
    fieldDocumentIn?: number
    fieldDateStartEncargo?: Date
    fieldDateEndEncargo?: Date
    fieldDefinedSection?: string
    fieldCurrentAmount?: number
    fieldAmountExpected?: number
    fieldInPost?: number
    fieldDefinedSpanControl?: number
    fieldCurrentControlSpan?: number
    fieldNewControlSection?: number
    fieldMonthOne?: number
    fieldMonthTwo?: number
    fieldMonthThree?: number
    fieldConsolidatedThreeMonths?: number
    fieldDeterioration?: number
    fieldContractPeriod?: string
}

export interface ResponsePosition extends Response {
    result: GeneralPosition[]
}

export interface GeneralPosition {
    id_dp_cargos: number
    estado: number
    id_dp_posicion: number
    id_dp_funciones: number
    id_dp_cargos_tipo: number
    id_dp_cargos_rol: number
    valida_ss_admin: number
}

export interface DetailRequest {
    position: string
    matricula: string
    city: string
    typeRequest: string
    personalSubdivision: string
}

export interface GlobalInformationAdministration {
    id: number;
    radicado: string;
    requeridos: number;
    matricula: string;
    ciudadLabora: string;
    tipoSolicitud: string;
    cubrimientoPlaza: string;
    solicitanteSs: string;
    nivelEscalamiento: string;
    idEstado: number;
    estado: string;
}

export interface GetGlobalInformationAdministration extends Response {
    result: Array<GlobalInformationAdministration>
}

export interface FormatedAdministration {
    id: number;
    radicado: string;
    requeridos: number;
    matricula: string;
    'ciudad labora': string;
    'tipo solicitud': string;
    'cubrimiento plaza': string;
    'solicitante ss': string;
    'nivel escalamiento': string;
    idEstado: number;
    estado: string;
}

export interface InformationDetailAdministration {
    tipo: number;
    detalle: string;
}

export interface GetInformationDetailAdministration extends Response {
    result: Array<InformationDetailAdministration>
}

export interface FormatedDetailAdministration {
    tipo: number;
    detalle: string;
}

export interface InformationPersonalAdministration {
    documento: string;
    nombre: string;
    vinculacion: string;
    estado: string;
}

export interface GetInformationPersonalAdministration extends Response {
    result: Array<InformationPersonalAdministration>
}

export interface FormatedPersonalAdministration {
    documento: string;
    nombre: string;
    'vinculación': string;
    estado: string;
}

export interface GetInformationStatus {
    id: number;
    name: string;
}

export interface StatusEdit {
    idSelection: string;
    idStatus: string;
    observacion: string;
}

export interface GetStatusEdit extends Response {
    result: Array<StatusEdit>
}

export interface FormatedEditStatus {
    'idSelection': string;
    'idStatus': string;
    'observacion': string;
}

export interface EditStatus extends Response {
    result: string;
}

export interface SelectOption {
    id: number;
    name: string;
}

export interface GetExportDataAdministration extends Response{
    result: boolean;
}

export interface ResponseNumber extends Response {
    result: number
}

export interface TypeInput {
    input: string
}

export interface meta4PreRequest {
    flow: string;
    jobPositon: string;
    documentOut: string;
    typeRequest: string;
    state: string;
    level:string;
    validaMeta4:string;
}

export interface meta4ServiceResult {
    alert: number
    msj: string
    position: string
}

export interface ResponseMeta4 extends Response {
    result: meta4ServiceResult
}

export interface ExportPersonal {
    idExporte: number;
    exportable: string;
    funcion: string;
}

export interface CecoForecast{
    ceco:string;
    distribucion:string;
}
export interface SumaForecast{
    suma_distribucion: number; 
}

export interface ForecastSaliente {
    centros_costos:CecoForecast[];
    suma:SumaForecast[];
}

export interface UnidadOrganizativa {
    unidad_organizativa:string;
}

export interface ResultConsultForecast {
    forecas_saliente: ForecastSaliente;
    tipo_distribucion:string[];
    unidad_organizativa:UnidadOrganizativa[];
}

export interface ResultConsultForecastResponse extends Response {
    result:ResultConsultForecast;
}

export interface DataTableI {
    nombre_completo:string;
    documento:string;
    tipo_estado:string;
}

export interface DataTableIResponse extends Response{
    result:DataTableI[];
}

export interface IformValueSsAdmin {
    dateStart:Date;
    dateEnd:Date;
    radicado:String;
}

export interface loadValuesInputsInitialsResponse extends Response{
    result:loadValuesInputsInitials;
}

export interface loadValuesInputsInitials{
    clientes:SelectValues[];
    directores:SelectValues[];
}

export interface CentroCostosResponse extends Response{
    result:SelectValues[];
}

