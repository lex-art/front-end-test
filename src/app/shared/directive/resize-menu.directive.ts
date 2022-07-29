import { Directive, HostListener } from '@angular/core';
import { ConmonService } from 'src/app/services/conmon-service.service';
import constants from 'src/app/utilities/constants';

@Directive({
  selector: '[appResizeMenu]'
})
export class ResizeMenuDirective {
  constructor(
    private conmonService: ConmonService
  ) {}

    @HostListener('window:resize', ['$event'])
    onResize(event: UIEvent) {
      const window = event.target as Window
      const elements = window.document.getElementsByClassName('visibility-text')
      if (window.innerWidth < constants.COMMON.MIN_WIDTH_SCREEN && elements.length > 0) 
        this.conmonService.hideMenu();
    }
}
