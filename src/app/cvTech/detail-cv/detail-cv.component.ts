import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';
import { EmbaucheService } from '../embauche.service';

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

  constructor(
    private embaucheService: EmbaucheService,
  ) { }
  ngOnInit(): void {
  }
  embaucher(): void {
    this.embaucheService.embaucher(this.personne);
  }

}
