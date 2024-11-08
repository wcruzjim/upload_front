import { Response } from "../../models/Response";

export interface GlobalInformationCecosOperative extends Response {
	cliente: string;
	ceco: string;
	sociedad: string;
	descripcion: string;
	director: string;
	gerente: string;
	idEstado: number;
	estado: string;
}

export interface GetGlobalInformationCecosOperative extends Response {
	result: Array<GlobalInformationCecosOperative>;
}

export interface FormatedCostCentersOperative {
	cliente: string;
	ceco: string;
	sociedad: string;
	descripcion: string;
	director: string;
	gerente: string;
	idEstado: number;
	estado: string;
}

export interface HistoryCecosOperative extends Response {
	historial: string;
	observacion: string;
	ejecutor: string;
	fecha: string;
}

export interface GetHistoryCecosOperative extends Response {
	result: Array<HistoryCecosOperative>;
}

export interface FormatedHistoryCostCentersOperative {
	historial: string;
	observacion: string;
	ejecutor: string;
	fecha: string;
}

export interface CecoCreate {
	idCliente: number;
	cliente: string;
	idServicio: number;
	servicio: string;
	idDirector: number;
	director: string;
	idGerente: number;
	gerente: string;
	programa: string;
	homologacion: string;
	observacion: string;
}

export interface GetCecoCreate extends Response {
	result: Array<CecoCreate>;
}

export interface FormatedCecoCreate {
	IdCliente: number;
	Cliente: string;
	IdServicio: number;
	Servicio: string;
	IdDirector: number;
	Director: string;
	IdGerente: number;
	Gerente: string;
	Programa: string;
	Homologacion: string;
	Observacion: string;
}

export interface CreateCostCenterOperative extends Response {
	result: string;
}
export interface DropdownOption {
	id: number;
	name: string;
}

export interface SelectedClients {
	unnasigned: boolean;
}

export interface ResponseDataCostCenters extends Response {
	id: number;
	name: string;
}
