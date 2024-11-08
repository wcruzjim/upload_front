import { Injectable } from "@angular/core";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { HelperService } from "../helper/helper.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlBase } from '../../config/globals';

@Injectable({
	providedIn: "root"
})
export class SecurityService {
	constructor(
		public ngxService: NgxUiLoaderService,
		public helper: HelperService,
		private readonly http: HttpClient
	) { }

	refreshCookies() {
		return this.helper.get(`seguridad/refreshToken`);
	}

	refreshToken(urlbase = urlBase) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};
		return this.http.get(urlbase + 'seguridad/refreshToken', httpOptions);
	}

	isLogated(){
		return this.helper.get(`seguridad/isLogated`);
	}

	logout() {
		return this.helper.get(`seguridad/logout`);
	}

}
