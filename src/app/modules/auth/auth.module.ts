import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppRoutingAuthModule } from './app-routing-auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import  {HeaderComponent}  from '../../shared/header/header.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingAuthModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
