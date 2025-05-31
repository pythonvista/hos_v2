import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestCategory'
})
export class RequestCategoryPipe implements PipeTransform {

  transform(value: any): any {
    if (+value === 1) return "Pending";
    else if (+value === 2) return "Approved";
    else return "Rejected";
  }

}
