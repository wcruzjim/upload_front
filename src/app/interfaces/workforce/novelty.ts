import { Response } from '../../models/Response';
import { ConfigAction } from '../tables/tables';

export interface GlobalNovelty {
    id: string;
    fecha: string;
    ingreso: string;
    tipo: string;
    motivo: string;
    nombre: string;
    descripcion: string;
    idEstado: number;
    estado: string;
    sociedad?: string;
    style_action: ConfigAction;

}

export interface GetGlobalNovelty extends Response {
    result: Array<GlobalNovelty>
}

export interface FormatedNovelty {
    id: string;
    fecha: string;
    ingreso: string;
    tipo: string;
    motivo: string;
    nombre: string;
    'descripción': string;
    idEstado: number;
    estado: string;
    styleAction: ConfigAction;
}

export interface GlobalNoveltyHistory {
    id: string;
    fecha: string;
    ingreso: string;
    clienteArea: string;
    pcrc: string;
    tipo: string;
    motivo: string;
    descripcion: string;
    identificacion: number;
    nombre: string;
    idEstado: number;
    estado: string;
    sociedad: string;
}

export interface GetGlobalNoveltyHistory extends Response {
    result: Array<GlobalNoveltyHistory>
}

export interface FormatedNoveltyHistory {
    id: string;
    fecha: string;
    ingreso: string;
    'cliente área': string;
    pcrc: string;
    tipo: string;
    motivo: string;
    'descripción': string;
    'identificación': number;
    nombre: string;
    idEstado: number;
    estado: string;
}

export interface GlobalNoveltyManage {
    id: string;
    fecha: string;
    ingreso: string;
    identificacion: number;
    nombre: string;
    clienteArea: string;
    pcrc: string;
    tipo: string;
    motivo: string;
    descripcion: string;
    idEstado: number;
    validateView: number;
}

export interface GetGlobalNoveltyManage extends Response {
    result: Array<GlobalNoveltyManage>
}

export interface FormatedNoveltyManage {
    id: string;
    fecha: string;
    ingreso: string;
    'identificación': number;
    nombre: string;
    'cliente área': string;
    pcrc: string;
    tipo: string;
    motivo: string;
    'descripción': string;
    idEstado: number;
    sociedad?: string;
    validateView: number;
}

export interface FormatedFilterNovelty {
    'TypeDate': string;
    'TypeExport': string;
    'StartDate': string;
    'EndDate': string;
    'Pcrc': string;
    'TypeNovelty': string;
    'Status': string;
}

export interface SelectedClients {
    clients: boolean;
}

export interface ResponseDataCostCenters extends Response {
    id: number;
    name: string;
}

export interface SelectedCostCenters {
    costCenters: boolean;
}

export interface ResponseDataPcrc extends Response {
    id: number;
    name: string;
}

export interface SelectedType {
    noveltyType: boolean;
}

export interface ResponseValidateThird extends Response {
    id: number;
}

export interface ResponseDataReason extends Response {
    id: number;
    name: string;
}

export interface SelectValues {
    id: string;
    name: string;
}

export interface SelectedReason {
    noveltyReason: boolean;
}
export interface ResponseDataDescription extends Response {
    id: number;
    name: string;
}

export interface GetResponseDataDescriptionDetail {
    id: number;
    name: string;
    rangeMin: string;
    rangeMax: string;
    workDays: string;
    typeNovelty: number;
    fullDay: number;
}

export interface ResponseDataDescriptionDetail extends Response {
    result: Array<GetResponseDataDescriptionDetail>
}

export interface FilterNovelty{
    filter: boolean;
}

export interface GetExportDataNovelty extends Response{
    result: boolean;
}


export interface NoveltyConfirmation {
    id: number;
    solicitante: string;
    fechaInicio: Date;
    fechaFin: Date;
    descripcion: string;
}

export interface GetNoveltyConfirmation extends Response {
    result: Array<NoveltyConfirmation>
}

export interface FormatedNoveltyConfirmation {
    id: number;
    solicitante: string;
    'fecha inicio': Date;
    'fecha fin': Date;
    'descripción': string;
}

export interface ResultUpdateApprove extends Response {
    result: string;
}

export interface ResultUpdateDecline extends Response {
    result: string;
}

export interface GetDataDenyNovelty {
    idNovelty: string;
    typeDeny: number;
}

export interface GetDataDeclineNoveltyOwn {
    idNovelty: number;
    optionDecline: number;
}

export interface GlobalNoveltyDetail {
    descripcion: string;
    detalle: string;
    estado: number;
}

export interface GetGlobalNoveltyDetail extends Response {
    result: Array<GlobalNoveltyDetail>
}

