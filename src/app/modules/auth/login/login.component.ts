import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup ;
  constructor(
    private userService: AuthService,
    private router: Router,
    private builderform: FormBuilder 
    /* private form: FormBuilder */
  ) {
    this.formLogin = this.builderform.group({
      email: [
        '',
        [
          Validators.required,
           Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
    })
  }
 /*
 se inicializa el formulario  
 formLogin = this.form.group({
    email: undefined,
    password: undefined,
  }); */
  

  ngOnInit() {
    if (this.userService.isAuthenticated()) this.router.navigateByUrl('');
    
  }

  printmsj(value:any) {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
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
