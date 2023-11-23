import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
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
