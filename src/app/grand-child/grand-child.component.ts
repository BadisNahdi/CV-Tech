import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.css'
})
export class GrandChildComponent {

}
