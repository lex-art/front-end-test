import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CheckAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  redirect(flag: boolean) {
    if (!flag) this.router.navigateByUrl('/auth/login');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //TODO: check jwb is valid in server
    let token_acces: string | null = window.localStorage.getItem('token');
    this.redirect(!!token_acces)
    return !!token_acces;
  }
}
