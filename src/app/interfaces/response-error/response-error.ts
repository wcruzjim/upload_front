import { HttpHeaders } from '@angular/common/http';
export interface ResponseError {
    error: StatusError
    headers: HttpHeaders
    message: string
    name: string
    ok: boolean
    status: number
    statusText: string
    url: string
}

export interface StatusError {
    jwt: string
    status: number
    statusText: string
}


