import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import Constants from 'src/app/utilities/constants';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: [],
})
export class ResetPasswordComponent implements OnInit {
  public formResetPassword: FormGroup;
  private token!: string;
  constructor(
    private rutaActiva: ActivatedRoute,
    private userService: AuthService,
    private router: Router,
    private builderform: FormBuilder,
    private snackBarSrvc: SnackBarService
  ) {
    this.formResetPassword = this.builderform.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.token = this.rutaActiva.snapshot.params['token'];
  }

  onResetPass() {
    const { newPassword, confirmPassword } = this.formResetPassword.value;
    if (this.formResetPassword.valid) {
      if (newPassword === confirmPassword) {
        const params = { headers: { 'token-reset': this.token } };
        this.userService.resetPassword({ newPassword }, params).subscribe({
          next: (response) => {
            if (response.success) {
              this.snackBarSrvc.openSnackbar('Cambio de contraseña exitoso');
              this.router.navigateByUrl('/auth/login');
            }
          },
          error: (err: HttpErrorResponse) => {
            this.router.navigate(['/', 'auth', 'reset-password', this.token]);
            switch (err.error.message) {
              case Constants.ERROR.EMAIL_AND_TOKEN_REQUORED:
                this.snackBarSrvc.openSnackbar(
                  'Campos faltantes',
                  'snackbar-danger'
                );
                break;
              case Constants.ERROR.TOKEN_EXPIRED:
                this.snackBarSrvc.openSnackbar(
                  'Token inválido',
                  'snackbar-danger'
                );
                break;
              default:
              case Constants.ERROR.TOKEN_EXPIRED:
                this.snackBarSrvc.openSnackbar(
                  'A ocurrido un error inesperado, intente más tarde',
                  'snackbar-danger'
                );
                break;
            }
          },
        });
      } else {
        this.snackBarSrvc.openSnackbar(
          'Las contraseñas no coindicen.\n Intente de nuevo',
          'snackbar-danger'
        );
        this.formResetPassword.reset();
      }
    }
  }
}
