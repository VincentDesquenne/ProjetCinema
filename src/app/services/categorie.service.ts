import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categorie} from '../models/categorie';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


const ENDPOINT = environment.endpoint;


@Injectable()
export class CategorieService {


  private categorieUrl: string;
  private mesHeaders: HttpHeaders;

  constructor(private httpCategorie: HttpClient) {

    const token = localStorage.getItem('token');

    this.mesHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer ' + token);
  }

  getCategoriesListe(): Observable<any> {

    this.categorieUrl = ENDPOINT + 'categorie/getCategories';
    return this.httpCategorie.get(this.categorieUrl, {headers: this.mesHeaders});

  }

// Modification d'un categorie

// On recherche le categorie

  getCategorieId(id: string): Observable<Categorie> {

    this.categorieUrl = ENDPOINT + 'categorie/getUneCategorieById/' + id;
    return this.httpCategorie.get<Categorie>(this.categorieUrl, {headers: this.mesHeaders});

  }

  getCategorieLibelle(libelle: string): Observable<Categorie> {

    this.categorieUrl = ENDPOINT + 'categorie/getUneCategorieByLibelle/' + libelle;
    return this.httpCategorie.get<Categorie>(this.categorieUrl, {headers: this.mesHeaders});

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
