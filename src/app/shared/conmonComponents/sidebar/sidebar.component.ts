import { AuthService } from '../../../services/auth.service';
import { Component } from '@angular/core';
import { ROUTES } from './menu-item';
import { IRoute } from './typeMenuItem';
import { transition, animate, trigger, style, state } from '@angular/animations';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
  animations:[
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(500))
    ])
  ]
})
export class SidebarComponent {
  public linksSidebar: Array<IRoute> = ROUTES;
  public isOpen: boolean = false;
  constructor(private checkAuth: AuthService) {}
  openSubMenu(){
    this.isOpen = !this.isOpen;
  }
  closeSeesion(): void {
    this.checkAuth.logout();
  }
}