export interface FormatedNoveltyDetail {
    'descripción': string;
    detalle: string;
    estado: number;
}

export interface GlobalNoveltyScaling {
    cargo: string;
    nombre: string;
}

export interface GetGlobalNoveltyScaling extends Response {
    result: Array<GlobalNoveltyScaling>
}

export interface FormatedNoveltyScaling {
    cargo: string;
    nombre: string;
}

export interface ResponseSelect extends Response {
    result: Array<SelectValues>
}

export interface DataParentCreate {
    id: number;
    document: string;
    name: string;
}

export interface GetResponseDataVacations {
    documento: string;
    diasVacaciones: number;
    fechaCorte: Date;
    tipoPersona: string;
    diasPagos: boolean;
}

export interface ResponseDataVacations extends Response {
    result: Array<GetResponseDataVacations>
}

export interface ParametersValidateVacations{
    typePerson: string;
    startDate: string;
    calendarDays: number;
}

export interface GlobalNoveltyVacations {
    descripcion: string;
    detalle: string;
}

export interface GetGlobalNoveltyVacations extends Response {
    result: Array<GlobalNoveltyVacations>
}

export interface FormatedNoveltyVacations {
    'descripción': string;
    detalle: string;
}

export interface ResponseGeneralNovelty extends Response{
    result: boolean;
}

export interface DataCreateNovelty {
    idDescription: number;
    document: string;
    startDate: Date | string;
    endDate: Date | string;
    observation: string;
    supplementaryData: Array<object> | FormData;
}

export interface ResponseCreateNovelty extends Response {
    result: string;
}

export interface TypeInput {
    input: string
}

export interface DataReasonValue {
    id: string;
    name: string;
    subReason: string;
}

export interface GlobalNoveltyMatrix {
    id: number;
    tipo: string;
    motivo: string;
    descripcion: string;
    idEstado: number;
    estado: string;
}

export interface GetGlobalNoveltyMatrix extends Response {
    result: Array<GlobalNoveltyMatrix>
}

export interface FormatedNoveltyMatrix {
    id: number;
    tipo: string;
    motivo: string;
    'descripción': string;
    idEstado: number;
    estado: string;
}

export interface GlobalNoveltyDetailMatrix {
    descripcion: string;
    detalle: string;
}

export interface GetGlobalNoveltyDetailMatrix extends Response {
    result: Array<GlobalNoveltyDetailMatrix>
}

export interface GlobalNoveltyApplicant {
    idCargo: number;
    nombreCargo: string;
}

export interface GetGlobalNoveltyApplicant extends Response {
    result: Array<GlobalNoveltyApplicant>
}

export interface GlobalNoveltyApplicantPcrc {
    cliente: string;
    pcrc: string;
}

export interface GetGlobalNoveltyApplicantPcrc extends Response {
    result: Array<GlobalNoveltyApplicantPcrc>
}
export interface GlobalNoveltyScalingLevel {
    idCargo: number;
    nivel: number;
    nombreCargo: string;
}

export interface GetGlobalNoveltyScalingLevel extends Response {
    result: Array<GlobalNoveltyScalingLevel>
}

export interface renunciaVoluntariaI {
    file: string;
    tipo_file:string;
}

export interface renunciaVoluntariaResponseI extends Response {
    result:renunciaVoluntariaI[];
}

export interface SolicitaDiasDinero extends Response{
    result:boolean;
}

export interface FilterExporte {
    idExportable: number;
    fechaObtenida: number;
    startDate: Date;
    endDate: Date;
    estadoNovedad: string[];
    clienteArea: string[];
    centroCostos: string[];
    pcrc: string[];
    tipo: string[];
    motivo: string[];
    descripcion: string[];
    getMedida: string[];
    getMotivoMed: string[];
    getAspecto: string[];
    documentsFilter: string[];
}

export interface FieldsByExportableResponse extends Response {
    result:Fields;
}   

export interface Fields {
    documento: string;
    ceco: string;
    pcrc: string;
    motivo: string;
    descripcion: string;
    cliente:base[];
    estado_novedad:base[];
    tipo_medida?:base[];
    aspecto_medida?:base[];
    motivo_medida?:base[];
    fecha:base[];
    tipo:base[];
    fields?;
}

export interface BaseResponse extends Response {
    result:base[];
}

export interface exporteResponse extends Response{
    result:string[];
}

export interface base {
    id: string;
    name: string;
}

export interface NoveltyExportablesResponse{
    result:NoveltyExportables[];
}

export interface NoveltyExportables{
    value:number;
    viewValue:string;
    permission:number;
}
export interface consultFlagsResponse extends Response{
    result: consultFlags;
}

export interface consultFlags {
    emision: string;
    recepcion: string;
}


