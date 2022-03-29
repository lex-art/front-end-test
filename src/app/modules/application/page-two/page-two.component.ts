import { DialogInterface } from './../../../models/dialogModal';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogModalComponent } from 'src/app/shared/conmonComponents/dialog-modal/dialog-modal.component';

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
     /*  width: '50%', */
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


