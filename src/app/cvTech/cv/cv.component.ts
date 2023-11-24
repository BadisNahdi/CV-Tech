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
  
  selectedPersonne!: any;

  @Input()
  personnes!: Personne[];


  
  
  ngOnInit(): void {
  }
  selectPersonne(personne: any): void {
    this.selectedPersonne = personne;
  }
}
