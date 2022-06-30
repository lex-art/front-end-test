import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private checkAuth: AuthService, private title: Title, ) {}

  ngOnInit(): void {
    this.title.setTitle("Bienbenido al Starter de Angular 13") 
    this.checkAuth.getExapmle().subscribe({
      next: (data) => {
        console.log('====================================');
        console.log({data});
        console.log('====================================');
      },
      error: (error: HttpErrorResponse)=>{
        console.log('====================================');
        console.log({error});
        console.log('====================================');
      }
    })
  }
}
