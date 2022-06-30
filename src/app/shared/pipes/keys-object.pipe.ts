import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysObject'
})
export class KeysObjectPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Object.keys(value)
  }

}
