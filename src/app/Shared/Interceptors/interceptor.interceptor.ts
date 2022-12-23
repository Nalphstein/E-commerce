import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthenticationsService } from '../services/authentications.service';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(
    private _local: AuthenticationsService,
    private _router: Router
  ) {}


  

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const API_key = this._local.readFromLocalStorage('token');

    if (API_key) {
      return next.handle(request.clone({ 
        setHeaders: { 
          Accept: 'application/json',
        Authorization: `Bearer ${API_key}`, 
      },
    }));
   } 
   if (window.navigator.onLine) {
    return next.handle(request).pipe(
      tap((data: any) => {}),

      catchError((error: HttpErrorResponse) => {
        if(request.method == 'GET'){
          if (error.status == 401) {
            this._router.navigate(['']);
          }
        }
        else  {
          alert('Something went wrong');
        }
      
        return throwError(error);
       }
       ))
      //   else {
      //     return throwError('No token found' + console.error('No token found'));
    
    //  return next.handle(request);
   }
    return throwError('you are offline');

    // return next.handle(request.clone({ setHeaders: { API_key, Accept:'application/json' } }));
  }
}
