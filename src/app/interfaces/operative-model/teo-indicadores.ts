import { Response } from '../../models/Response';
import { SelectType } from '../dashboard/powerbi';
import { DinamicInterfaceTable } from '../tables/tables';


export interface CreateMetricResponse extends Response{
    result:SelectType[];
}

export interface MetricResponse extends Response{
    result:Metric[];
}

export interface LoadMetricsResponse extends Response{
    result:Indicador[];
}
export interface SaveMetric extends Response{
    result:boolean
}

export interface EditMetricDetailsResponse extends Response{
    result:EditMetricDetails;
}

export interface MetricDetailsViewResponse extends Response{
    result:MetricDetailsView;
}

export interface MeasurementTaskResponse extends Response{
    result:Array<MeasurementTask>;
}

export interface EditMetricDetails {
    pcrcCodes:Array<string>;
    idClients:Array<string>;
}

export interface MetricDetailsView {
    metricClients: Array<ClientDetailsView>;
    metricGoals: Array<GoalDetailsView>;
}

export interface ClientDetailsView {
    cliente:string;
    pcrc:Array<string>;
}

export interface GoalDetailsView {
    'tipo':string;
    'fecha':string;
    'estado persona':string;
    'pcrc':string;
    'meta':string;
    'estado':string;
}

export interface DetailsView {
    cliente:string;
    pcrc:string;

}

export interface Metric {
    idAction?:number;
    id?:number;
    idIsPrimary:number;
    name:string;
    description:string;
    icon:string;
    idParentMetric:number;
    idResultType:number;
    defaultGoal?:number;
    defaultGoalDate?:string;
    idGoalMeasurementType:number;
    idStatus:number;
    idStatusCreate:number;
    homologate:number;
    idRemeasurementView:number;
    idMassiveLoad:number;
    idVisibility:number;
    formula:string;
    pcrcCodes?:string;
    idGoalOperationType:number;
    idIsPersonalized:number;
    idTypeStandard:number | null;
}

export interface Indicador {
    'id'?:number;
    'id es primario':number;
    'primario':string;
    'nombre':string;
    'descripción':string;
    'icono':string;
    'id indicador principal':number;
    'indicador principal'?:string;
    'id tipo resultado':number;
    'tipo resultado':string;
    'meta predeterminada'?:number;
    'fecha meta predeterminada':string;
    'id tipo medición meta':number;
    'tipo medición_meta'?:string;
    'id estado':number;
    'estado'?:string;
    'id interfaz remedición':number;
    'interfaz remedición':string;
    'id carga masiva':number;
    'carga masiva':string;
    'id visibilidad':number;
    'visibilidad':string;
    'fórmula':string;
    'Tipo Consolidado':number;
    'idTipoPersonalizado':number;
}
export interface RemeasurementParameters {
    fecha_inicio: string;
    fecha_fin: string;
    cod_pcrc: string;
    requiere_insumos: number;
    agregaciones: Array<number>;
    documentos: string;
    ids_indicador: Array<number>;
    indicadores: Array<string>;
    publico_objetivo: string;
    id_publico_objetivo: number;
    id_tipo_medicion: number;
    tipo_medicion: string;
    id_motivo_medicion: number;
    motivo_medicion: string;
}

export interface RemeasurementParametersResponse extends Response{
    result:string;
}

export interface responseResourceName extends Response{
    result:string;
}

export interface MeasurementTask {
'id tarea':number;
'indicador':string;
'fecha inicio':string;
'fecha fin':string;
'fecha creación':string;
'id estado':number;
'estado':string;
'tipo medición':string;
'id tipo medición':number;
'motivo medición':string;
'styleAction'?:Object;
}