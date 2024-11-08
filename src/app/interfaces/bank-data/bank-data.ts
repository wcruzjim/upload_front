import { Response } from '../../models/Response';
export interface data_bank_data {
    documento: string
    contrato: string
    banco: string
    tipo_cuenta: string
    numero_de_cuenta: string
    fecha_creacion: string
}

export interface response_data_bank_data extends Response {
    result: data_bank_data[]
}

export interface format_data_bank_data {
    'Documento': string,
    'Tipo de contrato': string,
    'Banco': string,
    'Tipo de cuenta': string,
    'Numero de cuenta': string,
    'Fecha de creacion': string
}


