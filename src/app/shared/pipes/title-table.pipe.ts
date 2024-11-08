import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titletable'
})
export class TitleTablePipe implements PipeTransform {
  transform(value: string): string {
   return (value.replace('_', ' ')).toUpperCase();
  }
}
