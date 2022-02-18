import { Routes } from '@angular/router';
import { CheckRoleGuard } from 'src/app/shared/guards/check-role.guard';

import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import Constants from "../../utilities/constants"

//Todo: add more routes
export const ComponentsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dashboard' }],
      role: [Constants.ROLES.ADMIN, Constants.ROLES.USER]
    },
    component: HomeComponent,
    canActivate: [CheckRoleGuard]
  },
  {
    path: 'page-one',
    data: {
      title: 'Page One',
      urls: [{ title: 'Page One', url: '/page-one' }, { title: 'Page One' }],
      role: [Constants.ROLES.USER]
    },
    component: PageOneComponent,
    
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
    data: {
      title: 'Cards',
      urls: [
        { title: 'Page Two', url: '/page-two' },
        { title: 'ngComponent' },
        { title: 'Cards' },
      ],
      /* role: 'registrador' */
    },
    canActivate: [CheckRoleGuard]
  }
];
