import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';
import e from 'express';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private _errorService : ErrorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Entra al AddToken');
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == 401) {
          // Redirect to the login page or show a modal
          this._errorService.msgError(error);
          this.router.navigate(['/login']);

        }
        return throwError(() => error.message);
      })
    );
  }
}
