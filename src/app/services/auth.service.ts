import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService, User,UserForgotPassword, SimpleResponse } from '../models/auth/user.type';
import { JwtHelperService } from '@auth0/angular-jwt';
import constants from '../utilities/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public urlApi = environment.apiUrl;
  constructor(private client: HttpClient, private router: Router) {}

  login(body?: any, params?: { [key: string]: any }): Observable<UserService> {
    return this.client.post<UserService>(`${this.urlApi}/auth/login`, body, params);
  }

  forgotPassword(body?: any, params?: { [key: string]: any }): Observable<UserForgotPassword>{
    return this.client.put<UserForgotPassword>(`${this.urlApi}/auth/forgot-password`, body, params);
  }
  resetPassword(body?: any, params?: { [key: string]: any }):Observable<SimpleResponse>{
    return this.client.put<SimpleResponse>(`${this.urlApi}/auth/reset-password`, body, params );
  }
  logout() {
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  isAuthenticated(): boolean {
    const helper: JwtHelperService = new JwtHelperService();
    const userToken: string | null = window.localStorage.getItem('token');
    if (typeof userToken === 'string') {
      const isExpired = helper.isTokenExpired(userToken);
      if (!isExpired) {
        if (this.tokenVerifyRefresh(helper.decodeToken(userToken).iat)) {          
          this.refreshToken();
        }   
        return !isExpired;
      } else return false;
    }
    return false;
  }

  tokenVerifyRefresh(iatToken: number){
    const now = new Date();
    let expiresOn= (iatToken + constants.COMMON.FOR_REFRESH_TOKEN * 60) * 1000;
    return (expiresOn < now.getTime())
  }
  
  refreshToken() {
    this.client
      .get<UserService>(`${this.urlApi}/auth/refresh-token`)
      .subscribe({
        next: (response) => {
          if (response.succes) {
            window.localStorage.setItem('token', response.accessToken);
          } else {
            window.localStorage.clear();
            this.router.navigateByUrl('');
          }
        },
        error: () => {
          window.localStorage.clear();
          this.router.navigateByUrl('');
        },
      });
  }

  getUser(): User | undefined | void {
    const helper: JwtHelperService = new JwtHelperService();
    const userToken: string | null = window.localStorage.getItem('token');
    if (typeof userToken === 'string') return helper.decodeToken(userToken);
    else this.logout();
  }

  getExapmle():Observable<any> {
    return this.client.get<any>(`${this.urlApi}/lists/example`);
  }
  

  
}
