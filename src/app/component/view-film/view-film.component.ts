import {Component, Inject, OnInit} from '@angular/core';
import {Film} from '../../models/film';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FilmComponent} from '../film/film.component';
import {FilmService} from '../../services/film.service';
import {Realisateur} from '../../models/realisateur';
import {Categorie} from '../../models/categorie';
import {RealisateurService} from '../../services/realisateur.service';
import {CategorieService} from '../../services/categorie.service';
import {Acteur} from '../../models/acteur';
import {ActeurService} from '../../services/acteur.service';
import {PersonnageService} from '../../services/personnage.service';
import {Personnage} from '../../models/personnage';
import {DomSanitizer} from '@angular/platform-browser';

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
  acteurs: Acteur[];
  desc: string;
  personnages: Personnage[];
  listacteurs : string;


  constructor(private route: ActivatedRoute, private unRouteur: Router, private filmService: FilmService, private acteurService: ActeurService, private realisateurService: RealisateurService,
              private categorieService: CategorieService, private personnageService: PersonnageService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('noFilm');
    this.findFilm(this.id);
  }

  findFilm(id): void {
    this.filmService.getFilmId(id).subscribe(
      (film) => {
        this.film = film;
        this.acteurService.getActeursFilm(film.id).subscribe(
          (acteurs) => { this.acteurs = acteurs; }
        );
        this.realisateurService.getRealisateurId(film.noRea).subscribe(
          (realisateur) => {
            this.realisateur = realisateur;
          }
        );
        this.categorieService.getCategorieId(film.codeCat).subscribe(
          (categorie) => {
            this.categorie = categorie;
          }
        )
        this.personnageService.getPersonnagesFilm(film.id).subscribe(
          (personnages) => { this.personnages = personnages; }
        );
        //this.findRealisateur(film.noRea);
        //this.findCategorie(film.codeCat);
      }
    )
  }

  listeAct(acteurs){
    let res = " ";
    acteurs.forEach(acteur => res = res + acteur.prenom + " " + acteur.nom + ", ");
    return res;
  }

  listePers(personnages){
    let res = " ";
    personnages.forEach(personnage => res = res + personnage.nomPers + ", ");
    return res;
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

  buildImg(film: Film) {
    let res = 'data:image/png;base64, ' + film.image;
    let base64img = this.domSanitizer.bypassSecurityTrustUrl(res);
    return base64img;
  }

}
