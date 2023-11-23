import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.css'
})
export class ChildBComponent {

}
