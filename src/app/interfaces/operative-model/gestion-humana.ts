import {Response} from '../../models/Response';
import { SelectType } from '../dashboard/powerbi';

export interface ResponseSstTeletrabajo extends Response{
    result:  SstTeletrabajo[];
}
export interface Feedback {
    Gestionado: string;
    compromiso: string;
    compromisos: string;
    dimension: string;
    fecha: string;
    observacion: string;
    observaciones: string;
    plataforma: string;
    "tipo feedback": string;
    valorador: string;
}
export interface SstTeletrabajo {
        id_mo_sst_teletrabajo: string;
        documento: string;
        espacio: string;
        superficie: string;
        silla: string;
        mouseTeclado: string;
        descansapies: string;
        cables: string;
        botiquinExtintor: string;
        recomendaciones: string;
        fechaSeguimiento: string;
        observacion: string;
        inspeccion: string;
}

export interface VacationResponse extends Response {
    result:VacationDetail;
}

export interface VacationDetail {
    vacation:Vacation;
    vacationHistory:Array<VacationHistory>;
}

export interface Vacation {
    documento:string;
    dias_vacaciones:number;
    fecha_corte:string;
    tipo_persona:string;
    dias_vacaciones_projectados?:number;
    dias_vacaciones_a_solicitar?:number;
    show_projected_vacation:number;
}

export interface VacationHistory {
    documento?:string;
    fecha_solicitud:string;
    fecha_inicio:string;
    fecha_final:string;
    fecha_regreso:string;
    dias_habiles:number;
    dias_naturales:number;
    dias_dinero:number;
    estado:number|string;
}

export interface LateArrivalsResponse extends Response {
    result:Array<LateArrivals>;
}

export interface LateArrivalJustificationsResponse extends Response {
    result:Array<SelectType>;
}

export interface SavedLateArrivalJustificationResponse extends Response {
    result:boolean;
}

export interface LateArrivals {
    id_llegada_tarde:number;
    documento:string;
    fecha:string;
    inicio_turno:string;
    inicio_real_turno:string;
    tiempo_tarde:string;
    id_justificacion:number;
    justificacion:string;
    editar?:string;
}