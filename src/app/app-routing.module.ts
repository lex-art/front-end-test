import { LayoutComponent } from './layout/layout.component';
import { LandingPageComponent } from './modules/home/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAuthGuard } from './shared/guards/check-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        //pathMatch: 'full',
        loadChildren: () =>
          import('./modules/application/application.module').then((m) => m.ApplicationModule),
      },
    ],
     canActivate: [CheckAuthGuard],
  },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
