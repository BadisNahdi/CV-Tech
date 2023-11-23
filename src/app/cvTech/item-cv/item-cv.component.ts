import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-item-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-cv.component.html',
  styleUrl: './item-cv.component.css'
})
export class ItemCvComponent implements OnInit {
  @Input() personne!: Personne;
  @Output() selectedPersonne =new EventEmitter();
  ngOnInit(): void {
    console.log(this.personne);
  }
  selectPersonne(): void {
    this.selectedPersonne.emit(
      this.personne
    )
  }
}
