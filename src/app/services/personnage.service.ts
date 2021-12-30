import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Personnage} from '../models/personnage';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


const ENDPOINT = environment.endpoint;


@Injectable()
export class PersonnageService {


  private personnageUrl: string;
  private mesHeaders: HttpHeaders;

  constructor(private httpPersonnage: HttpClient) {

    const token = localStorage.getItem('token');

    this.mesHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + token);
  }

  getPersonnagesListe(): Observable<any> {

    this.personnageUrl = ENDPOINT + 'personnage/getPersonnages';
    return this.httpPersonnage.get(this.personnageUrl, {headers: this.mesHeaders});

  }

  getPersonnagesFilm(id: number): Observable<any> {

    this.personnageUrl = ENDPOINT + 'personnage/getPersonnagesByFilm/' + id;
    return this.httpPersonnage.get(this.personnageUrl, {headers: this.mesHeaders});

  }

// Modification d'un personnage

// On recherche le personnage

  getPersonnageId(id: number): Observable<Personnage> {

    this.personnageUrl = ENDPOINT + 'personnage/getUnPersonnageById/' + id;
    return this.httpPersonnage.get<Personnage>(this.personnageUrl, {headers: this.mesHeaders});

  }

// On modifie un personnage
  updatePersonnage(unC: Personnage): Observable<any> {
    this.personnageUrl = ENDPOINT + 'personnage/modification';

    return this.httpPersonnage.post(this.personnageUrl, JSON.stringify(unC), {headers: this.mesHeaders});
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
