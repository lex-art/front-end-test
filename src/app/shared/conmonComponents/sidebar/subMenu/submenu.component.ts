import { ConmonServiceService } from '../../../../services/conmon-service.service';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { IRoute } from '../typeMenuItem';
import {
  transition,
  animate,
  trigger,
  style,
  state,
} from '@angular/animations';
@Component({
  selector: 'app-submenu',
  templateUrl: 'submenu.component.html',
  styleUrls: [],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(500)),
    ]),
  ],
})
export class SubMenuComponent {
  @Input() routeSidebar: IRoute | undefined;
  public isOpen: boolean = false;

  constructor(private route: Router, private conmonService: ConmonServiceService) {}

  openSubMenu() {
    this.isOpen = !this.isOpen;
  }
  redirectLink(route: string | undefined) {
    if (route){
      this.conmonService.hideMenu()
       this.route.navigateByUrl(route)
      };
  }

}
