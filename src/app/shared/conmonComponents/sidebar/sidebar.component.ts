import { AuthService } from '../../../services/auth.service';
import { Component } from '@angular/core';
import { ROUTES } from './menu-item';
import { IRoute } from './typeMenuItem';
import { ConmonService } from 'src/app/services/conmon-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent {
  public linksSidebar: Array<IRoute> = ROUTES;
  public isOpen: boolean = false;
  public isMenuSamll: boolean = false;
  public isMenuSmall = this.conmonService.isMenuSmall;
  public isMenuiIconVisible = this.conmonService.isOpen;
  constructor(private checkAuth: AuthService, private conmonService: ConmonService) {}

  openSubMenu() {
    this.isOpen = !this.isOpen;
  }
  closeSeesion(): void {
    this.checkAuth.logout();
  }

  smallMenu(): void {
    if(this.isMenuSamll) 
    this.conmonService.hideSmallMenu();
    else
    this.conmonService.showSmallMenu();
    
    this.isMenuSamll = !this.isMenuSamll
  }
}
