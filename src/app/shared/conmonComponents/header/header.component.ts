import { Component, OnInit } from '@angular/core';
import {
  transition,
  animate,
  trigger,
  style,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('openCloseDropDown', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px', padding: '0' })),
      transition('false <=> true', animate(300)),
    ]),
  ],
})
export class HeaderComponent /* implements OnInit */ {
  public openDropDown: boolean = false;
  constructor() {}

  /* ngOnInit(): void {
  } */

  onClick() {
    console.log('====================================');
    console.log('funciona esta onda?');
    console.log('====================================');
    this.openDropDown = !this.openDropDown;
  }
}
