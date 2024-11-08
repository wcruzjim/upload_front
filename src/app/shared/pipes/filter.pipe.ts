import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: object[], field : string, value : string): object[] {  
    if (!items) return [];
    if (!value || value.length == 0) return items;
    return items.filter(it => {
      if (typeof it != 'undefined') {
         return it[field].toLowerCase().indexOf(value.toLowerCase()) !=-1
      }
    });
  }
}