import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthLoginService} from '../auth-login.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate{

  constructor(private rota: Router, private authLogin: AuthLoginService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.authLogin.isUsuarioAutenticado()) {
      return true;
    }

    this.rota.navigate(['/login']);

    return false;
  }
}

