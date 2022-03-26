import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ComponentsRoutes } from './application.routing';
import { PaginationComponent } from './pagination/pagination.component';
import { DataTableComponent } from '../../shared/conmonComponents/data-table/data-table.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    HomeComponent,
    PageOneComponent,
    PageTwoComponent,
    PaginationComponent,
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [RouterModule],
})
export class ApplicationModule {}
