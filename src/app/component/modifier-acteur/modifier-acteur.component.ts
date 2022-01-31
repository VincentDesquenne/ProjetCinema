import { Component, OnInit } from '@angular/core';
import {Acteur} from '../../models/acteur';
import {ActeurService} from '../../services/acteur.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Film} from '../../models/film';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-modifier-acteur',
  templateUrl: './modifier-acteur.component.html',
  styleUrls: ['./modifier-acteur.component.css']
})
export class ModifierActeurComponent implements OnInit {

  containerStyle: any;
  modifActeurForm: FormGroup;
  dataImage: string |ArrayBuffer;
  acteurTable: Acteur[];

  constructor(private unAS: ActeurService, private unFS: FilmService, private router: Router) { }

  idControl: FormControl = new FormControl('', Validators.required);
  prenomControl: FormControl = new FormControl('', Validators.required);
  nomControl: FormControl = new FormControl('', Validators.required);
  naissanceControl: FormControl = new FormControl('', Validators.required);
  decesControl: FormControl = new FormControl('', Validators.required);
  imgControl: FormControl = new FormControl('', Validators.required);
  filmControl: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.containerStyle = 'container';
    this.modifActeurForm = new FormGroup({
        id: this.idControl,
        prenom: this.prenomControl,
        nom: this.nomControl,
        naissance: this.naissanceControl,
        deces: this.decesControl,
        img: this.imgControl,
        titre: this.filmControl,
      }
    );
    this.listerActeur();
  }

  modifActeur(): void{

    let unActeur: Acteur;

    unActeur = new Acteur();
    unActeur.id = this.idControl.value;
    unActeur.prenom = this.prenomControl.value;
    unActeur.nom = this.nomControl.value;
    unActeur.naissance = this.naissanceControl.value;
    unActeur.deces = this.decesControl.value;
    unActeur.image = this.dataImage;

    this.unAS.addActeur(unActeur).subscribe(
      reponse => {
        alert('Modification acteur réussi');
        this.router.navigate(['/acteurs'])
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
}
