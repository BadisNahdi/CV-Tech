import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-liste-cv',
  standalone: true,
  imports: [CommonModule, ItemCvComponent],
  templateUrl: './liste-cv.component.html',
  styleUrl: './liste-cv.component.css'
})
export class ListeCvComponent implements OnInit {
  @Input({required: true})
  personnes: Personne[] = [];
  
  @Output()
  selectedPersonne = new EventEmitter<Personne>();
  ngOnInit(): void {
  }
  selectPersonne(selectedPersonne: Personne): void {
    this.selectedPersonne.emit(
      selectedPersonne
    );
  }
}
