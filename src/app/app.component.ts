import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cvTech/cv/cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { FormComponent } from './cvTech/form/form.component';
import { Personne } from './Model/Personne';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { ColorComponent } from './color/color.component';
// import { fa-regular fa-face-smile } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, CvComponent, StyleComponent, ClassComponent, FormComponent, MiniWordComponent, ColorComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  title = 'myApp';
  color = 'red';
  bgColor = 'yellow';
  show = true;
  
  ViewCv:boolean = false;
  ViewForm:boolean = false;
  rainbow:boolean = false;
  miniWord:boolean = false;
  Color:boolean = false;
  personnes: Personne[] = [
    new Personne(1, 'Barbouche', 'Sadok', 22, 15456952, 'Engineer', '../../../assets/images/rotating_card_profile3.png', 'Very good'),
    new Personne(2, 'Besbes', 'Seif', 21, 1445414,'Doctor', '../../../assets/images/rotating_card_profile3.png', 'The smart'),
    new Personne(3, 'Haji', 'Houusem', 24, 14454192,'Student', '../../../assets/images/rotating_card_profile3.png', 'LHOOSS'),
    new Personne(4, 'Nahdi', 'Badis', 21, 14454192,'Teacher', '../../../assets/images/rotating_card_profile3.png', 'coolest'),
    new Personne(5, 'Saadani', 'Abdelhkalek', 23, 14454847,'Pilot', '../../../assets/images/rotating_card_profile3.png', 'King Gala'),
  ];

  @Output()
  addPersonne!:EventEmitter<Personne>;
  ngOnInit(): void {
  }
  Form(){
    this.ViewCv = false;
    this.rainbow = false;
    this.miniWord = false;
    this.Color = false;
    this.ViewForm = true;
  }
  ViewCvs() {
    this.ViewForm = false;
    this.rainbow = false;
    this.miniWord = false;
    this.Color = false;
    this.ViewCv = true;
  }

  Rainbowfunc() {
    this.ViewForm = false;
    this.ViewCv = false;
    this.miniWord = false;
    this.Color = false;
    this.rainbow = true;
  }

  miniWordfunc() {
    this.ViewForm = false;
    this.ViewCv = false;
    this.rainbow = false;
    this.Color = false;
    this.miniWord = true;
  }

  changeColor() {
    this.ViewForm = false;
    this.ViewCv = false;
    this.rainbow = false;
    this.miniWord = false;
    this.Color = true;
  }

  addCv(personne: Personne) {
    this.personnes.push(personne);
  }

  ChangeStatus() {
    this.show = !this.show;
  }
  
}
