import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-mini-word',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']})
export class MiniWordComponent {
  selectedColor: string = '#00AABB';
  fontSize: number = 16;
  fontFamily: string = 'verdana';
}
