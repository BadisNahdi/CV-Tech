import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {

  @Input() color = 'white';
  @Input() bgcolor = 'red';
  @Input() size = '25px'
  @Input() police = 'Arial';
  isChecked = "Arial"

  changesize(size: string) {
    this.size = size + 'px';
  }
  changeFont(font: string) {
    this.police = font;
  }

  ngOnInit(): void {
  }
}