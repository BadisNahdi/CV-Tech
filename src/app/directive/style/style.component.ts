import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './style.component.html',
  styleUrl: './style.component.css'
})
export class StyleComponent implements OnInit{
  @Input() bgColor = 'red';
  @Input() color = 'white';
  @Input() size = '25px';
  ngOnInit(): void {
    
  }
  changeSize(size: any) {
    this.size = size + 'px';
  }
}
