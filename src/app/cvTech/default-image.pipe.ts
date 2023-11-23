import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // return value ? value : "../../assets/images/anonymous.png";
    if (!value) {
      return "../../../assets/images/tim_logo.png";
      console.log("\n\n\nvalue is null");
    }
    return value;
  }

}
