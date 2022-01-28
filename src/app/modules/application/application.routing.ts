import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

//Todo: add more routes
export const ComponentsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dashboard' }],
    },
    component: HomeComponent,
  },
  {
    path: 'page-one',
    data: {
      title: 'Page One',
      urls: [{ title: 'Page One', url: '/page-one' }, { title: 'Page One' }],
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
    },
  },
];
