import {Component, Inject, OnInit} from '@angular/core';
import {Film} from '../../models/film';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FilmComponent} from '../film/film.component';

@Component({
  selector: 'app-view-film',
  templateUrl: './view-film.component.html',
  styleUrls: ['./view-film.component.css']
})
export class ViewFilmComponent implements OnInit {

  id:number;
  film: Film;
  private paramMap: ParamMap;
  styles = {fontSize: '36px'};

  private filmList: Film[] = [
    {
      noFilm:1,
      titre: "Demon Slayer",
      budget: 50000,
      note: "2.75",
      duree: 120,

    },

  ];

  constructor(private route: ActivatedRoute, private unRouteur: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('noFilm');
    this.findFilm(this.id );
  }

  findFilm(id): void {
    this.film = this.filmList.find(film => film.noFilm == id);
  }

}
