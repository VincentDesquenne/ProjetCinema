import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FilmService} from '../../services/film.service';
import {Router} from '@angular/router';
import {CategorieService} from '../../services/categorie.service';
import {Film} from '../../models/film';
import {Categorie} from '../../models/categorie';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent implements OnInit {

  containerStyle: any;
  ajoutCategoForm: FormGroup;

  constructor(private unCS: CategorieService, private router: Router) { }

  categoControl: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.containerStyle = 'container';
    this.ajoutCategoForm = new FormGroup({
      catego: this.categoControl,
    });
  }

  ajoutCatego(): void{

    let unCatego: Categorie;

    unCatego = new Categorie();
    unCatego.id = this.categoControl.value[0] + this.categoControl.value[1];
    unCatego.libelle = this.categoControl.value;
    this.unCS.addCategorie(unCatego).subscribe(
      reponse => {
        alert('Catégorie ajoutée');
        console.log(reponse);
        this.router.navigate(['/welcome'])
      },
      err => {
        alert('Erreur dans ajout de la categorie');
        console.log(err);
      }
    );
  }
}
