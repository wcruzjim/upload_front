import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
// import { SecurityService } from "../security/security.service";

@Injectable({
	providedIn: "root"
})
export class LogoutAutomaticService {
	private functionLogout: NodeJS.Timeout = null;
	
	constructor(
		private readonly router: Router,
		// private readonly security: SecurityService
	) { 
		// This is intentional
	}	

	public cancelFunctionLogOut(): void {
		clearTimeout(this.functionLogout);
	}

	public setFunctionLogout(time: String){
		if(this.functionLogout){
			this.cancelFunctionLogOut();
		}
		const timeToCall = new Date(String(time))
		const seconds = timeToCall.getTime() - (new Date()).getTime()
		this.functionLogout = setTimeout(() => {
			// this.logout()
		}, seconds);
	}

	// private async logout() {
	// 	this.deleteLocalStorage();
	// 	await this.security.logout();
	// 	this.router.navigate(["login"]);
	// }

	private deleteLocalStorage(): void {
		localStorage.removeItem("simulation");
		localStorage.removeItem("userdata");
		localStorage.removeItem("jwtdata");
		localStorage.removeItem("ngStorage-jwt");
		localStorage.removeItem("ngStorage-userData");
	}

}
