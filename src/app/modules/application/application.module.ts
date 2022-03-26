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
import {MatDialogModule} from '@angular/material/dialog';



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
    MatDialogModule
  ],
  exports: [RouterModule],
})
export class ApplicationModule {}
