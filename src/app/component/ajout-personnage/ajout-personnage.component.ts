import { Component, OnInit } from '@angular/core';
import {Personnage} from '../../models/personnage';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Film} from '../../models/film';
import {PersonnageService} from '../../services/personnage.service';
import {Categorie} from '../../models/categorie';
import {FilmService} from '../../services/film.service';
import {Acteur} from '../../models/acteur';
import {ActeurService} from '../../services/acteur.service';

@Component({
  selector: 'app-ajout-personnage',
  templateUrl: './ajout-personnage.component.html',
  styleUrls: ['./ajout-personnage.component.css']
})
export class AjoutPersonnageComponent implements OnInit {

  containerStyle: any;
  ajoutPersoForm: FormGroup;
  filmTable: Film[];
  acteurTable: Acteur[];

  constructor(private unPS: PersonnageService, private unFS: FilmService, private unAS: ActeurService, private router: Router) { }

  filmControl: FormControl = new FormControl('', Validators.required);
  persoControl: FormControl = new FormControl('', Validators.required);
  acteurControl: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.containerStyle = 'container';
    this.ajoutPersoForm = new FormGroup({
      film: this.filmControl,
      perso: this.persoControl,
      acteur: this.acteurControl,
    });
    this.listerActeur();
    this.unFS.getFilmsListe().subscribe(
      filmResponse => {
        this.filmTable = filmResponse;
        console.log('Réussi film');
      },
      error => {
        console.log('Recupération film impossible');
      }
    );
  }

  listerActeur(): void{
    this.unAS.getActeursListe().subscribe(
      acteurResponse => {
        this.acteurTable = acteurResponse;
        console.log('Réussi acteur');
      },
      error => {
        console.log('Recupération acteur impossible');
      }
    );
  }

  ajoutPerso(): void{

    let unPerso: Personnage;

    unPerso = new Personnage();
    unPerso.noFilm = this.filmControl.value;
    unPerso.nomPers = this.persoControl.value;
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
