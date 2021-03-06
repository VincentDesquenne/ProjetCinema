import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from '../models/film';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Acteur} from '../models/acteur';


const ENDPOINT = environment.endpoint;


@Injectable()
export class FilmService {


  private filmUrl: string;
  private mesHeaders: HttpHeaders;

  constructor(private httpFilm: HttpClient) {

    const token = localStorage.getItem('token');

    this.mesHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + token);
  }

  addFilm(unFilm: Film): Observable<any>{
    this.filmUrl = ENDPOINT + 'film/ajout';
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    return this.httpFilm.post<Film>(this.filmUrl, JSON.stringify(unFilm), options);
  }

  getFilmsActeur(id: number): Observable<any> {

    this.filmUrl = ENDPOINT + 'film/getFilmsByActeur/' + id;
    return this.httpFilm.get(this.filmUrl, {headers: this.mesHeaders});

  }

  getFilmsListe(): Observable<any> {

    this.filmUrl = ENDPOINT + 'film/getFilms';
    return this.httpFilm.get(this.filmUrl, {headers: this.mesHeaders});

  }

// Modification d'un film

// On recherche le film

  getFilmId(id: number): Observable<Film> {

    this.filmUrl = ENDPOINT + 'film/getUnFilmById/' + id;
    return this.httpFilm.get<Film>(this.filmUrl, {headers: this.mesHeaders});

  }

// On modifie un film
  updateFilm(unC: Film): Observable<any> {
    this.filmUrl = ENDPOINT + 'film/modification';

    return this.httpFilm.post(this.filmUrl, JSON.stringify(unC), {headers: this.mesHeaders});
  }

  // On modifie un film
  deleteFilm(id: number): Observable<any> {
    this.filmUrl = ENDPOINT + 'film/delete/' + id ;

    return this.httpFilm.delete<Film>(this.filmUrl, {headers: this.mesHeaders});
  }


  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(error.message || error);
  }


}
