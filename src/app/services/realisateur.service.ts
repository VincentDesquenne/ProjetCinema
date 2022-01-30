import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Realisateur} from '../models/realisateur';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Film} from '../models/film';


const ENDPOINT = environment.endpoint;


@Injectable()
export class RealisateurService {


  private realisateurUrl: string;
  private mesHeaders: HttpHeaders;

  constructor(private httpRealisateur: HttpClient) {

    const token = localStorage.getItem('token');

    this.mesHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + token);
  }

  getRealisateursListe(): Observable<any> {

    this.realisateurUrl = ENDPOINT + 'realisateur/getRealisateurs';
    return this.httpRealisateur.get(this.realisateurUrl, {headers: this.mesHeaders});

  }

  addRealisateur(unRea: Realisateur): Observable<any>{
    this.realisateurUrl = ENDPOINT + 'realisateur/ajout';
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    return this.httpRealisateur.post<Film>(this.realisateurUrl, JSON.stringify(unRea), options);
  }

// Modification d'un realisateur

// On recherche le realisateur

  getRealisateurId(id: number): Observable<Realisateur> {

    this.realisateurUrl = ENDPOINT + 'realisateur/getRealById/' + id;
    return this.httpRealisateur.get<Realisateur>(this.realisateurUrl, {headers: this.mesHeaders});

  }

// On modifie un realisateur
  updateRealisateur(unC: Realisateur): Observable<any> {
    this.realisateurUrl = ENDPOINT + 'realisateur/modification';

    return this.httpRealisateur.post(this.realisateurUrl, JSON.stringify(unC), {headers: this.mesHeaders});
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
