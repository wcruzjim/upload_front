import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { urlBase } from '../../../app/config/globals';
import { map, tap } from 'rxjs/operators';
import { Response } from '../../models/Response';
import { DashboardMetabase} from '../../../app/interfaces/dashboard/Metabase';
import { DashboardQuickSight} from '../../../app/interfaces/dashboard/QuickSight';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class HelperService {
  constructor(public http: HttpClient,
                        private readonly domSanitizer: DomSanitizer,
                      ) { }
  /**
   * Accesso a la aplicacion Metodo http tipo post
   * @param url 
   * @param data 
   */
  login(url, data, time=150000) {
    return this.http.post<Response>(urlBase + url, data, {withCredentials: true}).toPromise();
  }
    /**
   * Accesso a la aplicacion Metodo http tipo get de Url Externas
   * @param url 
   * @param data 
   */
  async loginExternal(url) {
    return  this.http.get<Response>(urlBase + url).toPromise();
  }

  async loginMetabase(url,data) {
    let  httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })};
    return this.http.post<Response>(url, data, httpOptions).toPromise();
  }

  /**
   * Metodo para consumir pettiones de tipo post
   * @param url 
   * @param data 
   */
  async post(url, data, urlbase = urlBase, contentType= "json") {

    let  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
        withCredentials: true
      };
    let response;
    if(contentType != "json"){
      response = await this.http.post(urlbase + url, data,{observe: 'response', responseType: 'blob'}).toPromise();
    }else{
      response = await this.http.post<Response>(urlbase + url, data,httpOptions).toPromise();
    }
    return response; 
  }
  
  async post_arraybuffer(url, data, urlbase = urlBase) {

    let response = await this.http.post(urlbase + url, data, {responseType: 'arraybuffer', withCredentials: true}).toPromise();
    return response; 
  }
  /**
   * Metodo para consumir pettiones de tipo post
   * @param url 
   * @param data 
   */
  async posts(url, data, urlbase = urlBase) {
    let  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      }),  withCredentials: true};
    let response = await this.http.post<Response>(urlbase + url, data,httpOptions).toPromise().then((res) => {
      return res;
    })
    return response as Response; 
  } 
  /**
   * Metodo para consumir pettiones de tipo put
   * @param url 
   * @param data 
   */  
  async put(url, data,urlbase = urlBase) {
    let  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }), 
      withCredentials: true};
    let response = await this.http.put<Response>(urlbase + url, data,httpOptions).toPromise();
    return response;
  } 
  /**
   * Metodo para consumir pettiones de tipo get
   * @param url 
   * @param data 
   */
  async gets(url, data={},urlbase = urlBase) {
    let  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let params;
    if (Object.keys(data).length != 0) {
      params = this.jsonToQueryString(data);
    }else{
      params = ''
    }

    let response  = await this.http.get<Response>(urlbase + url+ params,httpOptions).toPromise().then((result) => {
      return result;
    })
    return response as Response;
  }

   async get(url, data={},urlbase = urlBase) {
    let  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }), 
      withCredentials: true
    };
    let params;
    if (Object.keys(data).length != 0) {
      params = this.jsonToQueryString(data);
    }else{
      params = ''
    }

    let response  = await this.http.get<Response>(urlbase + url+ params, httpOptions).toPromise();
    return response;
  }

   async getMetabase(url, data={},urlbase = urlBase) {
    let  httpOptions = {
      headers: new HttpHeaders({
        'X-Metabase-Session': JSON.parse(localStorage.getItem('idsessionmetabase')),
        'Content-Type': 'application/json'

      })};
    let params;
    if (Object.keys(data).length != 0) {
      params = this.jsonToQueryString(data);
    }else{
      params = ''
    }
    return this.http.get<DashboardMetabase[]>(urlbase + url+ params,httpOptions).toPromise();
  }
  /**
   * Metodo para consumir pettiones de tipo delete
   * @param url 
   * @param data 
   */
  async delete(url, data={}, urlbase =urlBase) {
    let params;
    if (Object.keys(data).length != 0) {
      params = this.jsonToQueryString(data);
    }else{
      params = ''
    }

    let response = await this.http.delete<Response>(urlbase + url+ params).toPromise();
    return response;
  }
  /**
   * Metodo para cambia json a string
   * @param json 
   */
  jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
  }
  /**
   * metodo post que sube archivos al servidor 
   * @param url 
   * @param data 
   */
  postUpload(url, data,  urlbase = urlBase) {
    let  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': undefined

      }),
      withCredentials: true,
      reportProgress: true,
      observe:'events'
    };
    const req = new HttpRequest('POST', urlbase + url, data, httpOptions);
    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, data)),
      tap(message => message)
    );
  }

  private showProgress(message){
    return message;
  }
  

  private getEventMessage(event, formData) {
    switch (event.type) {

      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);

      case HttpEventType.Response:
        return this.apiResponse(event);

      default:
        return `File surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(50 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }

  private apiResponse(event) {
    return event.body;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      return `An error occurred: ${error.error.message}`
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      return `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
    }
  }



  public renderImage( file_name : string, secure: boolean = true ){
    let path_url = `${urlBase}Home/render_image/${file_name}`;
    if( secure ){
      return this.domSanitizer.bypassSecurityTrustResourceUrl(path_url);
    }
    return path_url;
  }
}
