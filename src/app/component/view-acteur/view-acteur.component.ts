import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../services/film.service';
import {ActeurService} from '../../services/acteur.service';
import {RealisateurService} from '../../services/realisateur.service';
import {CategorieService} from '../../services/categorie.service';
import {PersonnageService} from '../../services/personnage.service';
import {Film} from '../../models/film';
import {Acteur} from '../../models/acteur';
import {Personnage} from '../../models/personnage';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-acteur',
  templateUrl: './view-acteur.component.html',
  styleUrls: ['./view-acteur.component.css']
})
export class ViewActeurComponent implements OnInit {

  id: number;
  acteur: Acteur;
  films: Film[];
  personnages: Personnage[];
  filmPers: Map<Film, Personnage> = new Map<Film, Personnage>();
  admin: boolean;

  constructor(private route: ActivatedRoute, private unRouteur: Router, private filmService: FilmService, private acteurService: ActeurService, private realisateurService: RealisateurService,
              private categorieService: CategorieService, private personnageService: PersonnageService, private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('noAct');
    this.admin = localStorage.getItem("role") == "admin" ? true : false;
    this.findActeur(this.id);
  }

  findActeur(id): void {
    this.acteurService.getActeurId(id).subscribe(
      (acteur) => {
        this.acteur = acteur;
        this.filmService.getFilmsActeur(acteur.id).subscribe(
          (films) => {
            this.films = films;
            /*this.films.sort(function compare(a, b) {
              if (a.id < b.id) {
                return -1;
              } else if (a.id === b.id) {
                return 0;
              }
              return 1;
            });*/
          }
        );
        this.personnageService.getPersonnagesActeur(acteur.id).subscribe(
          (personnages) => {
            this.personnages = personnages;

          }
        );
      }
    );
  }

  deleteActeur(id: number): void {
    this.acteurService.deleteActeur(id).subscribe( reponse => {
        alert("L'acteur a été supprimé")
        this.unRouteur.navigate(['/acteurs'])
      }
    )

  }

  listFilms() {
    for (let i = 0; i < this.films.length; i++) {
      for (let j = 0; j < this.personnages.length; j++) {
        if(this.personnages[j].noFilm == this.films[i].id){
          this.filmPers.set(this.films[i], this.personnages[j]);
        }
      }
    }
    let res = ' ';
    console.log(this.filmPers)
    for (let [key, value] of this.filmPers) {
      res = res + key.titre + " (" + value.nomPers + "), ";
    }
    return res;
  }

  buildImg(acteur: Acteur) {
    let res = 'data:image/png;base64, ' + acteur.image;
    let base64img = this.domSanitizer.bypassSecurityTrustUrl(res);
    return base64img;
  }


}
