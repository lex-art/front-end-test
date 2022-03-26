import { ConmonServiceService } from './../services/conmon-service.service';
import { Component,} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  public isSpinnerVisible = this.conmonService.isOpen;
  constructor(private conmonService: ConmonServiceService) { }
 
 
  openMenu(){
    this.conmonService.showMenu();
  }
  closeMenu(){
    this.conmonService.hideMenu()
  }
}
