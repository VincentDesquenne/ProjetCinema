import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FilmService} from '../../services/film.service';
import {Router} from '@angular/router';
import {ActeurService} from '../../services/acteur.service';
import {Film} from '../../models/film';
import {Acteur} from '../../models/acteur';
import {DomSanitizer} from '@angular/platform-browser';
import {Realisateur} from '../../models/realisateur';

@Component({
  selector: 'app-ajout-acteur',
  templateUrl: './ajout-acteur.component.html',
  styleUrls: ['./ajout-acteur.component.css']
})
export class AjoutActeurComponent implements OnInit {

  containerStyle: any;
  ajoutActeurForm: FormGroup;
  dataImage: string |ArrayBuffer;
  filmTable: Film[];

  constructor(private unAS: ActeurService, private unFS: FilmService, private router: Router) { }

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
    this.listerFilm();
  }

  ajoutActeur(): void{

    let unActeur: Acteur;

    unActeur = new Acteur();
    unActeur.prenom = this.prenomControl.value;
    unActeur.nom = this.nomControl.value;
    unActeur.naissance = this.naissanceControl.value;
    unActeur.deces = this.decesControl.value;
    unActeur.image = this.dataImage;

    this.unAS.addActeur(unActeur).subscribe(
      reponse => {
        alert('Ajout Acteur réussi');
      },
      err => {
        alert('Erreur dans ajout du acteur');
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

  listerFilm(): void{
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
}
