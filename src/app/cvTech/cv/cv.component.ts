import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { Personne } from '../../Model/Personne';
import { CvService } from '../cv.service';
import { EmbaucheComponent } from '../embauche/embauche.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, DetailCvComponent, ListeCvComponent, ItemCvComponent, EmbaucheComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {

  personnes!: Personne[];
  selectedPersonne!: any;


  constructor(
    private cvService: CvService
  ) { }
  
  
  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }
  selectPersonne(personne: any): void {
    this.selectedPersonne = personne;
  }
}
