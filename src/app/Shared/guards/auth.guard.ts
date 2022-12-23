import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/api/login-service/login.service';
import { AuthenticationsService } from '../services/authentications.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isadmin = true;

  constructor(
    private _router: Router,
    private _log: LoginService,
    private local: AuthenticationsService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // const isadmin = this.local.readFromLocalStorage('token');
    const user = localStorage.getItem('token');

    if (user) {
      return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
}
