import { Component } from '@angular/core';
import { ConmonService } from '../services/conmon-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  public isMenuiIconVisible = this.conmonService.isOpen;
  public isMenuSmall = this.conmonService.isMenuSmall;
  public isSamll: boolean = false;
  constructor(private conmonService: ConmonService) {}

  openMenu() {
    this.conmonService.showMenu();
  }
  closeMenu() {
    this.conmonService.hideMenu()
  }
  smallMenu(): void {
    if (this.isSamll)
      this.conmonService.hideSmallMenu();
    else
      this.conmonService.showSmallMenu();

    this.isSamll = !this.isSamll
  }
}
