import { Injectable } from "@angular/core";
import Swal, { SweetAlertIcon } from "sweetalert2";

@Injectable({
	providedIn: "root",
})
export class ToastNotificationService {
	private async showToast(
		icon: SweetAlertIcon,
		title: string,
		text: string
	): Promise<void> {
		const Toast = Swal.mixin({
			toast: true,
			position: "top-right",
			icon: icon,
			iconColor: "white",
			customClass: {
				popup: "colored-toast",
			},
			showConfirmButton: false,
			timer: 5000,
			timerProgressBar: true,
		});

		await Toast.fire({
			title: title,
			text: text,
		});
	}

	public async showSuccessToast(text: string): Promise<void> {
		await this.showToast("success", `Éxito`, text);
	}

	public async showErrorToast(text: string): Promise<void> {
		await this.showToast("error", `Error`, text);
	}

	public async showWarningToast(text: string): Promise<void> {
		await this.showToast("warning", `Advertencia`, text);
	}

	public async showInfoToast(text: string): Promise<void> {
		await this.showToast("info", `Información`, text);
	}

	public async showQuestionToast(text: string): Promise<void> {
		await this.showToast("question", `Consulta`, text);
	}
}
