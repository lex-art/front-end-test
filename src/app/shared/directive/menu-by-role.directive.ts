import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Directive({
  selector: '[appMenuByRoleDirective]',
})
export class MenuByRoleDirective {
  private rolCurrentUser: Array<string> | undefined = [];
  constructor(
    private templateref: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private checkAuth: AuthService
  ) {}

  @Input()
  set appMenuByRoleDirective(roles: Array<string> | undefined) {
    this.viewContainer.createEmbeddedView(this.templateref);
    this.rolCurrentUser = this.checkAuth.getUser()?.role;
    //update view
    this.viewContainer.clear();
    const canPermission =
      roles &&
      roles.some(
        (role: string) =>
         this.rolCurrentUser?.some((item: string) => item === role)
      );
    if (canPermission) this.viewContainer.createEmbeddedView(this.templateref);
    else this.viewContainer.remove();
  }
}
