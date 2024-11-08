import { Response } from '../../models/Response';

export interface GetGlobalInsumoGeneral extends Response {
  result: Array<DataTiemposSeleccion>
}

export interface DataTiemposSeleccion {
  cod_pcrc: string;
  cantidad_personas_minima: string;
  cantidad_personas_maxima: string;
  dias_reclutamiento: string;
  fecha_creacion: Date;
}

export interface DataPerfiles {
  cod_pcrc: string;
  perfil: string;
  formacion_min_umbral: string;
  formacion_min_evidencia: string;
  experiencia_laboral_umbral: string;
  experiencia_laboral_evidencia: string;
  diccion_umbral: string;
}

export interface DataPorcentajeRotacion {
  fecha: Date;
  cod_pcrc: string;
  rotacion: string;
  fuente: string;
  fecha_creacion: Date;
}

export interface FormatedTiemposSeleccion {
  'codigo PCRC': string;
  'cantidad de personas minima': string;
  'cantidad de personas maxima': string;
  'dias de reclutamiento': string
}

export interface FormatedPerfiles {
  'codigo PCRC': string;
  perfil: string;
  'formacion mínima umbral': string;
  'formacion mínima evidencia': string;
  'experiencia laboral umbral': string;
  'experiencia laboral evidencia': string;
  'diccion umbral': string;
}

export interface FormatedDataPorcentajeRotacion {
  fecha: Date;
  'codigo PCRC': string;
  holgura: string;
  fuente: string;
}
