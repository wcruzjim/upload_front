import { FiltersPBI } from "./powerbi";
// import { Response } from "../../models/Response";

export interface DashboardMetabase {
    id: number;
    name: string;
    selected: boolean;
}

export interface Workspace {
    idworkspace: number;
    name: string;
    selected: boolean;
    dashboards?: DashboardMetabase[];
}

export interface createWorkspace {
    name: string
}

export interface ResponseAllFilterMetabase {
    result: DataFilter[];
    jwt: string;
    status: number;
    statusText: string;
}

export interface DataFilter {
    idfilter: string;
    name: string;
    idtypefilter: string;
    name_filter: NameFilter;
    documento_creacion: string;
    fecha_creacion: Date;
    usuario_creacion: string;
}

export enum NameFilter {
    Ceco = "CECO",
    Documento = "Documento",
    Pcrc = "PCRC"
}

export interface SaveEditFilter {
    rows: Row[];
    title: string;
    buttons: Button[];
}

export interface Button {
    title: string;
    class: string;
    size: string;
}

export interface Row {
    fields: Field[];
}

export interface Field {
    name: string;
    label: string;
    size: string;
    type: string;
    data: Datum[] | null;
    idvalue?: string;
    name_select?: string;
}

export interface Datum {
    idtypefilter: string;
    name: string;
}

export interface SaveFilter {
    idtypefilter: number;
    name: string;
}


export interface DataActionFilter {
    action: Action;
    element?: Element | FiltersPBI;
    index: null;
}

export interface Action {
    id: number;
    name: string;
    view: boolean;
    icon: string;
    class: string;
}

export interface Element {
    idfilter: string;
    name?: string;
    tabla?: string;
    columna?: string;
    idtypefilter: string;
    name_filter: string;
    documento_creacion: string;
    fecha_creacion: Date;
    usuario_creacion: string;
}

export interface SaveUpdateFilterStructure {
    name: string;
    type_filter: number;
    idfilter: string
}

export interface DataDashboardShowMetabase {
    iddasboardworkspace: string;
    idlink?: string;
    idworkspace?: string;
    nameworkspace?: string;
    iddashboardmetabase?: number;
    namedashboard?: string;
    documento_creacion?: string;
    fecha_creacion?: Date;
    usuario_creacion?: string;
    state?: string;
    selected?: boolean;
}

export interface RenderDashboard {
    iddashboard: number,
    filters?: object
}

export interface DocumentUser {
    documento: number
}

export interface AvailableUsers {
    documento: string;
    nombre_completo: string
}

export interface SaveUserInDashboard {
    document: string;
    name?: string
}

export interface CurrentUser {
    id: string;
    idareatrabajo: string;
    documento: string;
    nombre: string;
}

export interface DashboardKeyUpload {
    key: string;
    value: string
}

export interface DataDashboard {
    idworkspace: string;
    name: string;
    fecha_creacion: Date;
    usuario_creacion: string;
    dashboard?: string
}

export interface Filters {
    iddashboardfilter?: number;
    iddashboardworkspace?: number;
    idfilter: string;
    namefilter: string;
    idtipofiltro: string;
    nametypefilter: string;
}

export interface DateInsertedFilters {
    iddasboardworkspace: string;
    idlink: string;
    idworkspace: string;
    nameworkspace: string;
    iddashboardmetabase: string;
    namedashboard: string;
    documento_creacion: string;
    fecha_creacion: Date;
    usuario_creacion: string;
    state: string;
}

export interface FilterAddRemove {
    idfilter: string
}

export interface SaveFilterDashboardView {
    pcrc?: Array<string>
    document?: Array<string>
    ceco?: Array<string>
}

export interface AddDashboardToWorkSapace {
    idworkspace: number;
    iddashboard?: number;
    name: string;
}

export interface SaveDeletePermission {
    idworkspace?: string;
    iddashboardworkspace?: string
    documents: Array<SaveUserInDashboard> | Array<SaveUserInDashboard>
}

export interface CurrentUsersSpecificDashboard{
    iddashboard : string
}

export interface AllFilters{
    iddasboardworkspace: string
}

export interface SaveDeleteFilters {
    iddasboardworkspace: string
    filters: Array<FilterAddRemove>
}

// export interface GetUrlMetabase extends Response{
//     result: string;
// }
