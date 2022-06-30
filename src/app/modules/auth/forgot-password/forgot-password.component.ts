import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import Constants from 'src/app/utilities/constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: [],
})
export class ForgotPasswordComponent implements OnInit {
  formForgotPassword: FormGroup;
  constructor(
    private userService: AuthService,
    private router: Router,
    private builderform: FormBuilder /* private form: FormBuilder */,
    private snackBarSrvc: SnackBarService
  ) {
    this.formForgotPassword = this.builderform.group({
      userEmail: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    if (this.userService.isAuthenticated()) this.router.navigateByUrl('');
  }

  onForgortPassword(): void {
    const user = this.formForgotPassword.value;
    if (this.formForgotPassword.valid)
      this.userService.forgotPassword(user).subscribe({
        next: (response) => {
          if (response.url) {
            this.snackBarSrvc.openSnackbar(
              'Revise su correo electrónico para obtener un enlace y poder restablecer su contraseña',
              'snackbar-success'
            );
            this.router.navigateByUrl('auth/login');
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log('====================================');
          console.log({err});
          console.log('====================================');
          this.router.navigateByUrl('auth/forgot-password');
          switch (err.error.message) {
            case Constants.ERROR.USER_NOT_FOUD:
              this.snackBarSrvc.openSnackbar(
                'Correo incorrecto',
                'snackbar-danger'
              );
              break;
            case Constants.ERROR.EMAIL_REQUERID:
              this.snackBarSrvc.openSnackbar(
                'Correo es un campo obligatorio',
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
