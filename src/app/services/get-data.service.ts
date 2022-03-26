import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SortDirection} from '@angular/material/sort';
import { TableExample } from '../models/table';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  
  constructor(private client: HttpClient, ) { }
  //igorar el Http Interceptor
  getData(url:string){
    return this.client.get<TableExample>(url,
    { headers: { 'Anonymous': 'skip', 'hideLoader': 'true' } })
  }
}
