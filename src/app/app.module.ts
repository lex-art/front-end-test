import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthInterceptorService } from './shared/interceptor/auth-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './shared/conmonComponents/header/header.component';
import { SidebarComponent } from './shared/conmonComponents/sidebar/sidebar.component';
import { FooterComponent } from './shared/conmonComponents/footer/footer.component';
import { SpinnerComponent } from './shared/conmonComponents/spinner.component';
import { NotRoleComponent } from './shared/not-role/not-role.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MenuByRoleDirective } from './shared/directive/menu-by-role.directive';
import { SubMenuComponent } from './shared/conmonComponents/sidebar/subMenu/submenu.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NotRoleComponent,
    NotFoundComponent,
    MenuByRoleDirective,
    SubMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
