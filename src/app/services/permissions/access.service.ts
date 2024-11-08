import { Injectable } from "@angular/core";
import { GetCECOMultipleClients, GetClients, GetDocumentNameAccess, GetPCRCMultipleClients } from "../../interfaces/access/access";
import { ResponseAllPCRC } from "../../../app/interfaces/operative-model/configuration";
import { HelperService } from "../helper/helper.service";

@Injectable({
	providedIn: "root"
})
export class AccessService {

	constructor(
		public helper: HelperService
	) { }

	public getClient(): Promise<GetClients> {
		return this.helper.get('Permisos/getClientesAccesoUsuario');
	}

	public getClientAutomaticShift(): Promise<GetClients> {
		return this.helper.get('Permisos/getClientesAccesoUsuarioDescanso');
	}

	public getPCRCs(clientId: number) {
		return this.helper.get('Permisos/getPcrcsAccesoUsuario', { idCliente: clientId });
	}

	public getPCRCMultipleClients(clientsId: Array<string>) : Promise<GetPCRCMultipleClients> {
		return this.helper.get('Permisos/getPcrcsAccesoUsuarioMultipleClients', { idCliente: clientsId });
	}

	public getServicesMultipleClients(clientsId: Array<string> | Array<number> ) : Promise<GetPCRCMultipleClients> {
		return this.helper.get('Permisos/getServiciosAccesoUsuarioMultipleClients', { idCliente: clientsId });
	}

	public getCecoMultipleClients(clientsId: Array<string>) : Promise<GetCECOMultipleClients> {
		return this.helper.get('Permisos/cecoPorClientes', { clientes: clientsId });
	}

	public getPermissionPCRC() {
		return this.helper.get('Permisos/pcrcAccess');
	}

	public getPermissionPCRCOperAdmin() {
		return this.helper.get('Permisos/pcrcAccessOperAdmin');
	}
	

	public getPermissionPCRCWithRest(idClient: Array<string>) {
		return this.helper.get('Permisos/pcrcAccessWithRest', {idClient: idClient});
	}

	public getPermissionCECO(excluir_inactivos: boolean = true) {
		return this.helper.get('Permisos/cecoAccess', { excluir_inactivos : excluir_inactivos });
	}

	public async getAllPCRCs() : Promise<ResponseAllPCRC>{
		return this.helper.get('Permisos/getAllPcrcsAccesoUsuario');
	}

	public getDocumentNameAccess(clients: Array<number> = []): Promise<GetDocumentNameAccess>{
		return this.helper.get('Permisos/getDocumentNameAccess',{clients});
	}



}
