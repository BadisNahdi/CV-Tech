import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../default-image.pipe';
import { Personne } from '../../Model/Personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './embauche.component.html',
  styleUrl: './embauche.component.css'
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne[] = [];
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.personnes = this.embaucheService.getEmbauchees();
  }

}
