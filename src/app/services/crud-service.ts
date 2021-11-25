import {Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LocalAuthManager} from "../shared/LocalAuthManager";
import { Params } from "@angular/router";

export abstract class CrudService <T> {
    protected constructor(protected http: HttpClient, protected resourceName: string) {
        this.fullUrl = environment.api.url + this.resourceName;
        this.fullPublicUrl = environment.api.public_url + this.resourceName;
    }

    protected fullUrl: string;
    protected fullPublicUrl: string;

    protected static buildCommonHeaders(contentType = "application/json"): HttpHeaders {
        return new HttpHeaders({
            Authorization: LocalAuthManager.getToken(),
            "Content-Type": contentType,
            "N-Login": LocalAuthManager.getCredentials().username,
            "N-Pass": LocalAuthManager.getCredentials().password,
            "N-Key": LocalAuthManager.getApiKey(),
        });
    }

    protected performGet<U>(url: string,queryParams?:Params): Observable<U> {
        const headers = CrudService.buildCommonHeaders();
        return this.http.get<U>(url, {headers, params:queryParams});
    }

    findAll(queryParams?:Params): Observable<T[]> {
        return this.performGet<T[]>(this.fullUrl, queryParams);
    }

    findById(id: number): Observable<T> {
        return this.performGet<T>(this.fullUrl + "/" + id);
    }

    delete(id: number): Observable<any> {
        const headers = CrudService.buildCommonHeaders();
        return this.http.delete<any>(this.fullUrl + "/" + id,{headers});
    }

    create(object: T): Observable<T> {
        const headers = CrudService.buildCommonHeaders();
        return this.http.post<T>(this.fullUrl, object, {headers});
    }

    update(object: T, id: number): Observable<T> {
        const headers = CrudService.buildCommonHeaders();
        console.log(this.fullUrl + "/" + id);

        return this.http.put<T>(this.fullUrl + "/" + id , object, {headers});
    }

    openErrSnack(error, customMessage = "Une erreur est survenue.") {
        console.error(error);
    }

    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('Une erreur est survenue:', error.error.message);
        } else {
          console.error(
            `Le serveur a retourné le code ${error.status}, ` +
            `avec comme contenu: ${error.error}`);
        }
        return throwError(
          'Une erreur est survenue; veuillez réessayer plus tard.');
      };
}
