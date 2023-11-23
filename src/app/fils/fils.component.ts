import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent {
  @Input() filsproperty:any;
  @Output() sendRequestToData = new EventEmitter<any>();
  sendevent(){
    this.sendRequestToData.emit("Hey papa");
  }
}
