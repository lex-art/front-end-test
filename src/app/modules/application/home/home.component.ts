import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private checkAuth: AuthService, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("Bienbenido al Starter de Angular 13") 
    const { getUser } = this.checkAuth;
  }
}
