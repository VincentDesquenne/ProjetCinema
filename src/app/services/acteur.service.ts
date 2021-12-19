import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Acteur} from '../models/acteur';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


const ENDPOINT = environment.endpoint;


@Injectable()
export class ActeurService {


  private acteurUrl: string;
  private mesHeaders: HttpHeaders;

  constructor(private httpActeur: HttpClient) {

    const token = localStorage.getItem('token');

    this.mesHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + token);
  }

  getActeursListe(): Observable<any> {

    this.acteurUrl = ENDPOINT + 'acteur/getActeurs';
    return this.httpActeur.get(this.acteurUrl, {headers: this.mesHeaders});

  }

// Modification d'un acteur

// On recherche le acteur

  getActeurId(id: number): Observable<Acteur> {

    this.acteurUrl = ENDPOINT + 'acteur/getUnActeurById/' + id;
    return this.httpActeur.get<Acteur>(this.acteurUrl, {headers: this.mesHeaders});

  }

// On modifie un acteur
  updateActeur(unC: Acteur): Observable<any> {
    this.acteurUrl = ENDPOINT + 'acteur/modification';

    return this.httpActeur.post(this.acteurUrl, JSON.stringify(unC), {headers: this.mesHeaders});
  }


  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
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
