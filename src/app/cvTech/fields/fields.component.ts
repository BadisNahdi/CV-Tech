import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fields',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.css'
})
export class FieldsComponent implements OnInit {

  @Output() sendPersonne = new EventEmitter<Personne>();
  @Input() 
  personne!: Personne;
  ngOnInit(): void {
  }
  sendevent() {
    this.sendPersonne.emit(this.personne);
  }

}

