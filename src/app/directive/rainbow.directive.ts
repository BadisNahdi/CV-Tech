import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow]',
  standalone: true
})
export class RainbowDirective {
  table = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'purple'];

  @HostBinding('style.borderColor') bc: any;
  @HostBinding('style.color') color: any;

  constructor() { }
  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * (this.table.length) - 1);
    this.bc = this.table[index];
    this.color = this.table[index];
  }
}
