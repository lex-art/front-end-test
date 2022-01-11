import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private checkAuth: AuthService) {}

  ngOnInit(): void {
    const { getUser } = this.checkAuth;
    console.log('====================================');
    console.log('getUser', getUser());
    console.log('====================================');
  }
}
