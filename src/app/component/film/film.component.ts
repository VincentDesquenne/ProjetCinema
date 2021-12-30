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

  public mesFilms : Film[];
  nbClics: number;
  transf: string;
  movieList: any;


  constructor(private filmService: FilmService, private routeur: Router) {
    this.transf = "translateX(0)";
    this.nbClics = 0;
  }

  ngOnInit(): void {
    this.findFilms();
    //console.log(this.maDiv);
  }

  openFilm(film): void{
    this.routeur.navigate(['/film/'+ film.id]);
  }

  findFilms() : void {
    this.filmService.getFilmsListe().subscribe(
      (films)  => {this.mesFilms = films ;}
    )
  }

  longmax(description) {
    if(description.length > 75){
      return description.substring(0, 75) + "...";
    } else {
      return description;
    }
  }

  getNote(film) : void {
    return film.note;
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
    if (this.mesFilms.length - (4 + this.nbClics) + (4 - ratio) >= 0){
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
