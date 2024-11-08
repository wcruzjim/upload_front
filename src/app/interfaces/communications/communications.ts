import { SafeUrl } from "@angular/platform-browser";
import { Response } from "../../models/Response";

export interface FormattedTag {
	id?: number;
	etiqueta: string;
	"por defecto": string;
	creado: string;
	modificado: string;
}

export interface TagsFromDB {
	id?: number;
	etiqueta: string;
	por_defecto: string;
	fecha_creacion: string;
	fecha_modificacion: string;
}

export interface ImagePreview {
	[id: number]: SafeUrl;
}

export interface HttpBoolResponse extends Response {
	result: boolean;
}

export interface GetTags extends Response {
	result: Array<TagsFromDB>;
}
