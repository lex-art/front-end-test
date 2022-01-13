import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService, User } from '../models/auth/user.type';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public urlApi = environment.apiUrl;
  constructor(private client: HttpClient, private router: Router) {}

  login(body?: any, params?: { [key: string]: any }): Observable<UserService> {
    return this.client.post<UserService>(`${this.urlApi}/auth/login`, body, {
      params,
    });
  }

  logout() {
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  isAuthenticated() {
    const helper: JwtHelperService = new JwtHelperService();
    const userToken: string | null = window.localStorage.getItem('token');
    if (typeof userToken === 'string') return helper.isTokenExpired(userToken, 3600);
    else return false; 
 
  }
  
  getUser(): User | undefined | void {
    const helper: JwtHelperService = new JwtHelperService();
    const userToken: string | null = window.localStorage.getItem('token');
    if (typeof userToken === 'string') return helper.decodeToken(userToken);
    else this.logout();
  }
}
