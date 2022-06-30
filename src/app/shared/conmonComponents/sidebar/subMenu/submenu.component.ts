import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/operators';
import { IRoute } from '../typeMenuItem';
import {
  transition,
  animate,
  trigger,
  style,
  state,
} from '@angular/animations';
import { ConmonService } from 'src/app/services/conmon-service.service';

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
export class SubMenuComponent implements OnInit, OnDestroy {
  @Input() routeSidebar: IRoute | undefined;
  public isOpen: boolean = false;
  public subscriberEnd: Subscription | undefined;

  constructor(private router: Router, private conmonService: ConmonService) {}

  ngOnInit(): void {
    const isActivbe = this.router.isActive(this.router.url, false);
    const needOpen = this.routeSidebar?.subMenu?.filter(
      (item) => this.router.url === item.route
    );
    if (needOpen?.length || 0 > 0) {
      this.isOpen = isActivbe;
    }
    this.subscriberEnd = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe(() => {
        const tempNeedOpen = this.routeSidebar?.subMenu?.filter(
          (item) => this.router.url === item.route
        );

        if (tempNeedOpen?.length || 0 > 0) this.isOpen = true;
        else this.isOpen = false;
      });
  }
  ngOnDestroy(): void {
    this.subscriberEnd?.unsubscribe();
  }

  openSubMenu() {
    this.isOpen = !this.isOpen;
  }
  redirectLink(route: string | undefined) {
    if (route) {
      this.conmonService.hideMenu();
      this.router.navigateByUrl(route);
    }
  }
  redirecSubMenu() {   
    this.conmonService.hideMenu();    
  }
}
