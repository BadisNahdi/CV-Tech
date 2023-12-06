import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  
  color: string = 'red'; 
  defaultcolor='red'
  constructor(
    private router: Router
  ) {}
  resetColor() {
    this.color = this.defaultcolor;
  }
  ngOnInit(): void {
  }
  goToCv() {
    console.log('go to cv');
    this.router.navigate(['/cv']);
  }
}