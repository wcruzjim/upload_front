import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ViewChild,
	ElementRef
} from "@angular/core";
import { urlBase } from '../../../app/config/globals';
import { AlertService } from "../../../app/services/alert/alert.service";
import { HelperService } from "../../../app/services/helper/helper.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { AlertComponent } from "../alert/alert/alert.component";
import { FileValidatorService } from "../../services/validators/file-validator.service";
import { SummaryDragDropComponent } from "../summary-drag-drop/summary-drag-drop.component";
import { MatDialog } from "@angular/material/dialog";
import { SummaryFile } from "../../../app/interfaces/drag-drop-file/drag-drop";
import { ErrorHandlerService } from "../../../app/services/error_handler/error_handler.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ToastNotificationService } from "../../services/toast-notification/toast-notification.service";
import { ExcelService } from "../../services/excelservice/excelservice.service";
import { take } from "rxjs/operators";

@Component({
	selector: "app-dragdropfile",
	templateUrl: "./dragdropfile.component.html",
	styleUrls: ["./dragdropfile.component.scss"]
})
export class DragdropfileComponent implements OnInit {
	@Input("url") url: string;
	@Input("typeBtn") typeBtn: string;
	@Input("urlBase") urlBase: string = urlBase;
	@Input("urlFile") urlFile: string = "";
	@Input("urlReviewErrors") urlReviewErrors: string = "";
	@Input("aditionalData") aditionalData: [{ key: string, value: string }?] = [];
	@Input("idTemplate") idTemplate:Number = 0; 
	@Input("formatFunctionName") formatFunctionName:String = '';
	@ViewChild("inputFile") inputFile: ElementRef;
	dropfiles: File[] = [];
	fileData: File = null;
	nameFile: string;
	isDisabled: boolean = true;
	public messageAlert: string;
	private fileForm:FormData = null;
	@Input("showButtonUpload") showButtonUpload: string = "true";
	@Input("showLabel") showLabel: string = "true";
	@Input() showSummary: boolean = false;
	@Input() showAlertResult: string = 'true';
	@Input() urlSummary: string = '';
	@Input() textMessage: string;
	@Input() showMessage: boolean = true;
	@Output() onChangeFile: EventEmitter<File> = new EventEmitter();
	@Output() emitResult: EventEmitter<object> = new EventEmitter();
	@Output() removedFile: EventEmitter<File> = new EventEmitter();
	
	/**
	 * Determines if the button is customizable.
	 *
	 * @type {boolean}
	 * @memberof CustomButtonComponent
	 */
	@Input() isCustomizable: boolean = false;

	/**
	 * Customizable text for the button.
	 *
	 * @type {string}
	 * @memberof DragdropfileComponent
	 */
	@Input() customBtnText: string = "";

	/**
	 * Customizable icon for the button.
	 *
	 * @type {string}
	 * @memberof DragdropfileComponent
	 */
	@Input() customBtnIcon: string = "load";

	/**
	 * Event emitter for custom button action.
	 *
	 * @memberof DragdropfileComponent
	 * @event customBtnAction
	 */
	@Output() customBtnAction = new EventEmitter<void>();

	constructor(
		public helper: HelperService,
		public alertservice: AlertService,
		public ngxService: NgxUiLoaderService,
		private readonly fileValidatorService : FileValidatorService,
		public dialog: MatDialog,
		public errorService: ErrorHandlerService,
		private toastNotificationService: ToastNotificationService,
		private excelService: ExcelService
	) {}

	ngOnInit() {
		this.isDisabled = true;
		this.messageAlert = this.textMessage ? this.textMessage : $localize`Nota: Recuerda descargar el formato actualizado, podría haber cambios. ¡Gracias!`; 
	}

	/**
	 * Handles the action when the custom button is clicked.
	 *
	 * @memberof DragdropfileComponent
	 * @function clickedCustomBtnAction
	 * @returns {void}
	 */
	public clickedCustomBtnAction(): void{
		this.customBtnAction.emit();
	}

