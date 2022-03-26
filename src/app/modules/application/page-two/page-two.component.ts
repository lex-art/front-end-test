import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogModalComponent } from 'src/app/shared/conmonComponents/dialog-modal/dialog-modal.component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styles: [
  ]
})
export class PageTwoComponent /* implements OnInit */ {
  animal: string | undefined;
  name: string| undefined;
  constructor(public dialog: MatDialog) { }

  openModal(){
   
    const dialogRef = this.dialog.open(DialogModalComponent, {
      width: '50%',
      data: {name: this.name, animal: this.animal},
    });

    /* dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    }); */
  }
}


