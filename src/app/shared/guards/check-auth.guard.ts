import { AuthService } from '../../services/auth.service';
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
  constructor(private router: Router, private checkAuth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLogued: boolean = this.checkAuth.isAuthenticated();
    if (isLogued) return isLogued;
    else {
      window.localStorage.clear();
      this.router.navigateByUrl('/auth/login');
      return isLogued;
    }
  }
}
