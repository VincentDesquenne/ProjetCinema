import { Component, OnInit } from '@angular/core';
import {Personnage} from '../../models/personnage';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Film} from '../../models/film';
import {PersonnageService} from '../../services/personnage.service';

@Component({
  selector: 'app-ajout-personnage',
  templateUrl: './ajout-personnage.component.html',
  styleUrls: ['./ajout-personnage.component.css']
})
export class AjoutPersonnageComponent implements OnInit {

  containerStyle: any;
  ajoutPersoForm: FormGroup;

  constructor(private unPS: PersonnageService, private router: Router) { }

  filmControl: FormControl = new FormControl('', Validators.required);
  persoControl: FormControl = new FormControl('', Validators.required);
  imgControl: FormControl = new FormControl('', Validators.required);
  acteurControl: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.containerStyle = 'container';
    this.ajoutPersoForm = new FormGroup({
      film: this.filmControl,
      perso: this.persoControl,
      img: this.imgControl,
      acteur: this.acteurControl,
    });
  }

  ajoutPerso(): void{

    let unPerso: Personnage;

    unPerso = new Personnage();
    unPerso.noFilm = this.filmControl.value;
    unPerso.nomPers = this.persoControl.value;
    unPerso.image = this.imgControl.value;
    unPerso.noAct = this.acteurControl.value;

    this.unPS.addPersonnage(unPerso).subscribe(
      reponse => {
        alert('Ajout personnage réussi');
      },
      err => {
        alert('Erreur dans ajout du personnage');
      }
    );
  }
}
