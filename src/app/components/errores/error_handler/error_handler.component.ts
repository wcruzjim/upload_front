import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ExcelService } from "app/services/excelservice/excelservice.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { HelperService } from "app/services/helper/helper.service";
import { ToastNotificationService } from "app/services/toast-notification/toast-notification.service";
import { AlertService } from "app/services/alert/alert.service";
import { AlertComponent } from "app/components/alert/alert/alert.component";
@Component({
	selector: "app-error_handler",
	templateUrl: "./error_handler.component.html",
	styleUrls: ["./error_handler.component.scss"],
})
export class ErrorHandlerComponent {
	/**
	 * The count of successful processing.
	 *
	 * @type {number}
	 * @memberof ErrorHandlerComponent
	 */
	public successfulProcessingCount: number = 0;

	/**
	 * The count of informative processing.
	 *
	 * @type {number}
	 * @memberof ErrorHandlerComponent
	 */
	public informativeProcessingCount: number = 0;

	/**
	 * Info object to redirect 
	 *
	 * @type {{}}
	 * @memberof ErrorHandlerComponent
	 */
	public fileRedirect:{}= {};

	/**
	 * The count of critical processing.
	 *
	 * @type {number}
	 * @memberof ErrorHandlerComponent
	 */
	public criticalProcessingCount: number = 0;

	/**
	 * The total count of processing, including all types.
	 *
	 * @type {number}
	 * @memberof ErrorHandlerComponent
	 */
	public totalProcessingCount: number = 0;

	/**
	 * An array containing the details of each processing step, including errors, information, and successes.
	 *
	 * @type {[]}
	 * @memberof ErrorHandlerComponent
	 */
	public processingDetails = [];

	/**
	 * A string containing an url to redirect data when is allowed to upload data with only informative errors 
	 *
	 * @type string
	 * @memberof ErrorHandlerComponent
	 */
	public allowUpload:string = "";

	/**
	 * Creates an instance of ErrorHandlerComponent.
	 * @param {*} data
	 * @param {ExcelService} excelservice
	 * @memberof ErrorHandlerComponent
	 */
	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		private excelservice: ExcelService,
		public ngxService: NgxUiLoaderService,
		public helper: HelperService,
		private toastNotificationService: ToastNotificationService,
		private readonly alertService: AlertService,
	) {
		this.updateProcessingCounts(data.dato);
		this.processingDetails = data.dato;
		this.allowUpload = data.uploadFlag;
		this.fileRedirect = data.file;
	}

	public sendExcel(): void {
		const exportData = this.formatResultForExport();
		this.excelservice.exportAsExcelFile(exportData, "Exportable");
	}

	public formatResultForExport(): Array<{
		Celda: string;
		Mensaje: string;
		Solucion: string;
	}> {
		return this.processingDetails.map((element) => {
			const elementToReturn = {
				Celda: element.columna + " " + element.linea,
				Mensaje: element.error,
				Solucion: element.texto_solucion,
			};
			return elementToReturn;
		});
	}

	/**
	 * Updates processing counts.
	 *
	 * @param {[]} process - List of process.
	 * @memberof ErrorHandlerComponent
	 */
	private updateProcessingCounts(process: []) {
		process.forEach((error) => {
			const processType = error["tipo_error"];

			if (processType === "1") {
				this.criticalProcessingCount++;
			} else if (processType === "2") {
				this.informativeProcessingCount++;
			} else if (processType === "3") {
				this.successfulProcessingCount++;
			} else{
				// this is intentional
			}
		});

		this.totalProcessingCount =
			this.criticalProcessingCount +
			this.informativeProcessingCount +
			this.successfulProcessingCount;
	}

	public async uploadFile() {
		this.ngxService.start();
		this.helper.post(this.allowUpload, this.fileRedirect)
			.then((res) => {
					const message = res.result.msgSuccess || res.statusText;
		
					this.onAlert("success", message);
					

				this.ngxService.stop();
			})
			.catch(error => {
				this.alertService.handleErrorRequest(`Error insertando los datos de la carga.`);
				this.ngxService.stop();
			})
	}

	onAlert(status, statusText) {
		this.alertService.showAlert("Aviso", AlertComponent, statusText, status, {
			width: "500px"
		});
	}
}
