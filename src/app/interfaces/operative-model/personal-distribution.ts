import { Response } from '../../models/Response';

export interface FormatedFilterDistribution {
    dateFilter: string;
    clientFilter: string;
    costCenterFilter: string;
    pcrcFilter: string;
    societyFilter: string;
    teamFilter: number;
    responsableFilter? : string;
}

export interface GlobalInformationPersonal {
    fecha: string;
    tipoDocumento: string;
    documento: string;
    nombre: string;
    cargo: string;
    idEstado: number;
    estado: string;
    clienteArea: string;
    cecoPcrc: string;
    jefe: string;
    validateView: number;
    validateUsers: number;
}

export interface GetGlobalInformationPersonal extends Response {
    result: Array<GlobalInformationPersonal>
}

export interface FormatedPersonal {
    fecha: string;
    tipoDocumento: string;
    documento: string;
    nombre: string;
    cargo: string;
    idEstado: number;
    estado: string;
    'cliente area': string;
    'ceco pcrc': string;
    jefe: string;
    validateView: number;
    validateUsers: number;
}


export interface DataFilterDistribution {
    id: number;
    nombre: string;
    cliente?: number;
    sociedad?: number;
}

export interface SelectOptionDistribution {
    id: number;
    name: string;
    client?: number;
    society?: number;
    responsable?: string;
}

export interface GetInformationClients {
    id: number;
    name: string;
}

export interface GetInformationCostCenters {
    id: number;
    name: string;
}

export interface GetInformationPcrc {
    id: number;
    name: string;
}


export interface ResponseDataCostCenters extends Response {
    id: number;
    name: string;
}

export interface ResponseDataPcrc extends Response {
    id: number;
    name: string;
}

export interface FormatedFilterPersonal {
    'Fecha': string;
    'Pcrc': string;
    'Active': number;
}

export interface HistoryPersonal {
    tipoCambio: string;
    cambioRealizado: string;
    datoAnterior: string;
    fechaInicio: Date;
    fechaFin: Date;
    observacion: string;
    ejecutor: string;
    fechaModificacion: Date;
}

export interface GetHistoryPersonal extends Response {
    result: Array<HistoryPersonal>
}

export interface FormatedHistoryPersonal {
    'tipo cambio': string;
    'cambio realizado': string;
    'dato anterior': string;
    'fecha inicio': Date;
    'fecha fin': Date;
    observacion: string;
    ejecutor: string;
    'fecha modificacion': Date;
}

export interface UsersPersonal {
    plataforma: string;
    usuario: string;
    codigoLogueo: string;
    fechaModificacion: Date;
}

export interface GetUsersPersonal extends Response {
    result: Array<UsersPersonal>
}

export interface FormatedUsersPersonal {
    plataforma: string;
    usuario: string;
    'codigo logueo': string;
    'fecha modificacion': Date;
}

export interface DetailPersonal {
    tipo: string;
    detalle: string;
}

export interface GetDetailPersonal extends Response {
    result: Array<DetailPersonal>
}

export interface FormatedDetailPersonal {
    tipo: string;
    detalle: string;
}

export interface FormatedFilterDetailPersonal {
    'Fecha': string;
    'Documento': string;
}

export interface FilterDetailPersonal {
    filter: boolean
}

export interface ExportPersonal {
    idExporte: number;
    exportable: string;
    funcion: string;
}

export interface GetExportPersonal extends Response {
    result: Array<ExportPersonal>
}

export interface FormatedExportPersonal {
    idExporte: number;
    exportable: string;
    funcion: string;
}

export interface GetExportDataDistributionPersonal extends Response{
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

export interface FormatedFilterDistributionReport {
    pcrcFilter: string;
}

export interface ReportInformationByStatus {
    type: string;
    [date: string]: string;
    difference?: string;
    relativeDifference?: string;
}
export interface ReportDetailByStatus {
    type: string;
    amount: number;
    difference?: string;
    relativeDifference?: string;
}

export interface ReportGeneralByStatus {
    tipoReporte: string;
    retiros: number;
    gestion: number;
    otros: number;
    encargos: number;
    total: number;
}
export interface GetDataReportBySpecificType extends Response {
    result: Array<ReportGeneralByStatus>
}

export interface GetReportStatus extends Response {
    indivialReports: Array<ReportDetailByStatus>
    summary: Array<ReportInformationByStatus> 
}




