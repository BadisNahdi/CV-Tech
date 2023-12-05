// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { FilsComponent } from '../fils/fils.component';

// @Component({
//   selector: 'app-color',
//   standalone: true,
//   imports: [CommonModule, FormsModule, FilsComponent],
//   templateUrl: './color.component.html',
//   styleUrl: './color.component.css'
// })
// export class ColorComponent {
//   color = 'red';
//   changeColor(input: any) {
//     console.log(input.value);
//     this.color = input.value;
//     input.value = "";
//   }
//   processReq(message: any) {
//     alert(message);
//   }
// }


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  resetColor() {
    this.color = this.defaultcolor; // Set to default color
  }
  ngOnInit(): void {
  }
}