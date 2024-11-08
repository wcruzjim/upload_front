import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormgroupService {

  private _deviceForm: UntypedFormGroup = null;

  constructor() {
    // This is intentional
   }

  registerForm(form: UntypedFormGroup): void {
    this._deviceForm = form;
  }

  restoreForm(): UntypedFormGroup {
    return this._deviceForm;
  }
}


