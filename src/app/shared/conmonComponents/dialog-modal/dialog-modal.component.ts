import { DialogInterface } from './../../../models/dialogModal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styles: [],
})
export class DialogModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogInterface,
    public dialogRef: MatDialogRef<DialogModalComponent>
  ) {}

  handleDialogSubmit() {
    /*  this.stateService.isAsyncOperationRunning$.next(true); */
    setTimeout(() => {
      this.dialogData.callbackMethod();
      /* this.stateService.isAsyncOperationRunning$.next(false); */
    }, 500);
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
