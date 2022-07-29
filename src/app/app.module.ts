import { NgModule } from '@angular/core';
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
import { NotRoleComponent } from './shared/conmonComponents/not-role/not-role.component';
import { NotFoundComponent } from './shared/conmonComponents/not-found/not-found.component';
import { MenuByRoleDirective } from './shared/directive/menu-by-role.directive';
import { SubMenuComponent } from './shared/conmonComponents/sidebar/subMenu/submenu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogModalComponent } from './shared/conmonComponents/dialog-modal/dialog-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ResizeMenuDirective } from './shared/directive/resize-menu.directive';

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
    SubMenuComponent,
    DialogModalComponent,
    ResizeMenuDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule
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
