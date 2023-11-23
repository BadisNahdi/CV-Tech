import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { RainbowDirective } from '../rainbow.directive';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective, RainbowDirective],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent {

}
