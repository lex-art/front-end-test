import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent  /* implements  OnInit  */ {

  public linksSidebar: Array<any> = [];

  constructor(private checkAuth: AuthService) {
    this.linksSidebar = [
      {
        icon:"",
        route:"",
        text: "Item 1",
        role:["admin", "pastor"]

      },
      {
        icon:"",
        route:"",
        text: "Item 2",
        role:["user"]

      }
    ]
   }
   

   
    /* ngOnInit(): void {
      this.rolCurrentUser = this.checkAuth.getUser()?.role;
      console.log('====================================');
      console.log(this.rolCurrentUser);
      console.log('====================================');
  } */

  closeSeesion():void {    
    this.checkAuth.logout()
   }

}
