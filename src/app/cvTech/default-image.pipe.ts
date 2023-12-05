import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string): string {
    // return value ? value : "../../assets/images/anonymous.png";
    if (!value.trim()) {
      return "assets/images/tim_logo.png";
    }
    return value;
  }

}
