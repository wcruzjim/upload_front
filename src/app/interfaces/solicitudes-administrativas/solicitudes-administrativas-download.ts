import { Response } from '../../models/Response';

export interface ListExport {
    idExporte: string
    exportable: string
    funcion: string
}

export interface ResponseListExport extends Response {
    result: Array<ListExport>
}

export interface GetExportDataAdministration extends Response{
    result: boolean;
}


