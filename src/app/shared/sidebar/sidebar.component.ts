import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
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
        route:"/page-one",
        text: "Item 1",
        role:["admin"]

      },
      {
        icon:"",
        route:"",
        text: "Item 2",
        role:["user"]

      },
      {
        icon:"",
        route:"",
        text: "Cerrar cession",
        closeSeesion: true,
        role:["admin", "user"]

      }
    ]
   }  

  closeSeesion():void {    
    this.checkAuth.logout()
   }

}
