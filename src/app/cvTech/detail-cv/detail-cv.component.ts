import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css'
})
export class DetailCvComponent implements OnInit {
  @Input()
  personne!: Personne;


  ngOnInit(): void {
    if (!this.personne) {
      this.personne = new Personne(0, '', '', 0, 0, '', '');
    }
  }

}
