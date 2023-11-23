import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, DetailCvComponent, ListeCvComponent, ItemCvComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne!: any;

  
  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'Nahdi', 'Badis', 21, 14454192,'Student', '../../../assets/images/rotating_card_profile3.png'),
      new Personne(2, 'Haji', 'Houusem', 21, 14454192,'Student', '../../../assets/images/rotating_card_profile3.png'),
    ];
  }
  selectPersonne(personne: any): void {
    this.selectedPersonne = personne;
  }
}
