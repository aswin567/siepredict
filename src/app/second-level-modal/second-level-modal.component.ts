import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../predictor/predictor.component';

@Component({
  selector: 'app-second-level-modal',
  templateUrl: './second-level-modal.component.html',
  styleUrls: ['./second-level-modal.component.sass']
})
export class SecondLevelModalComponent {

  constructor(
    public dialogRef: MatDialogRef<SecondLevelModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
