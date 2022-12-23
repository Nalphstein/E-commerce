import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface user {
  name: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient ) { }



  Createproduct(body: any): Observable<any> {

    const formData = new FormData();
    // formData.append('image', body.file, body.file.name);
    return this.http.post<any>(
      'https://ecom.hoolioapps.com/api/products'
      ,
      body,
    );
  }
  Editproduct(body: any): Observable<any> {

    return this.http.post<any>(
      'https://ecom.hoolioapps.com/api/products/'
      ,
      body,
    );
  }
  Displayproduct(): Observable<any> {


    return this.http.get<any>(
      'https://ecom.hoolioapps.com/api/products'
    );
  }
}
