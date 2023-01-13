import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let myHeaders = new HttpHeaders();
    let token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);
   
    myHeaders.append('Content-Type', 'multipart/form-data')


    // body.forEach((element: any) => {
    //   console.log(element);
    // });
    return this.http.post<any>(

      
      // 'https://fakestoreapi.com/products'
      'https://ecom.hoolioapps.com/api/products'
      ,
      body,{ headers: myHeaders},
      // { name: formdata.get('name'), description: formdata.get('description'), price: formdata.get('price') }
    );
  }

  Editproduct(body: any): Observable<any> {
    return this.http.patch<any>(
      'https://ecom.hoolioapps.com/api/products/2'
      ,
      body,
    );
  }
  
  Displayproduct(): Observable<any> {
    return this.http.get<any>(
      // 'https://fakestoreapi.com/products'
      'https://ecom.hoolioapps.com/api/products'
    );
  }

  getSingleProduct(id:any): Observable<any>{
    return this.http.delete<any>(
      'https://ecom.hoolioapps.com/api/product'
    )
    
}

// Deleteproduct(id:any): Observable<any>{
//   return this.http.delete<any>(
//     'https://ecom.hoolioapps.com/api/product/10'
//   )
// }


}
