import { Response } from "../../models/Response";
import { SelectType } from "../dashboard/powerbi";

export interface TableSkills {
    id_dp_clientes: string;
    cliente: string;
    estado:string;
    active_skills: number;
    inactive_skills: number;  
}

export interface GetTableSkillsAllClients extends Response {
    result: Array<TableSkills>
}


export interface TableSkillsByClient {
    id_skill: number;
    name: string;
    status: string;
    internal_code: string;
    cod_pcrc:string;
}

export interface GetTableSkillsByClient extends Response {
    result: Array<TableSkillsByClient>
}

export interface DataNewSkill{
    name: string;
    idClient: string;
    internalCode: string;
    codPcrc: string;
}

export interface TableSkillsFormat{
    id: string;
    cliente: string;
    estado:string;
    'skills activos': number;
    'skills inactivos': number;
    'fecha creacion': Date;
}

export interface deleteSkillResponse extends Response {
    result: String;
}

