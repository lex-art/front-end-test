import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppRoutingAuthModule } from './app-routing-auth.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import validatorTailor from 'src/app/utilities/errorValidatosTailor';
@NgModule({
  declarations: [LoginComponent],
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
