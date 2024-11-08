import { Response } from '../../models/Response';
export interface DataFilterWorkTeam {
  id: number;
  nombre: string;
  city?: number;
}

export interface FormatedFilterWorkTeam {
  dateFilter: string;
  cityFilter: string;
  documentoJefeFilter: string;
}

export interface saveWorkTeam extends Response{
  result:boolean
}

export interface FormatedWorkTeam {
  id_file_uploads: String,
  documento: String,
  fecha_carga: String,
  estado: String,
  nombre_file: String,
  tipo_file: String
}



export interface FormatedInformeGeneral {
  fecha:	Date,
  'nombre jefe': String,
  ciudad:	String,
  'capacidad mes':	number,
  'solicitados mes':	number,
  'capacidad semana 1':	number,
  'solicitados semana 1':	number,
  'capacidad semana 2':	number,
  'solicitados semana 2':	number,
  'capacidad semana 3':	number,
  'solicitados semana 3':	number,
  'capacidad semana 4':	number,
  'solicitados semana 4':	number,
  'capacidad semana 5':	number,
  'solicitados semana 5':	number
}

export interface GlobalInformeGeneral {
  fecha:	Date,
  nombre_jefe: string,
  ciudad:	string,
  capacidad_semana_1:	number,
  solicitados_semana_1:	number,
  capacidad_semana_2:	number,
  solicitados_semana_2:	number,
  capacidad_semana_3:	number,
  solicitados_semana_3:	number,
  capacidad_semana_4:	number,
  solicitados_semana_4:	number,
  capacidad_semana_5:	number,
  solicitados_semana_5:	number
}

export interface GetGlobalInformeGeneral extends Response {
  result: Array<GlobalInformeGeneral>
}

export interface GetAtraccionNewsReport extends Response {
  result: Array<AtraccionNewsReport>
}

export interface AtraccionNewsReport {
  documento: String,
  id_motivo: Number,
  motivo: Number,
  fecha_inicio: Date,
  fecha_fin: Date,
  dia_completo: Number
  fecha_creacion: Date,
  documento_modificador: String
}

export interface FormatedNewsReportSend {
  id_reporte_novedad?:Number,
  documento: string,
  id_estado: Number,
  id_motivo: Number,
  fecha_inicio: string,
  fecha_fin: string,
  dia_completo: Number
}

export interface FormatedNewsReport {
  id_reporte_novedad?:Number,
  documento: String,
  id_motivo: Number,
  motivo: Number,
  'fecha inicio': Date,
  'fecha fin': Date,
  'dia completo': Number,
  'fecha creacion': Date,
  'documento modificador': String
}

export interface GetAtraccionNewsReasons extends Response {
  result: Array<AtraccionNewsReasons>
}

export interface AtraccionNewsReasons {
  motivo: String,
  fecha_creacion: Date,
  documento_modificador: String
}

export interface FormatedNewsReasonsSend {
  id_motivo?:Number,
  id_estado:Number,
  motivo: String,
}

export interface FormatedNewsReasons {
  id_motivo?:Number,
  motivo: String,
  'fecha creacion': Date,
  'documento modificador': String
}

export interface FormatedWorkTeamSend {
  id_equipos_trabajos?:number,
  fecha: Date,
  numero_semana: Number,
  documento_jefe: String,
  id_ciudad: string,
  cantidad_de_tecnicos: Number,
  cantidad_de_profesionales: Number,
  capacidad_diaria: Number
}

export interface FormatedWorkTeamPcrc {
  id_equipos_trabajos_pcrc?:number,
  fecha: Date,
  'código pcrc': String,
  'documento jefe': String,
  ciudad: Number
}

export interface FormatedWorkTeamPcrcSend {
  id_equipos_trabajos_pcrc?:number,
  fecha: Date,
  codigo_pcrc: String,
  documento_jefe: String,
  id_ciudad: Number
}

export interface GetGlobalInformationPersonal extends Response {
  result: Array<GlobalInformationPersonal>
}

export interface GlobalInformationPersonal {
  id_file_uploads: String,
  documento: String,
  fecha_carga: String,
  estado: String,
  nombre_file: String,
  tipo_file: String
}

export interface GlobalInformationPersonal_pcrc {
  fecha: Date;
  cod_pcrc: string;
  documento_jefe: string;
  nombre: string;
  municipio: Number;
}

export interface CityResponse extends Response{
  result:SelectType[];
}

export interface SelectType {
  id: number;
  name: string;
}

export interface deleteWorkTeamResponse extends Response {
  result: String;
}