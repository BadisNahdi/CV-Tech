import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes!: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'Barbouche', 'Sadok', 22, 15456952, 'Engineer', '../../../assets/images/rotating_card_profile3.png', 'Very good'),
      new Personne(2, 'Besbes', 'Seif', 21, 1445414, 'Doctor', '../../../assets/images/rotating_card_profile3.png', 'The smart'),
      new Personne(3, 'Haji', 'Houusem', 24, 14454192, 'Student', '../../../assets/images/rotating_card_profile3.png', 'LHOOSS'),
      new Personne(4, 'Nahdi', 'Badis', 21, 14454192, 'Teacher', '../../../assets/images/rotating_card_profile3.png', 'coolest'),
      new Personne(5, 'Saadani', 'Abdelhkalek', 23, 14454847, 'Pilot', '../../../assets/images/rotating_card_profile3.png', 'King Gala'),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
