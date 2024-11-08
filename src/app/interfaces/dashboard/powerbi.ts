import { Response } from "../../models/Response";

export interface FiltersPBI {
    name?: string;
    idfilter: string;
    tabla: string;
    columna: string;
    idtypefilter: string;
    name_filter: string;
    documento_creacion: string;
    fecha_creacion: Date;
    usuario_creacion: string
}

export interface FilterSaveEditPBI {
    tabla: string;
    columna: string;
    type_filter: string;
    idfilter: string
}

export interface CreateFilterPBI {
    columna: string;
    tabla: string;
    type_filter: number
}

export interface DashboardView {
    iddasboardworkspace: string;
    namedashboard: string
    selected: boolean
}

export interface PcrcFilterPBI {
    id: string;
    pcrc: string
}

export interface CecoFilterPBI {
    id: number;
    centros_costos: string
}

export interface UserDataFilterView {
    document?: string;
}

export interface UserData {
    id: number;
    user: string;
    name: string;
    lastName: string;
    place: number;
    plaza: number;
    actions: string[];
    cod_ceco: string;
    desc_ceco: string;
}

export interface DashboardView {
    iddasboardworkspace: string;
    namedashboard: string;
    selected: boolean;
}

export interface SelectType {
    id: number;
    name: string;
}

export interface FilterFormatSearch {
    report_id: string;
    workspace_id: string | number;
}

export interface createWorkspace {
    workspace_name?: string
    name?: string
}

export interface WorkspacePBI {
    id: string;
    idworkspace?: string;
    isReadOnly: boolean;
    isOnDedicatedCapacity: boolean;
    type: string;
    name: string;
    dashboards?: Array<DashboardPBI>;
}

export interface DashboardPBI {
    id: string;
    reportType: string;
    name: string;
    webUrl: string;
    embedUrl: string;
    isFromPbix: boolean;
    isOwnedByMe: boolean;
    datasetId: string;
    datasetWorkspaceId: string
}

export interface Users {
    documento: string;
    document?: string;
    usuario_red: string;
    nombre: string;
    cargo: string;
    id_dp_cargos: string;
    id_per_reportes_usuario: null;
    selected: boolean
}

export interface AddDeleteUserAccess {
    document?: string;
    documento?: string;
    name?: string;
    nombre?: string;
}

export interface DataAccesDashboard {
    dashboard: DashboardPBI;
    workspace: WorkspacePBI;
}

export interface Filters {
    idfiltro?: string;
    tabla: string;
    columna: string;
}

export interface AddRemoveFilterDashboard {
    idfiltro: string;
}

export interface DataFilter {
    idworkspace: string;
    iddashboard: string;
}

export interface AllEmails {
    groupUserAccessRight: string;
    displayName: string;
    identifier: string;
    principalType: string;
    emailAddress?: string;
}

export interface AllEmailsFormated {
    groupUserAccessRight: string;
    nombre: string;
    identifier: string;
    tipo: string;
    email?: string;
}

export interface ResponseFilter extends Response{
    result: boolean;
}

export interface listReportByName {
    report_id: string;
    report_name: string;
    workspace_id: string | number;
    workspace_name: string;
}

export interface listReportByNameResult extends Response {
    result: listReportByName;
}

