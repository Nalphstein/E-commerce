import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationsService {


  constructor() { }

saveToLocalStorage(key: string, val: any) {
  localStorage.setItem(key, val);
}

readFromLocalStorage(key:string){
  return localStorage.getItem(key)
}

removeFromLocalStorage(key:string){
  localStorage.removeItem(key)
}

clearLocalStorage(){
  localStorage.clear()
}
}
