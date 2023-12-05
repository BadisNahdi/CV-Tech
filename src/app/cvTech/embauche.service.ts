import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes: Personne[] = [];
  constructor() { }
  getEmbauchees(): Personne[] {
    return this.personnes;
  }
  embaucher(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      this.personnes.push(personne);
    } else {
      alert(`${personne.name} ${personne.firstname} est déjà sélectionnée`);
    }
  }
  debaucher(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      alert(`${personne.name} ${personne.firstname} n'est pas sélectionnée`);
    } else {
      this.personnes.splice(index, 1);
    }
  }
}
