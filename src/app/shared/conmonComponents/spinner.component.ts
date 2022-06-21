import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import {
  Component,
  Inject,
  Input,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="preloader" *ngIf="isSpinnerVisible | async">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`,
  encapsulation: ViewEncapsulation.None,
})

export class SpinnerComponent  implements OnDestroy  {
  public isSpinnerVisible = this.spinnerService.isLoaging$;

  @Input()
  public backgroundColor = 'rgba(0, 115, 170, 0.69)';
  constructor(private spinnerService: SpinnerService,private router: Router,
    @Inject(DOCUMENT) private document: Document ){

    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.spinnerService.showSpinner();
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.spinnerService.hideSpinner()
        }
      },
      () => {
        this.spinnerService.hideSpinner()
      }
    );
  }

  ngOnDestroy(): void {
    this.spinnerService.hideSpinner()
  }

}
