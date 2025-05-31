import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/_models/user';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: User, args?: any): any {
    return value.address + ', ' + value.city + ',' + value.state;
  }

}
