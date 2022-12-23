import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface user {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(body: any): Observable<any> {
    return this.http.post<any>(
      'https://ecom.hoolioapps.com/api/login'
      ,
      body
    );
  }

  sign(body: any): Observable<any> {
    return this.http.post('https://ecom.hoolioapps.com/api/register', body);
  }


  resetpassword(body: any): Observable<any> {
    return this.http.post('https://ecom.hoolioapps.com/api/forgotpassword', body);
  }
}
