import { Component } from '@angular/core';
import { ConmonService } from '../services/conmon-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  public isMenuiIconVisible = this.conmonService.isOpen;
  constructor(private conmonService: ConmonService) {}

  openMenu(){
    this.conmonService.showMenu();
  }
  closeMenu(){
    this.conmonService.hideMenu()
  }
}
