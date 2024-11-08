import {Response} from '../../models/Response';
export interface Academic {
     id_dp_niveles_academicos: string;
     nivel:                    string;
     titulo:                   string;
 }

 export interface UserData {
     pais_procedencia:       string;
     discapacidad:           string;  
     genero:                 string;
     sexo:                   string;
     grupo_etnicos:          string;
     nombre:                 string;
     telefono1:              string;
     celular1:               string;
     celular2:               string;
     email_personal:         string;
     email_corporativo:      string;
     nivel_academico:        string;
     contacto_emergencia:    string;
     celular_emergencia:     string;
     id_departamento:        string;
     departamento:           string;
     id_municipio:           string;
     municipio:              string;
     id_zona:                string;
     zona:                   string;
     id_barrio:              string;
     barrio:                 string;
     direccion_tipo_via1:    string;
     direccion_numero1:      string;
     direccion_sufijo1:      string;
     direccion_orientacion1: string;
     direccion_numero2:      string;
     direccion_sufijo2:      string;
     direccion_numero3:      string;
     direccion_orientacion2: string;
     direccion_tipo_via2:    string;
     direccion_numero4:      string;
     direccion_tipo_via3:    string;
     direccion_numero5:      string;
     estado_ruta:            string;
     vehiculo:               string;
     hijos:                  string;
     fecha_modificacion:     Date;
     documento:              string;
     documento_jefe:         string;
     estrato:                string;
     direccion:              string;
     direccion_corta:        string;
     latitud:                string;
     longitud:               string;
     cargo:                  string;
     campo_direccion:        string;
     demografico_basico:     number;
     escolaridadHijo:        string;
 }
 
 export interface UserInfo {
     documento:              string;
     nombre_completo:        string;
     primer_nombre:          string;
     segundo_nombre:         string;
     primer_apellido:        string;
     sexo:                   string;
     generoPersona:          string;
     pcrc:                   string;
     primer_nombre_lider:    string;
     segundo_nombre_lider:   string;
     primer_apellido_lider:  string;
     segundo_apellido_lider: string;
     nombre_cargo:           string;
     ciudad:                 string;
     nombre_centros_costos:  string;
     idCliente:              string;
     cliente:                string;
     servicio:               string;
     programa:               string;
 }
 
 export interface Genero {
     id:     string;
     genero: string;
 }
 
 export interface SexoBiologico {
    id:     string;
    sexo:   string;
 }

 export interface Pais {
     id_dp_pais: string;
     pais:       string;
 }
 
 export interface Etnia {
     id_dp_etnias: string;
     grupoetnico:  string;
 }
 
 export interface Discapacidad {
     id_dp_discapacidad: string;
     discapacidad:       string;
 }
 
 export interface Sede {
     id_sede: string;
     sede:    string;
 }

 export interface Departamento {
     id_departamento: string;
     departamento:    string;
 }

 export interface Municipio {
     id_municipio: string;
     municipio:    string;
 }
 
 export interface Zona {
     id_zona: string;
     zona:    string;
 }

 export interface Barrio {
     id_barrio: string;
     barrio:    string;
 }

 export interface Estrato {
     id_dp_estratos: string;
     estratos:       string;
 }

 export interface Sufijo {
     id_dp_sufijos: string;
     sufijos:       string;
 }
 
 export interface Orientacion {
     id_dp_orientaciones: string;
     abreviatura:         string;
     nombre:              string;
 }

 export interface Nomenclatura {
     id_dp_nomenclatura_castral: string;
     nombre:                     string;
     abreviatura:                string;
     abreviatura_enable:         string;
 }
 
 export interface DataHobby {
     id:      string;
     hobbies: string;
 }

 export interface LideresCeco {
    documento:       string;
    nombre_completo: string;
}

export interface NivelEscolaridad {
    id:    number;
    nivel: string;
}

export interface EncuestaFamiliar {
     id_dp_conciliacion_familiar_encuesta:     string;
     documento:                                string;
     preparar_servir_alimentos:                string;
     acompanamiento_actividades_escolares:     string;
     limpieza_mantenimiento_hogar:             string;
     compras_pagos_recibos:                    string;
     cuidado_mascotas:                         string;
     estudio:                                  string;
     cuidado_medico_dependientes:              string;
     transportes:                              string;
     actividades_apoyo_emocional_dependientes: string;
     voluntariado:                             string;
     entretenimiento_actividades_ocio:         string;
     transporte_hijos_colegio:                 string;
     acompanamiento_elaboracion_tareas:        string;
     id_dp_conciliacion_familiar_dependencia:  string;
     id_dp_conciliacion_familiar_demografico:  string;
 }

export interface DataHijo {
     id:               string;
     nombre_hijo:      string;
     sexo_hijo:      string;
     escolaridad_hijo: string;
     fecha_nacimiento: Date;
 }
 
 export interface Conciliacion {
     id_dp_conciliacion_familiar_demografico: string;
     opcion_demografico:                      string;
 }
 export interface ConciliacionFamiliar {
     id_dp_conciliacion_familiar_dependencia: string;
     opcion_dependencia:                      string;
 }
 export interface EtniaOtro {
    respuesta_otros:                      string;
 }
 export interface DiscapacidadOtro {
    respuesta_otros:                      string;
 }
 export interface GuardarDP {
    documento:                string;
    observacion_modificacion: string;
    fecha_actual:             Date;
    documento_jefe:           string;
    documento_modificacion:   string;
    fecha_modificacion:       Date;
}

