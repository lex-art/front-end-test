import { User } from './../../models/auth/user.type';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckRoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUser: User | undefined | void = this.authService.getUser();

    const canPermission =
      route.data['role'] &&
      currentUser?.role &&
      route.data['role'].some((role: string) =>
        currentUser.role.some((item: string) => item === role)
      );

    //verify role of user, You must change the logic, to the one you need
    if (canPermission) return true;
    else {
      if (currentUser?.role) {
        this.router.navigate(['/', 'not-permission']);
        return false;
      }
      this.router.navigate(['/', 'auth', 'login']);
      return false;
    }
  }
}
