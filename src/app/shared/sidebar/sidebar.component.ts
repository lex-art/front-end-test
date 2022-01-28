import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent /* implements  OnInit */ {

  constructor(private checkAuth: AuthService) {
    
   }

   
    /* ngOnInit(): void {
  } */

  closeSeesion():void {    
    this.checkAuth.logout()
   }

}
