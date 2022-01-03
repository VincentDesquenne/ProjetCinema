import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Utilisateur} from '../../models/utilisateur';
import {Film} from '../../models/film';
import {FilmService} from '../../services/film.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajout-film',
  templateUrl: './ajout-film.component.html',
  styleUrls: ['./ajout-film.component.css']
})
export class AjoutFilmComponent implements OnInit {

  containerStyle: any;
  ajoutFilmForm: FormGroup;

  constructor(private unFS: FilmService, private router: Router) { }

  titreControl: FormControl = new FormControl('', Validators.required);
  dureeControl: FormControl = new FormControl('', Validators.required);
  dateSortieControl: FormControl = new FormControl('', Validators.required);
  budgetControl: FormControl = new FormControl('', Validators.required);
  recetteControl: FormControl = new FormControl('', Validators.required);
  noteControl: FormControl = new FormControl('', Validators.required);
  categControl: FormControl = new FormControl('', Validators.required);
  imgControl: FormControl = new FormControl('', Validators.required);


  ngOnInit(): void {
    this.containerStyle = 'container';
    this.ajoutFilmForm = new FormGroup({
      titre: this.titreControl,
      duree: this.dureeControl,
      dateSortie: this.dateSortieControl,
      budget: this.budgetControl,
      recette: this.recetteControl,
      note: this.noteControl,
      categ: this.categControl,
      img: this.imgControl,
    });
  }

  ajoutFilm(): void{

    let unFilm: Film;

    unFilm = new Film();
    unFilm.titre = this.titreControl.value;
    unFilm.duree = this.dureeControl.value;
    unFilm.dateSortie = this.dateSortieControl.value;
    unFilm.budget = this.budgetControl.value;
    unFilm.montantRecette = this.recetteControl.value;
    unFilm.note = this.noteControl.value;

    this.unFS.addFilm(unFilm).subscribe(
      reponse => {
        alert('Ajout Film réussi');
      },
      err => {
        alert('Erreur dans ajout du film');
      }
    );
  }
}