export interface GuardarActualizacionDatos {
    documento:              string;
    email_corporativo:      string;
    email_personal:         string;
    contacto_emergencia:    string;
    celular_emergencia:     string;
    celular1:               string;
    celular2:               string;
    telefono1:              string;
    nivel_academico:        string;
    id_departamento:        string;
    id_municipio:           string;
    id_zona:                string;
    id_barrio:              string;
    direccion_tipo_via1:    string;
    direccion_numero1:      string;
    direccion_sufijo1:      string;
    direccion_orientacion1: string;
    direccion_numero2:      string;
    direccion_sufijo2:      string;
    direccion_numero3:      string;
    direccion_orientacion2: string;
    direccion_tipo_via2:    string;
    direccion_numero4:      string;
    direccion_tipo_via3:    string;
    direccion_numero5:      string;
    grupo_etnicos:          string;
    discapacidad:           string;
    fecha_modificacion:     Date;
    estrato:                string;
    genero:                 string;
    sexo:                   string;
    documento_jefe:         string;
    vehiculo:               string;
    estado_ruta:            string;
    hijos:                  string;
    pais_procedencia:       string;
    sedes:                  string;
    latitud:                string;
    longitud:               string;
}
export interface RequestAPI {
    latitud:  string;
    longitud: string;
}

export interface CargosOperativos {
    result:  string[];
}
export interface EncuestaFamiliarOtro {
    documento:                         string;
    respuesta_otros:                   string;
    id_dp_actualizar_datos_tipo_otros: number;
}


export interface ResponseDataHobby extends Response{
     result: {
          dataHobbies: DataHobby[];
     };
}
export interface ResponseDataHijo extends Response{
     result: {
          dataHijos: DataHijo[];
     };
}
export interface ResponseAcademic extends Response{
     result:  Academic[];
}
export interface ResponseUserData extends Response{
     result: {
        dataUserData: UserData[];
     };
}
export interface ResponseUserInfo extends Response{
     result: {
        dataUserInfo: UserInfo[];
     };
}
export interface ResponseGenero extends Response{
    result:  Genero[];
}
export interface ResponseSexoBiologico extends Response{
    result:  SexoBiologico[];
}
export interface ResponsePais extends Response{
    result:  Pais[];
}
export interface ResponseEtnia extends Response{
    result:  Etnia[];
}
export interface ResponseDiscapacidad extends Response{
    result:  Discapacidad[];
}
export interface ResponseSede extends Response{
    result:  Sede[];
}
export interface ResponseDepartamento extends Response{
    result:  Departamento[];
}
export interface ResponseMunicipio extends Response{
    result:  Municipio[];
}

export interface ResponseZona extends Response{
    result:  Zona[];
}
export interface ResponseBarrio extends Response{
    result:  Barrio[];
}
export interface ResponseEstrato extends Response{
    result:  Estrato[];
}
export interface ResponseSufijo extends Response{
    result:  Sufijo[];
}
export interface ResponseOrientacion extends Response{
    result:  Orientacion[];
}
export interface ResponseNomenclatura extends Response{
    result:  Nomenclatura[];
}
export interface ResponseConciliacion extends Response{
    result:  Conciliacion[];
}
export interface ResponseEncuestaFamiliar extends Response{
    result:  EncuestaFamiliar[];
}
export interface ResponseLideresCeco extends Response{
    result:  LideresCeco[];
}
export interface ResponseConciliacionFamiliar extends Response{
    result:  ConciliacionFamiliar[];
}
export interface ResponseConciliacionFamiliar extends Response{
    result:  ConciliacionFamiliar[];
}
export interface ResponseEtniaOtro extends Response{
    result:  EtniaOtro[];
}
export interface ResponseDiscapacidadOtro extends Response{
    result:  DiscapacidadOtro[];
}
export interface ResponseGuardarDP extends Response{
    result:  GuardarDP[];
}
export interface ResponseGuardarActualizacionDatos extends Response{
    result:  GuardarActualizacionDatos[];
}
export interface ResponseRequestAPI extends Response{
    result:  RequestAPI;
}
export interface ResponseCargosOperativos extends Response{
    result:  CargosOperativos;
}
export interface ResponseEncuestaFamiliarOtro extends Response{
    result:  EncuestaFamiliarOtro;
}

export interface ResponseDomainList extends Response{
    result: Array<string>;
}

export interface GetDataPolicy extends Response{
    result: string;
}

export interface PositionType extends Response{
    result:string;
}

export interface ResponseJefeInmediato extends Response{
    result:Array<JefeInmediato>;
}

export interface JefeInmediato{
    id: string;
    nombre:string;
    cargo?:string;
}

export interface ResponseNivelEscolaridad extends Response{
    result:  NivelEscolaridad[];
}