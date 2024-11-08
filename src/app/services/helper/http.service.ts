import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { urlBase } from '../../config/globals';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(public readonly http: HttpClient, private readonly route: Router) { }

  post(url: string, data: {}, urlbase = urlBase) {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};

    return this.http.post(urlbase + url, data, httpOptions)
    .pipe(
      catchError(err => {
        this.sesionClosed(err);
        return err;
      })
    )
  }

  get(url: string, data: {}, urlbase = urlBase) {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};

    let params: string;

    if (Object.keys(data).length != 0) {
      params = this.jsonToQueryString(data);
    } else {
      params = ''
    }

    return this.http.get(urlbase + url + params, httpOptions)
    .pipe(
      catchError(err => {
        this.sesionClosed(err);
        return err;
      })
    )
  }

  jsonToQueryString(json: {}) {
    return '?' +
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
  }

  sesionClosed(error: HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        this.clearLocalStorage();
        this.route.navigate(['login']);
      }
    }
  }

  private clearLocalStorage() {
    localStorage.removeItem('userdata');
    localStorage.removeItem('jwtdata');
    localStorage.removeItem('ngStorage-jwt');
    localStorage.removeItem('ngStorage-userData');
    localStorage.removeItem('simulation');
  }
}
