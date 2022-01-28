import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ComponentsRoutes } from './application.routing';

@NgModule({
  imports: [RouterModule.forChild(ComponentsRoutes)],
  exports: [RouterModule],
  declarations: [HomeComponent, PageOneComponent, PageTwoComponent],
})
export class ApplicationModule {}
