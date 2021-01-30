import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkNameFormat'
})
export class LinkNameFormatPipe implements PipeTransform {

  transform(linkName: string, id: any, ...args: unknown[]): unknown {
    console.log(linkName, id)
    const regex = new RegExp(/\s\W\w/g);
    return linkName.replace(regex, '-').replace('/', '-').split(' ').map(character => character.toLowerCase()).join('');
  }

}
