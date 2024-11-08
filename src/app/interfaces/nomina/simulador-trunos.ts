import { FormGroup } from "@angular/forms";
import { Response } from "../../models/Response";
  export interface ArchivoSelected {
    Descanso_Final: string | undefined;
    Descanso_Final_Diurno: string;
    Descanso_Final_Nocturno: string;
    Diurno_CX: string;
    Nocturno_CX: string;
    Total_conexion: string;
    fecha: string;
    ratio_cumplimiento: string;
    documento:string;
    descanso_final: string | undefined;
    descanso_final_diurno: string;
    descanso_final_nocturno: string;
    diurno_cx: string;
    nocturno_cx: string;
    total_conexion: string;
  
  }

  export interface ArchivoSelectedResult {
    id: number;
    archivoSeleccionado: ArchivoSelected[];
  }

  export interface arrExportables{
    nameTab:string;
    urlFile:string;
  }

  export interface DataSimuladorTurnosI {
    fecha: string;
    horas_conexion_programadas: string;
    novedad_jarvis: string;
    novedad_programadas: string;
    tiempo_descanso: string;
    total_turno_programado: string;
  }

  export interface DataSimuladorTurnosResponseI extends Response {
    result:DataSimuladorTurnosI[];
    society?:string;
  }
  export interface DataUploadI {
    Descanso_Final: string;
    Descanso_Final_Diurno: string;
    Descanso_Final_Nocturno: string;
    Diurno_CX: string;
    Fecha: string;
    Nocturno_CX: string;
    Ratio_Cumplimiento: string;
    Total_Conexion: string;
    Documento: string;
  }

  export interface DataCargaMasivaI {
    descanso_final: string;
    descanso_final_diurno: string;
    descanso_final_nocturno: string;
    diurno_cx: string;
    documento: string;
    fecha: string;
    nocturno_cx: string;
    ratio_cumplimiento: string;
    total_conexion: string;
  }
  export interface DataCargaMasivaResponseI extends Response {
    result:DataCargaMasivaI[];
  }
  export interface DataTableI {
    descanso_final?: string;
    descanso_final_diurno?: string;
    descanso_final_nocturno?: string;
    diurno_cx?: string;
    documento?: string;
    horas_descontar?: string;
    nocturno_cx?: string;
    novedad_programadas?: string;
    porcentajeCumplimiento?: string;
    ratio_cumplimiento?: string;
    tiempo_descanso?: string;
    total_conexion?: string;
    total_horas_conexion?: string;
    porcentaje_cumplimiento?: string;
    descansos_programados?: string;
    descansos_remunerados?: string;
    fecha?: string;
    holgura_no_descuento?: string;
    horas_a_descontar?: string;
    horas_conexion?: string;
    horas_conexion_programadas?: string;
    novedad_jarvis?: string;
    novedades_programadas?: string;
    total_horas?: string;
    total_turno_programado?: string;
    horas_conexion_diurno?:string;
    horas_conexion_nocturno?:string;
    total_novedades_descansos?:string;
    novedades_descansos_diurnos?:string;
    novedades_descansos_nocturnos?:string;
    "% cumplimiento"?: string;
    "Descansos programados"?: string;
    "Descansos remunerados"?: string;
    "Fecha"?: string;
    "Holgura no descuento"?: string;
    "Horas a descontar"?: string;
    "Horas conexion"?: string;
    "Horas conexion programadas"?: string;
    "Novedad Jarvis"?: string;
    "Novedades programadas"?: string;
    "Total horas"?: string;
    "Total turno programado"?: string;
    "Total horas conexion"?:string;
    "Horas conexion diurno"?:string;
    "Horas conexion nocturno"?:string;
    "Total novedades+descanso"?:string;
    "Novedades+descanso diurno"?:string;
    "Novedades+descanso nocturno"?:string;
    "novedad"?:Array<String>;
  }

  export interface DataTableIResponse extends Response{
    result:DataTableI[];
  }


  export interface ColumnaInterfaz {
    column: string;
    style: {
      width?: string;
      fontSize: string;
      fontWeight: string;
      color: string;
      border: string;
      backgroundColor: string;
    };
  }

  export interface FormattedDataI {
    "% cumplimiento": string;
    "Descansos programados": string;
    "Descansos remunerados": string;
    "Fecha": string;
    "Holgura no descuento": string;
    "Horas a descontar": string;
    "Horas conexion": string;
    "Horas conexion programadas": string;
    "Novedad Jarvis": string;
    "Novedades programadas": string;
    "Total horas": string;
    "Total turno programado": string;
  }
  
  export interface FormattedDataSimulador  extends DataTableSimuladorI {
    "Descanso final"?: string;
    "Descanso final diurno"?: string;
    "Descanso final nocturno"?: string;
    "Diurno cx"?: string;
    "Nocturno cx"?: string;
    "Ratio cumplimiento"?: string;
    "Total conexion"?: string;
    "documento"?: string;
  }
  export interface DataTableSimuladorI {
    Descanso_final?: string;
    Descanso_final_diurno?: string;
    Descanso_final_nocturno?: string;
    Diurno_cx?: string;
    Fecha?: string;
    Nocturno_cx?: string;
    Ratio_cumplimiento?: string;
    Total_conexion?: string;
    Documento?: string;
  }

  export interface CorteSociedadI{
    fecha_fin_corte?:string;
    fecha_inicio_corte?:string;
    fecha_inicio_corte_mes_pasado?:string;
    fecha_pago?:string | null;
    id_gh_cortes_nomina_operativo?:string;
    id_sociedad:string;
    quincena:string;
    visualiza_descuentos:number;
  }

  export interface CorteSociedadResponseI extends Response{
    result:CorteSociedadI[];
  }

  export interface FormValueI extends FormGroup{
      year: string,
      month: string,
      corte: Array<string>
   
  }

  export interface FornightConsolidatedSimulatorResponse extends Response {
    result:FornightConsolidatedSimulatorData;
  }

  export interface FornightConsolidatedSimulatorData {
    fortnightData:Array<FornightConsolidatedSimulator>;
    contadorAusentismosJustificados:number
    society:string;
    minTimePercentage:number;
  }

  export interface FornightNoveltiesResponse extends Response {
    result:Array<FornightNovelty>;
  }

  export interface FornightNovelty {
    fecha:string;
    novedad:string;
    id_descripcion_novedad:number;
  }
  

  export interface FornightConsolidatedSimulator {
    documento:string,
    fecha_inicio_p:string;
    fecha_fin:string;
    fecha:string;
    mes:number;
    quincena:number;
    total_conexion:number;
    diurno_cx:number;
    nocturno_cx:number;
    descanso_final_diurno:number;
    descanso_final_nocturno:number;
    descanso_final:number;
    ratio_cumplimiento:number;
    horas_conexion_programadas:string;
    novedad_programadas:string;
    tiempo_descanso:string;
    total_turno_programado:string;
    novedad_jarvis:string;
    novedad: Array<string>;
    total_horas_conexion:string;
    horas_conexion_diurno:string;
    horas_conexion_nocturno:string;
    total_novedades_descansos:string;
    novedades_descansos_diurnos:string;
    novedades_descansos_nocturnos:string;
    total_horas:string;
    justificacion:string;
    menor_fecha_limite:number;
  }


  export interface FormattedFornightConsolidatedSimulator {
    documento:string,
    fecha_inicio:string;
    fecha_fin: string;
    fecha:string;
    mes:string;
    quincena:number;
    horas_conexion_programadas:string;
    total_turno_programado:string;
    total_horas_conexion:string;
    total_horas:string;
    menor_fecha_limite:number;
    justificacion:string;
    accion?:string;
  }


  export interface FornightChartData {
    documento:string,
    fecha_inicio:string;
    fecha_fin: string;
    mes:string;
    quincena:number;
    total_turno_programado:number;
    total_horas:number;
  }

  export interface ConnectionHourJustification {
    documento:string;
    fecha:string;
    quincena:number;
    fecha_inicio:string;
    fecha_fin:string;
    justificacion:string;
  }


  export interface LoggedInBossResponse extends Response {
    result:number;
  }

  export interface ConnectionHourJustificationResponse extends Response {
    result:boolean;
  }

