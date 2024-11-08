import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserShared } from "../../../app/interfaces/userInfoShared/userInfoShared";
import { LogoutAutomaticService } from "../logoutToken/logoutAutomatic.service";

@Injectable({
	providedIn: "root"
})
export class UserInfoSharedService {
	public userInformation: BehaviorSubject<UserShared> = new BehaviorSubject(null);
	
	constructor(
		private readonly logoutAutomaticService: LogoutAutomaticService
	) { 
		// This is intentional
	}	

	public setNewUser(newUser: UserShared): void {
		this.userInformation.next(newUser);
		if(this.userInformation.getValue().hasOwnProperty("expiracion")){
			this.logoutAutomaticService.setFunctionLogout(this.userInformation.getValue()["expiracion"]);
		}
	}

	public getUser(): UserShared{
		return this.userInformation.getValue();
	}

}
