import { NotificationsService } from "../../../services/operativemodel/notifications/notifications.service";
import { responseNotificationsCommunicate } from "../../../../app/interfaces/home/notifications";
import {AfterViewInit,ChangeDetectorRef,Component,OnInit} from "@angular/core";
import { HelperService } from "../../../../app/services/helper/helper.service";
import { Communications } from "../../../../app/interfaces/home/communication";
import { AlertService } from "../../../../app/services/alert/alert.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
	selector: "app-modal-view-notifications-client",
	templateUrl: "./modal-view-notifications-client.component.html",
	styleUrls: ["./modal-view-notifications-client.component.scss"],
})
export class ModalViewNotificationsClientComponent
	implements OnInit, AfterViewInit
{
	public communications: Array<Communications> = [];
	public hasCommunications: boolean = false;

	constructor(
		private readonly NotificationsService: NotificationsService,
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly ngxService: NgxUiLoaderService,
		private readonly alertService: AlertService,
		public helper: HelperService
	) {}

	ngOnInit() {
		this.communications = [];
	}

	ngAfterViewInit(): void {
		this.getNotificationsCommunicates();
	}

	private getNotificationsCommunicates(): void {
		this.ngxService.start();
		this.NotificationsService.getNotificationsCommunicates()
			.then((data: responseNotificationsCommunicate) => {				
				this.ngxService.stop();
				this.hasCommunications = data.result.length > 0;
				this.communications = data.result;
				this.changeDetectorRef.detectChanges();
			})
			.catch(() => {
				this.ngxService.stop();
				this.alertService.handleErrorRequest(
					$localize`Error al recuperar la lista de indicadores`
				);
			});
	}
}