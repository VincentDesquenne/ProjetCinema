import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FilmService} from '../../services/film.service';
import {Router} from '@angular/router';
import {ActeurService} from '../../services/acteur.service';
import {Film} from '../../models/film';
import {Acteur} from '../../models/acteur';

@Component({
  selector: 'app-ajout-acteur',
  templateUrl: './ajout-acteur.component.html',
  styleUrls: ['./ajout-acteur.component.css']
})
export class AjoutActeurComponent implements OnInit {

  containerStyle: any;
  ajoutActeurForm: FormGroup;

  constructor(private unAS: ActeurService, private router: Router) { }

  prenomControl: FormControl = new FormControl('', Validators.required);
  nomControl: FormControl = new FormControl('', Validators.required);
  naissanceControl: FormControl = new FormControl('', Validators.required);
  decesControl: FormControl = new FormControl('', Validators.required);
  imgControl: FormControl = new FormControl('', Validators.required);
  filmControl: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.containerStyle = 'container';
    this.ajoutActeurForm = new FormGroup({
        prenom: this.prenomControl,
        nom: this.nomControl,
        naissance: this.naissanceControl,
        deces: this.decesControl,
        img: this.imgControl,
        titre: this.filmControl,
      }
    );
  }

  ajoutActeur(): void{

    let unActeur: Acteur;

    unActeur = new Acteur();
    unActeur.prenom = this.prenomControl.value;
    unActeur.nom = this.nomControl.value;
    unActeur.naissance = this.naissanceControl.value;
    unActeur.deces = this.decesControl.value;
    unActeur.image = this.imgControl.value;

    this.unAS.addActeur(unActeur).subscribe(
      reponse => {
        alert('Ajout Acteur réussi');
      },
      err => {
        alert('Erreur dans ajout du acteur');
      }
    );
  }
}
