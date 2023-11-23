import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bg = 'red';
  constructor() { }
  @HostListener('mouseenter') mouseEnter() {
    this.bg = 'yellow';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.bg = 'red';
  }
}
