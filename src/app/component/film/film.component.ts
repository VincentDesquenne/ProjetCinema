import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Film} from '../../models/film';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @ViewChild('movieList', { static: true }) maDiv: ElementRef;

  private mesFilms : Film[];
  nbClics: number;
  transf: string;
  movieList: any;

  private filmList: Film[] = [
    {
      noFilm:1,
      titre: "Demon Slayer",
      budget: 50000,
      note: "2.75",
      duree: 120,

    },

  ];

  constructor(private routeur: Router) {
    this.transf = "translateX(0)";
    this.nbClics = 0;
  }

  ngOnInit(): void {
    this.findFilms();
    console.log(this.maDiv);
  }

  openFilm(): void{
    this.routeur.navigate(['/film/'+ this.mesFilms[0].noFilm]);
  }

  findFilms() : void {
    this.mesFilms = this.filmList;
  }

  getValeurTransf(s) : number {
    let res = "";
    let neg = false;
    for(let i=0; i<s.length; i++){
      if(!isNaN(Number(s[i]))){
        res+= s[i];
      }
      if(s[i] == "-") {
        neg = true;
      }
    }
    if(neg) return -Number(res);
    return Number(res);
  }

  clickArrow() : void {
    this.nbClics++;
    let ratio = Math.floor(window.innerWidth / 540);
    console.log(this.getValeurTransf(this.maDiv.nativeElement.style.transform));
    //TODO Changer 7 par la liste des films lorsque celle-ci sera complète
    if (7 - (4 + this.nbClics) + (4 - ratio) >= 0){
      this.transf = `translateX(${
        this.getValeurTransf(this.maDiv.nativeElement.style.transform) - 500
      }px)`;
    } else {
      this.transf = "translateX(0)";
      this.nbClics = 0;
    }
  }


 /* const arrow = document.querySelector(".arrow");
  const movieList = document.querySelector(".movie-list");

  const itemNumber = movieList.querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
  const ratio = Math.floor(window.innerWidth / 270);
  clickCounter++;
  if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
  movieList.style.transform = `translateX${
    movieList.computedStyleMap().get("transform")[0].x.value - 300(
  }px)`;
} else {
  movieList.style.transform = "translateX(0)";
  clickCounter = 0;
};*/


//TOGGLE



}
