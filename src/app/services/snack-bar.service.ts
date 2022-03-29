import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackbar(
    message: string = '',
    style: string = 'snackbar-success',
    duration: number = 3000,
    action: string = 'X',
    horizontalPosition: MatSnackBarHorizontalPosition | undefined = 'end',
    verticarPosition: MatSnackBarVerticalPosition | undefined = 'top',
  ) {
    this._snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticarPosition,
      panelClass: [style],
    });
  }
}
