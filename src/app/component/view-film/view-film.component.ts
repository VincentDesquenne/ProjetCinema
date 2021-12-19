import {Component, Inject, OnInit} from '@angular/core';
import {Film} from '../../models/film';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FilmComponent} from '../film/film.component';
import {FilmService} from '../../services/film.service';
import {Realisateur} from '../../models/realisateur';
import {Categorie} from '../../models/categorie';
import {RealisateurService} from '../../services/realisateur.service';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-view-film',
  templateUrl: './view-film.component.html',
  styleUrls: ['./view-film.component.css']
})
export class ViewFilmComponent implements OnInit {

  id:number;
  film: Film;
  realisateur: Realisateur;
  categorie: Categorie;
  private paramMap: ParamMap;
  styles = {fontSize: '36px'};



  constructor(private route: ActivatedRoute, private unRouteur: Router, private filmService: FilmService, private realisateurService: RealisateurService,
              private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('noFilm');
    this.findFilm(this.id );
  }

  findFilm(id): void {
    this.filmService.getFilmId(id).subscribe(
      (film) => {
        this.film = film;
        //this.findRealisateur(film.noRea);
        //this.findCategorie(film.codeCat);
      }
    )
  }

  findRealisateur(id): void {
    this.realisateurService.getRealisateurId(id).subscribe(
      (realisateur) => {
        this.realisateur = realisateur;
      }
    )
  }

  findCategorie(id): void {
    this.categorieService.getCategorieLibelle(id).subscribe(
      (categorie) => {
        this.categorie = categorie;
      }
    )
  }

  getNote(film) : void {
    return film.note;
  }

}
