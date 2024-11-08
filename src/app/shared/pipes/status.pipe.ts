import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value, ...args) {
    if (value == 1) {
      return "activado";
    }
    if (value == 0) {
      return "desactivado"
    }    
    return null;
  }

}
