import { DashboardService } from './../../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent /* implements OnInit */ {

  constructor(private serv : DashboardService) { }

  /* ngOnInit(): void {
    this.serv.get('/example/list').subscribe({
      next: (result) => {
        console.log('====================================');
        console.log(result);
        console.log('====================================');
      },
      error: (err) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      },
    })
  } */

}
