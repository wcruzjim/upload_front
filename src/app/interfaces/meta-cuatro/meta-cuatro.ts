import { DataActionTable } from '../tables/DataActionTable'
import {Response} from '../../models/Response';

export interface OptionsCard {
    titleCard: string
    buttons: Buttons[]
}

export interface Buttons {
    nameBtn: string
    color: string
    matBadge: number
    matBadgePosition: string
    matBadgeColor: string
    matBadgeSize: string
}

export interface NumbersOfErrors {
    endpoint: string
    numbers: string
}

export interface TableCandidatos {
    datajson: string
    dateMax: string
    dateMin: string
    dias_con_error: string
    documento: string
    endpoint: string
    estado: string
    id_error_max: string
    id_meta4: string
    motivo: string
}

export interface ResponseEventLogs {
    action: DataActionTable
    element: TableCandidatos
    index: number | string | boolean
}

export interface GetNumbers {
    endpoint: string
    numbers: string
}

export interface ResponseGetNumbers extends Response {
    result: GetNumbers[]
}

export interface ResponseTableService extends Response {
    result: TableCandidatos[]
}
