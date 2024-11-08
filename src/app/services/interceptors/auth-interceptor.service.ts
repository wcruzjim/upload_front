import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpHeaders, HttpErrorResponse, HttpXsrfTokenExtractor } from '@angular/common/http';
import { AlertService } from '../../../app/services/alert/alert.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SecurityService } from '../security/security.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take, map } from 'rxjs/operators';
import { LogoutAutomaticService } from '../logoutToken/logoutAutomatic.service';
import { TokenInterceptor } from 'app/interfaces/generic';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {
  response: Response;
  body: object;
  public cookieheaderName: string = 'XSRF-TOKEN';

  private isRefreshing = false;
  private readonly refreshTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private readonly security: SecurityService,
    public alertservice: AlertService,
    public router: Router,
    public dialog: MatDialog,
    private tokenExtractor: HttpXsrfTokenExtractor,
    private readonly logoutAutomaticService: LogoutAutomaticService
  ) {
    //This is intentional
  }

  intercept(req, next: HttpHandler): Observable<HttpEvent<Object>> {
    if (req.url.indexOf('/seguridad/login') !== -1) {
      return next.handle(req)
    }

    if (req.url.indexOf('/Home/getImageRender') !== -1) {
      return next.handle(req)
    }

    let reqClone;
    let headers = this.setHeaderWithCsrf(req);

    reqClone = req.clone({
      headers,
      withCredentials: true,
    })

    return next.handle(reqClone).pipe(
      map((event) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse && !req.url.includes('/seguridad/login') && !req.url.includes('/seguridad/refreshToken') && error.status === 401 && !req.url.includes('Home/getImageRender')) {
          const refreshTokenResponse = this.handle401Error(req, next);
          return refreshTokenResponse
        }
        return throwError(error);
      }));
  }

  private handle401Error(request: HttpRequest<Object>, next: HttpHandler): Observable<HttpEvent<Object>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.security.refreshToken().pipe(
        switchMap((token: TokenInterceptor) => {
          if(token?.result?.length > 0 && token?.result[0].hasOwnProperty("expiracion")){
            this.logoutAutomaticService.setFunctionLogout(token.result[0]["expiracion"])
          }
          this.isRefreshing = false;
          this.refreshTokenSubject.next('');
          return next.handle(this.addTokenHeader(request, ''));
        }),
        catchError((err) => {
          this.isRefreshing = false;
          this.removeTokenFromStorage()
          this.redirectBySessionExpired();
          this.closeAllDialogs()
          this.refreshPageBySessionExpired()
          return throwError(err);
        })
      );
    }

    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );

  }

  private addTokenHeader(request: HttpRequest<Object>, token: string) {
    let headers = this.setHeaderWithCsrf(request);
    return request.clone({ headers: headers });
  }

  private setHeaderWithCsrf(request:  HttpRequest<Object>): HttpHeaders{

    let headers = new HttpHeaders({})

    let csrfToken = this.tokenExtractor.getToken() as string;
    if (csrfToken !== null && !request.headers.has(this.cookieheaderName)) {
      headers = new HttpHeaders({
        [this.cookieheaderName]: csrfToken
      })
    }  
    return headers 
  }

  private async removeTokenFromStorage() {
    localStorage.removeItem('simulation');
    localStorage.removeItem('userdata');
    localStorage.removeItem('jwtdata');
    localStorage.removeItem('ngStorage-jwt');
    localStorage.removeItem('ngStorage-userData');
    await this.security.logout();
  }

  private redirectBySessionExpired() {
    this.router.navigate(['login']);
  }

  private closeAllDialogs(): void {
    this.dialog.closeAll()
  }

  private refreshPageBySessionExpired(): void {
    if(window.location.hostname == "localhost" || window.location.hostname == '127.0.0.1' ){
      window.location.href = '/';
    }else{
      window.location.href = '/teo';
    }
  }


}
