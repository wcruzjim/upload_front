import { AbstractControl } from "@angular/forms";
export class ValidateRow {

    static checkrow(aControl: AbstractControl) {
        const row = aControl.value;
        const formula = row.formula
        if (formula == '<>') {
            aControl.get('upper_limit').enable({ onlySelf: true, emitEvent: false })
            aControl.get('lower_limit').enable({ onlySelf: true, emitEvent: false })
        }else{
            if (formula == '>' || formula == '>=' || formula == '=') {
                aControl.get('upper_limit').setValue('',{ onlySelf: true, emitEvent: false })
                aControl.get('upper_limit').disable({ onlySelf: true, emitEvent: false })
                aControl.get('lower_limit').enable({ onlySelf: true, emitEvent: false })
            }
            if(formula == '<' || formula == '<='){
                aControl.get('lower_limit').setValue('',{ onlySelf: true, emitEvent: false })
                aControl.get('upper_limit').enable({ onlySelf: true, emitEvent: false })
                aControl.get('lower_limit').disable({ onlySelf: true, emitEvent: false })
            }
        }
    }
}
