import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFormat'
})
export class ImageFormatPipe implements PipeTransform {

  transform(pictureLink: string, HOST: string, ...args: any[]): unknown {
    //console.log(pictureLink, HOST, "Pipe")
    const regex = new RegExp("^(http|https)://");
    let imageStatus = pictureLink.match(regex);
    return imageStatus ? pictureLink : HOST + pictureLink;
  }

}
