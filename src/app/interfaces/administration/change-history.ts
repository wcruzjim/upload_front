import { Response } from '../../models/Response';

export interface ChangeCreate {
    id: number;
    name: string;
    idStatus: number;
    observation: string;
}

export interface GetChangeCreate extends Response {
    result: Array<ChangeCreate>
}

export interface FormatedDataChange {
    'Id': number;
    'Name': string;
    'IdStatus': number;
    'Observation': string;
}

export interface CreateChange extends Response {
    result: string;
}