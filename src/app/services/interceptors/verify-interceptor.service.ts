import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../alert/alert.service';
import { AlertComponent } from '../../../app/components/alert/alert/alert.component';
import { SecurityService } from '../security/security.service';
@Injectable({
  providedIn: 'root'
})
export class VerifyInterceptorService implements HttpInterceptor {
  response;
  body;

  constructor(
    private readonly security: SecurityService,
    public alertservice: AlertService,
    public router: Router,
    public dialog: MatDialog
  ) {
    //This is intentional
  }

  intercept(req, next: HttpHandler) {
    const headers = new HttpHeaders({
      'Accept-Language': 'es'
    });
    const reqClone = req.clone({
      headers
    });
    return next.handle(reqClone).pipe(map((event) => {
      return event;
    }), catchError((error: HttpErrorResponse) => {
      if (typeof error.error == undefined || error.error.status === 2) {
        this.logoutInterceptor();
        this.router.navigate(['login']);
        var element = document.getElementsByClassName("mat-dialog-container")[0];
        var div = document.body.contains(element);
        if (div === false) {
          this.dialog.closeAll();
          this.alertservice.showAlert('Aviso', AlertComponent, 'Su sesión ha expirado', 'error');
        }
      }
      return throwError(error);
    }));
  }

  public async logoutInterceptor() {
    await this.security.logout();
    this.router.navigate(['login']);
  }
}
