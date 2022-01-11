import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: AuthService,
    private router: Router,
    private form: FormBuilder
  ) {}
  formLogin = this.form.group({
    email: undefined,
    password: undefined,
  });

  ngOnInit(): void {
    if (this.userService.isAuthenticated()) this.router.navigateByUrl('');
  }

  onLogin(): void {
    const user = this.formLogin.value;
    this.userService.login(user).subscribe({
      next: (response) => {
        if (response.succes) {
          window.localStorage.setItem('token', response.access_token);
          this.router.navigateByUrl('');
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
      },
    });
  }
}
