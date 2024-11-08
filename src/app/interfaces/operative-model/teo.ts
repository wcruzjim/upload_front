export interface ResponseTeoServiceConsolidIndicators {
    result: ConsolidIndicators[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface DataGraph {
    labels: string[],
    datasets: [{
        label: string,
        data: number[],
        fill: boolean,
        backgroundColor: string[],
        borderColor: string[],
        pointBackgroundColor: string,
        pointBorderColor: string,
        pointHoverBackgroundColor: string,
        pointHoverBorderColor: string
    }]
}
export interface OptionsGraph {
  radius: number,
  hoverRadius:number,
  showAllTooltips: boolean,
  interaction: {
    mode: string
  },
  elements: {
    line: {
      borderWidth: number
    }
  },
  scales: {
    r: {
      min: number,
      max: number,
      beginAtZero: boolean,
      angleLines: {
        display: boolean
      },
      grid: {
      circular: boolean
      }
    }
  }
}
export interface ResponseTeoServiceDataFilter {
    result: DataFilter[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ResponseTeoServiceConsolidIndicatorsGraph {
    result: ConsolidIndicatorsGraph[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ResponseTeoServiceDataIndicators {
    result: DataIndicators[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ResponseTeoServiceDataIndicatorsLider {
    result: DataIndicatorsLider[];
    jwt: string;
    status: number;
    statusText: string;
}
export interface ConsolidIndicators {
    indicador: string;
    resultado: string;
    meta: string;
    id_indicador: string;
    id_tipo_resultado: string;
    cumplimiento: string;
    dispersion: string;
}
export interface DataIndicators {
    Fecha: string;
    Adherencia?: string;
    Ausentismo?: string;
    Calidad?: string;
    Aht?: number;
    Score?: string;
}
export interface DataIndicatorsLider {
    documento: String;
    nombreCompleto: String;
    pcrc: String;
    Aht?: String;
    Score?: String;
    Adherencia?: string;
    Ausentismo?: string;
    Calidad?: string;
}
export interface SelectNames {
  name:string;
  id?:string;
}
export interface ConsolidIndicatorsGraph {
    documento: number;
    nombreCompleto: number;
}
export interface DataFilter {
    documento: number;
    nombreCompleto: number;
}

export interface DataPersonalizedTable {
  Fecha?: string;
  'AHT'?: number;
  'AHT Entrada'?: number;
  'AHT Salida'?: number;
  'Prom Hold'?: number;
  'Prom No Listo'?: number;
  'Prom Conversacion Entrada'?: number;
  'Llamadas Entrada'?: number;
  'Llamadas Salida'?:number;
  'Prom Conversacion Salida'?:number;
  'Prom No listo'?:number;
  'Adherencia'?:number;
  'Cumplimiento Conexion'?:number;
  'Hora Inicio Programado'?:string;
  'Hora Fin Programado'?:string;
  'Hora Fin Real'?:string;
  'Hora Inicio Real'?:string;
  'Horas Programadas'?:number;
  'Horas Reales'?:number;
  'Justificación'?:string;
  'LLegadas Tarde'?:number;
  'Salidas Temprano'?:number;
  'Ausentismo'?:number;
  'Cantidad Eval'?:number;
  'Dimensión'?:string;
  'IC'?:number;
  'Pec'?:number;
  'Penc'?:number;
  'Score'?:number;
}

export interface DataPersonalizedTableResult extends Response{
  result:Array<DataPersonalizedTable>
}


export interface DataCards {
  icono:string;
  id:number;
  label:string;
  nombre:string;
  porcentaje:number;
  tipoIcono:string;
  tipo_meta:number;
}

export interface ComplianceDetailTable {
  fecha: string;
  Nombre:string;
  pcrc: string;
  estado: string;
  resultado: number;
  meta: number;
  cumplimiento: number;
}

export interface DataIndicatorsResult{
  result: DataIndicador;
  jwt: string;
  status: number;
  statusText: string;
}
export interface DataIndicador {
  dashboard:{
    [key: string]: {
      cards: {
        [key: string]:DataCards;
      }
    };
  }
  selects:{
    estado: {
      [key: string]:{
        pcrcs:SelectNames[];
        usuarios?:SelectNames[];
      }
    },
    pcrc: {
      [key: string]: ({
        estados: SelectNames[];
        usuarios?: SelectNames[];
      }) & SelectNames[];
    }
    usuario: {
      [key: string]:{
        estados:SelectNames[];
        pcrcs:SelectNames[];
      }
    }
  }  
}

export interface GetComplianceDetailTable extends Response {
  result: Array<ComplianceDetailTable>
}

export interface nombreAsesor extends Response {
  result:string
}
interface dataSeries {
  data:Array<number>,
  name:string,
  type:string
}

export interface DataGraphicsResult{
    categories:Array<string>,
    legendLabel:string,
    title?:string,
    meta?:Array<string>,
    series?:Array<dataSeries>
    typeColumn?:number,
    values:Array<number>
    yLabel:string,
    xLabel?:string
}

export interface DataGraphics extends Response{
  result:{
    graphic:DataGraphicsResult
  }
}

interface resultFormatRankingType{
  maxTeam:number,
  myPosition:number
}

interface GraphicSummarizeResult{
  resultFormatChart:DataGraphicsResult,
  resultFormatRanking:resultFormatRankingType,
  resultadoPerfecto:boolean
}

export interface GraphicSummarize extends Response{
  result:GraphicSummarizeResult
}

interface seriesDetail {
  name:string;
  type:string;
  data:Array<number>;
}

export interface GraphicDetail{
  series:Array<seriesDetail>
  categories:Array<string>
}

export interface DetailIndicatorGraphicLeader extends Response{
  result:GraphicDetail
}

export interface TablaDetallePcrcResultLeader extends Response{
  result:Array<TablaDetallePcrc>
}


export interface TablaDetallePcrc{
  documento:number;
  nombre:string;
  pcrc:string;
  estado:string;
}

export interface VisualizeRow{
  documento:number;
  nombre:string;
  pcrc:string;
  estado:string;
  dateFilter:string;
  usuario?:string;
}

export interface ParamsSimulacion{
  documento?:string;
  pcrc?:string;
  fecha?:string;
  usuario?:string;
}

export interface AsesorName extends Response {
  result:string;
}

export interface indicadoresInfoResult extends Response {
  result:Array<indicadorInfo>
}


export interface indicadorInfo extends Response {
  nombre:string;
}