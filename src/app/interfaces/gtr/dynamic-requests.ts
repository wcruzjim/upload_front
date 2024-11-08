import { Response } from "../../models/Response";

export interface ListAllRequests {
    title: string;
    username: string;
    dynamic_requests_id: number;
    users_id: number;
    dynamic_requests_type_id: number;
    date_create: string;
    params: string;
    message: string;
    date_limit: string;
    target_usernames: string;
    responses_limit: number;
    response1: string;
    response2: string;
    responsesPending:number;
    count_target_usernames:number;
    total_time_limit:number;
    new_target_usernames: UserResponse[];
    seconds_to_expire:number;
    expira:string;
}

export interface GetAllRequests extends Response {
    result: Array<ListAllRequests>
}

export interface UserResponse {
    dynamic_requests_responses_id: number;
    dynamic_requests_id: number;
    response: number;
    username: string;
    date_create: string;
    reason: string;
}

export interface GetAllResponses extends Response {
    result: Array<UserResponse>
}

export interface TypeRequest {
    id_request: number;
    title: string;
    description: string;
    places: string;
    state: number;
    filter_pcrc: number;
    filter_pre_schedule:number;
    filter_post_schedule:number;
}

export interface GetAllTypeRequest extends Response {
    result: Array<TypeRequest>
}

export interface UsedFilters {
    places: string[];
    operations_id: string;
    pcrcs: number[];
    start_range_schedule: rangeSchedule;
    end_range_schedule: rangeSchedule;
    red_ini_o_fin: number;
    time_to_ext: number;
    extras: number;
}

export interface rangeSchedule {
    start_date: string,
    end_date: string,
    start_hour: string,
    end_hour: string,
}

export interface NewRequest {
    users: UserTarget[];
    places: string[];
    operations_id: string;
    pcrcs: number[];
}

export interface UserTarget {
    user: string;
    exclude: boolean;
}

export interface InputParams {
    name: string;
    value: string;
    default_value: string,
    dynamic_requests_type_id: string,
    friendly_name: string,
    min: string,
    max: string,
    required: string,
    type: string,
    validations: string
}

export interface GetAllInputParams extends Response {
    result: InputParams
}

export interface GetFilterUsers extends Response {
    result: Array<string>
}

export interface data{
    dynamic_requests_type_id: number;
    params: string;
    message: string;
    date_limit: string;
    filters: string;
    target_usernames: string;
    responses_limit: number;
}

export interface ResponseSuccess extends Response {
    result: string;
}


