import { Response } from "../../../models/Response";

export interface MenuItems {
    path: string;
	title: string;
	icon: string;
	typeIcon: string;
	class: string;
	subroutes: Subroute[];
	viewsubroutes: boolean;
	permision: string | string[];
	external_url?: string;
	letra?: string;
}

export interface Subroute {
    class:     string;
    icon:      string;
    letra:     string;
    path:      string;
    permision: string[] | string;
    title:     string;
    typeIcon:  string;
    external_url?: string;
    target?: string;
}

export interface User {
    actions:   string[];
    cod_ceco:  string;
    desc_ceco: string;
    id:        string;
    lastName:  string;
    name:      string;
    place:     number;
    plaza:     number;
    user:      string;
}

export interface DatosUsuario { 
    name: string;
    email_corporativo: string;
    nombre_cargo: string;
 
}

export interface DatosUsuario1 { 
    pais_procedencia:       string;
    discapacidad:           string;
    sexo:                   string;
    grupo_etnicos:          string;
    nombre:                 null;
    telefono1:              string;
    celular1:               string;
    celular2:               null;
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
    direccion_orientacion1: null;
    direccion_numero2:      string;
    direccion_sufijo2:      string;
    direccion_numero3:      string;
    direccion_orientacion2: null;
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
    direccion:              string;
    latitud:                string;
    longitud:               string;
    nombre_cargo:           string;
    name:                   string;
}

export interface UserDemographicNameCharge {
    documento:              string;
    primer_nombre:          string;
    segundo_nombre:         string;
    primer_apellido:        string;
    pcrc:                   string;
    primer_nombre_lider:    string;
    segundo_nombre_lider:   string;
    primer_apellido_lider:  string;
    segundo_apellido_lider: string;
    nombre_cargo:           string;
    ciudad:                 null;
    nombre_centros_costos:  null;
    idCliente:              null;
    cliente:                null;
    servicio:               null;
    programa:               null;
}


export interface ResponseDatosUsuario extends Response{
    result: DatosUsuario
}

export interface ResponseUserDemographicNameCharge extends Response{
    result: UserDemographicNameCharge
}

export interface GetShowUpdatePersonalData extends Response{
    result: number;
}