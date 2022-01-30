import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Film} from '../../models/film';
import {FilmService} from '../../services/film.service';
import {Router} from '@angular/router';
import {Categorie} from '../../models/categorie';
import {CategorieService} from '../../services/categorie.service';
import {RealisateurService} from '../../services/realisateur.service';
import {Realisateur} from '../../models/realisateur';


@Component({
  selector: 'app-ajout-film',
  templateUrl: './ajout-film.component.html',
  styleUrls: ['./ajout-film.component.css']
})
export class AjoutFilmComponent implements OnInit {

  containerStyle: any;
  ajoutFilmForm: FormGroup;
  dataImage: string |ArrayBuffer;
  categorieTable: Categorie[];
  realisateurTable: Realisateur[];

  constructor(private unFS: FilmService, private unRS: RealisateurService, private unCS: CategorieService, private router: Router) { }

  titreControl: FormControl = new FormControl('', Validators.required);
  dureeControl: FormControl = new FormControl('', Validators.required);
  dateSortieControl: FormControl = new FormControl('', Validators.required);
  budgetControl: FormControl = new FormControl('', Validators.required);
  recetteControl: FormControl = new FormControl('', Validators.required);
  noteControl: FormControl = new FormControl('', Validators.required);
  categControl: FormControl = new FormControl('', Validators.required);
  imgControl: FormControl = new FormControl('', Validators.required);
  reaControl: FormControl = new FormControl('', Validators.required);
  descriptionControl: FormControl = new FormControl('', Validators.required);


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
      rea: this.reaControl,
      description: this.descriptionControl,
    });
    this.listerRealisateur();
    this.unCS.getCategoriesListe().subscribe(
      categorieResponse => {
        this.categorieTable = categorieResponse;
        console.log('Réussi');
      },
      error => {
        console.log('Recupération categorie impossible');
      }
    );
  }

  listerRealisateur(): void{
    this.unRS.getRealisateursListe().subscribe(
      realisateurResponse => {
        this.realisateurTable = realisateurResponse;
        console.log('Réussi realisateur');
      },
      error => {
        console.log('Recupération realisateur impossible');
      }
    );
  }

  ajoutFilm(): void{

    let unFilm: Film;

    unFilm = new Film();
    unFilm.titre = this.titreControl.value;
    unFilm.duree = this.dureeControl.value;
    unFilm.dateSortie = this.dateSortieControl.value;
    unFilm.budget = this.budgetControl.value;
    unFilm.recette = this.recetteControl.value;
    unFilm.note = this.noteControl.value;
    unFilm.image = this.dataImage;
    unFilm.noRea = this.reaControl.value;
    unFilm.description = this.descriptionControl.value;
    unFilm.codeCat = this.categControl.value;
    console.log(unFilm);
    this.unFS.addFilm(unFilm).subscribe(
      reponse => {
        alert('Ajout Film réussi');
        console.log('Réussi');
      },
      err => {
        alert('Erreur dans ajout du film');
        console.log('Echec');
      }
    );
  }

  filetoBase64(event) {
    const file = event.target.files[0];
    const type = file.type;
    const reader = new FileReader();
    console.log(reader);
    reader.readAsDataURL(file);
    reader.onload = () => {
      if( type == 'image/jpeg'){
        this.dataImage = reader.result.slice(23);
        console.log(reader.result.slice(23));
      }else{
        this.dataImage = reader.result.slice(22);
        console.log(reader.result.slice(22));
      }
    };
  }
}
