import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public urlApi = environment.apiUrl;
  constructor(private client: HttpClient) { }
  
    get(endPoint: string, params?: {[key:string] : any}) {
      return this.client.get(`${this.urlApi}${endPoint}`, {
        params,
      });
    }

    post(endPoint: string, body?: {[key:string] : any}, params?: {[key:string] : any}) {
      return this.client.post(`${this.urlApi}/${endPoint}`, body, {  params });
    }
}
