import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppRoutingAuthModule } from './app-routing-auth.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import validatorTailor from 'src/app/utilities/errorValidatosTailor';
@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AppRoutingAuthModule,
    FormsModule,
    ReactiveFormsModule,
    //se debe declarar las campos requeridos
    ErrorTailorModule.forRoot({
      errors: validatorTailor,
    }),
  ],
})
export class AuthModule {}
