import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public pictureUser: string = '../../../../assets/img/default-profile.png';
  public openDropDown: boolean = false;
  public userName: string | undefined = ""
  constructor(private checkAuth: AuthService, private route: Router) {
    const tempUser =this.checkAuth.getUser()
    this.pictureUser = tempUser?.urlPhoto || this.pictureUser;
    this.userName = tempUser?.userName
  }

  onClickSelect(value: number): void {
    switch (value) {
      case 1:
        this.route.navigate(['/','change-password'])
        break;
        case 2:
        this.checkAuth.logout();
        break;
      default:
        break;
    }
  }
}
