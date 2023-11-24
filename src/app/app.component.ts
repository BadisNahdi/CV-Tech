import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cvTech/cv/cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { FormComponent } from './cvTech/form/form.component';
import { Personne } from './Model/Personne';
import { MiniWordComponent } from './mini-word/mini-word.component';
// import { fa-regular fa-face-smile } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildAComponent, ChildBComponent, GrandChildComponent, ColorComponent, FormsModule, CvComponent, StyleComponent, ClassComponent, FormComponent, MiniWordComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  
  ViewCv:boolean = false;
  ViewForm:boolean = false;
  rainbow:boolean = false;
  miniWord:boolean = false;
  personnes: Personne[] = [
    new Personne(1, 'Nahdi', 'Badis', 21, 14454192,'Student', '../../../assets/images/rotating_card_profile3.png'),
    new Personne(2, 'Haji', 'Houusem', 21, 14454192,'Student', '../../../assets/images/rotating_card_profile3.png'),
    new Personne(3, 'Saadani', 'Abdelhkalek', 21, 14454192,'Student', ''),
  ];

  @Output()
  addPersonne!:EventEmitter<Personne>;
  ngOnInit(): void {
  }
  Form(){
    this.ViewCv = false;
    this.rainbow = false;
    this.miniWord = false;
    this.ViewForm = true;
  }
  ViewCvs() {
    this.ViewForm = false;
    this.rainbow = false;
    this.miniWord = false;
    this.ViewCv = true;
  }

  Rainbowfunc() {
    this.ViewForm = false;
    this.ViewCv = false;
    this.miniWord = false;
    this.rainbow = true;
  }

  miniWordfunc() {
    this.ViewForm = false;
    this.ViewCv = false;
    this.rainbow = false;
    this.miniWord = true;
  }

  addCv(personne: Personne) {
    this.personnes.push(personne);
  }

  
}
