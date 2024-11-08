import { AbstractControl } from "@angular/forms";

export class ValidateDatetime {
    static checktotime(aControl: AbstractControl) {
        let startDate = aControl.get('startDate').value;
        let endDate = aControl.get('endDate').value;
        if (endDate === '' || endDate === null)  {
            aControl.get('endDate').setErrors(null)
            return null;
        }

        if (startDate === '') {
            return null;
        }
        if (endDate !== '') {
            if (startDate >= endDate) {
                aControl.get('endDate').setErrors({ MatchPassword: true })
            }
            else {
                aControl.get('endDate').setErrors(null)
                return null;
            }
        } else {
            return null;
        }
    }
}