	addDropFiles(event){
		if (event.addedFiles.length < 1) {
			return;
		}

		let archivosNoPermitidos = event.addedFiles.filter( localFile => {
			return this.fileValidatorService.isValidTypeFile( localFile.type ) === false
		} )

		if(archivosNoPermitidos.length > 0){
			const nombresArchivosInvalidos = archivosNoPermitidos.map(name => name.name).join(',')
			this.alertservice.alert({title: 'Ups', message: 'Los archivos [' + nombresArchivosInvalidos + '] no tiene una extensión valida'    , type: 'error'})
			return;
		}

		this.dropfiles.push(...event.addedFiles);
		if (this.dropfiles.length > 1) {
			this.replaceFile();
		}
		this.isDisabled = false;
		this.onChangeFile.emit(event.addedFiles[0]);				
	}

	replaceFile() {
		this.dropfiles.splice(0, 1);
	}

	onRemove(event) {
		this.dropfiles.splice(this.dropfiles.indexOf(event), 1);
		this.isDisabled = true;
		this.removedFile.emit(event);
	}

	loadFile(event) {
		this.addDropFiles(event);
		if (event.addedFiles.length > 0) {
			this.nameFile = event.addedFiles[0].name;
			this.fileData = event.addedFiles[0];
		}
	}

	public async uploadFile() {
		if (this.showSummary) {
			const summary = await this.getSummary();
			this.openSummaryDialog(summary);
		}else{
			this.uploadFileNoSummary();
		}
	}

	downloadFormat(){
		
		if(this.idTemplate != 0){

			if(this.formatFunctionName ==  ''){
				this.formatFunctionName = 'genericDownload'
			}

			const params = {idTemplate: this.idTemplate, formatFunctionName: this.formatFunctionName, aditionalData: this.aditionalData};
			
			this.excelService.downloadExcelFormat(params).pipe(
				take(1)
			  ).subscribe(async (data) => {
				const fileName = await this.excelService.getTemplateName(this.idTemplate);
				const url = window.URL.createObjectURL(data);
				const a = document.createElement('a');
				a.href = url;
				a.download = fileName.result;
				a.click();
				window.URL.revokeObjectURL(url);
			  },
			  (error) =>  {
				this.alertservice.showAlert("Error", AlertComponent, error, 500,{
					width: "32rem"
				});
				
			  }
			
			);
		}
	}

	private async uploadFileNoSummary() {
		this.fileForm = this.getFormSubmit();
		this.ngxService.start();

		this.helper.post(this.url, this.fileForm)
			.then((res) => {

				if (this.showAlertResult === 'true') {
					const message = res.result.msgSuccess || res.statusText;
		
					if (this.showMessage) {
						this.onAlert("success", message);
					} else {
						this.toastNotificationService.showInfoToast(message);
					}
				}
				this.emitResult.emit(res.result.data);
				this.ngxService.stop();
			})
			.catch(error => {
				const errorToEmit = this.showModalErrors(error);
				this.emitResult.emit({hasError: true, data: errorToEmit});
				this.ngxService.stop();
			})
	}

	private async getSummary(): Promise<Array<SummaryFile>> {
		const formData = this.getFormSubmit();
		this.ngxService.start();
		return new Promise<Array<SummaryFile>>((resolve) => {
			this.helper.post(this.urlSummary, formData)
				.then((res) => {
					this.ngxService.stop();
					resolve(res.result);
				})
				.catch(error => {
					this.showModalErrors(error);
					this.ngxService.stop();
				});
		})
	}

	private showModalErrors(error: HttpErrorResponse) {
		if (error.status == 406) {
			return this.errorService.showAlertReturnObservable(error.error.result.error_totales, undefined, this.urlReviewErrors, this.fileForm)
		} else {
			this.onAlert("warning", error?.error?.statusText || 'Error al intentar realizar la acción');
		}
	}


	private openSummaryDialog(dataSummary: Array<SummaryFile>): void {
		const dialogSummary = this.dialog.open(SummaryDragDropComponent, {
			width: '1000px',
			data: dataSummary
		});
		dialogSummary.afterClosed().subscribe(data => {
			if (typeof data !== 'undefined') {
				if (data.accept) {
					this.uploadFileNoSummary();
				}
			}
		})
	}

	private getFormSubmit(): FormData {
		const formData = new FormData();
		formData.append("file", this.fileData);
				
		if (this.aditionalData.length != 0) {
			this.aditionalData.forEach(element => {
				if(typeof element.value === 'object' && element.value !== null){
					element.value = JSON.stringify(element.value);
				}
				formData.append(element.key, element.value);
			});
		}
		return formData;
	}

	onAlert(status, statusText) {
		this.alertservice.showAlert("Aviso", AlertComponent, statusText, status, {
			width: "500px"
		});
	}
}
