import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import Constants from 'src/app/utilities/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private userService: AuthService,
    private router: Router,
    private builderform: FormBuilder /* private form: FormBuilder */,
    private snackBarSrvc: SnackBarService
  ) {
    this.formLogin = this.builderform.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    if (this.userService.isAuthenticated()) this.router.navigateByUrl('');
  }

  onLogin(): void {
    const user = this.formLogin.value;
    if (this.formLogin.valid)
      this.userService.login(user).subscribe({
        next: (response) => {
          if (response.succes) {
            window.localStorage.setItem('token', response.accessToken);
            this.router.navigateByUrl('');
          }
        },
        error: (err: HttpErrorResponse) => {
          switch (err.error.message) {
            case Constants.ERROR.PASSWORD_INVALID:
              this.snackBarSrvc.openSnackbar(
                'Constraseña invalida',
                'snackbar-danger'
              );
              break;
            case Constants.ERROR.USER_NOT_FOUD:
              this.snackBarSrvc.openSnackbar(
                'Correo incorrecto',
                'snackbar-danger'
              );
              break;
            default:
              this.snackBarSrvc.openSnackbar(
                'Ha ocurrido un error, intente más tarde',
                'snackbar-danger'
              );
              break;
          }
        },
      });
  }
}
