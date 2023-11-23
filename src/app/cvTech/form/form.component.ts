import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { FieldsComponent } from '../fields/fields.component';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, DetailCvComponent, FieldsComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  personne: Personne = new Personne();
  ngOnInit(): void {
    console.log(this.personne);
  }
  ChangeStatus(personne: Personne) {
    this.personne = personne;
    console.log(this.personne);
  }

}
