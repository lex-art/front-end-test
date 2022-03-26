
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


export class SnackBarSettings {
  constructor( private _snackBar: MatSnackBar ) {}

  openSnackbar(
    message: string = '',
    action: string = 'X',
    duration: number = 2000,
    horizontalPosition: MatSnackBarHorizontalPosition | undefined = 'end',
    verticarPosition: MatSnackBarVerticalPosition | undefined = 'top',
    style: string = 'snackbar-success'
  ) {
    this._snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticarPosition,
      panelClass: [style],
    });
  }
}
