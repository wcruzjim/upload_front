import { SafeResourceUrl } from "@angular/platform-browser";
import { Response } from "../../models/Response";
import { PCRCPositions } from "../administration/administration";

export interface LinksAppFormatted {
	id?: number;
	title: string;
	placeHolder: string;
	url: string;
	icon: string;
	color: string;
	colorText: string;
	publico?: string;
	tipoPublico?: string;
	hasSpecialParam?: string;
	isEditable?: string;
}

export interface LinksAppFormattedToEdit {
	id: number;
	nombre: string;
	descripcion: string;
	icon: string;
	url: string;
	color: string;
	colorText: string;
	tipoPublico?: string;
	publico?: string;
}

export interface TablePCRCClientPermissions {
	cliente: string;
	ceco: string;
	pcrc: string;
	id_dp_clientes: string;
}

export interface ListColors {
	info: string;
	warning: string;
	success: string;
	danger: string;
}

export interface Communications {
	icono?: string;
	color?: string;
	titulo: string;
	descripcion: string;
	id_img?: string;
	nombre_img?: string;
	etiquetas?: string[];
	creado_por?: string;
	fecha_modificacion: string;
	id_notification?: string;
	visto?:string;
	obligatorio?:string;
	url_archivo?: SafeResourceUrl;
	archivo?: string;
}

export interface CommunicationConfiguration {
	id: string;
	título: string;
	descripción: string;
	id_img?: string;
	"nombre imagen": string;
	color: string;
	"tipo público": string;
	etiquetas: string[];
	público: string;
	"creado por": string;
	estado: string;
	notificación: string;
	"visible home": string;
	duración: string;
	icono: string;
	oscuro: string;
	expandible: string;
	movible: string;
	posición: string;
	"fecha creación": string;
	"fecha modificación": string;
}

export interface CommunicationFormatted {
	title: string;
	description: string;
	plainDescription?: string;
	id_img: string;
	nombre_img?: string;
	icon: string;
	color: string;
	publicType: string;
	public: string;
	notify: string;
	duration: string;
	position: string;
	dark: string;
	resizeable: string;
	movible: string;
	showHome: string;
}

export interface PublicType {
	all: string;
	operation_internal_code: string;
	pcrc: string;
	identify: string;
	username: string;
	id_genesys: string;
	id_avaya: string;
}

export interface CommunicationExportUnformatted {
	id: string;
	titulo: string;
	descripcion: string;
	id_img: string;
	nombre_img?: string;
	color: string;
	tipo_publico: string;
	publico: string;
	etiquetas: string[];
	creado_por: string;
	estado: string;
	notificacion: string;
	visible: string;
	duracion: string;
	icono: string;
	oscuro: string;
	expandible: string;
	movible: string;
	posicion: string;
	fecha_creacion?: string;
	fecha_modificacion?: string;
}

export interface IdNameDictionaryColor {
	id: string;
	name: string;
	color: string;
}

export interface GetClientPCRC extends Response {
	result: Array<PCRCPositions>;
}

export interface GetLinks extends Response {
	result: Array<LinksAppFormatted>;
}

export interface DeleteLinks extends Response {
	result: boolean;
}

export interface SaveEditCommunication extends Response {
	result: boolean;
}

export interface SaveEditLink extends Response {
	result: boolean;
}

export interface GetConfigGeneral extends Response {
	result: Array<string>;
}

export interface GetCommunications extends Response {
	result: Array<CommunicationExportUnformatted>;
}

export interface GetHomeCommunications extends Response {
	result: Array<Communications>;
}

export interface ValidateShowEnjoy extends Response {
	result: string;
}

export interface DeleteImage extends Response {
	result: boolean;
}

export interface ImageBanner {
	id: number;
	fecha_carga: Date;
	tipo: string;
	documento: string;
	archivo: string;
}

export interface GetImagesHome extends Response {
	result: Array<ImageBanner>;
}

export interface ImageRender {
	headers: Headers;
	status: number;
	statusText: string;
	url: string;
	ok: boolean;
	type: number;
	body?: Blob;
}

export interface Headers {
	normalizedNames: Body;
	lazyUpdate: null;
}
