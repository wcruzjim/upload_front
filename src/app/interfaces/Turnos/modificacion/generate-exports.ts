import { Response } from "../../../models/Response";

export interface SelectValuesDatabase {
    id: string;
    name: string;
}

export interface DataFilterExports {
    id: number;
    nombre: string;
    cliente?: number;
}

export interface ExportShifts {
    idExporte: number;
    exportable: string;
    funcion: string;
}

export interface GetExportShifts extends Response {
    result: Array<ExportShifts>
}

export interface GetExportDataShifts extends Response{
    result: boolean;
}

export interface FormatedFilterExport {
    startDate: string;
    endDate: string;
    clientFilter: string;
    costCenterFilter: string;
    pcrcFilter: string;
}
