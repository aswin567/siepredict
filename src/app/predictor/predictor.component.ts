import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { SecondLevelModalComponent } from '../second-level-modal/second-level-modal.component';

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent implements OnInit {
  operand: string;
  source: string;
  expiredData:any[] =[];
  constructor(public dialog: MatDialog, 
    public dialogRef: MatDialogRef<PredictorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]) { }

  ngOnInit() {
  }

  onDateChange(date){
    this.expiredData=[];

      this.data.forEach((item)=>{
        if(item.PLMEffectiveDateSince !== ''){

          if(item.PLMEffectiveDateSince<date.value){
            this.expiredData.push(item);
          }
        }
      })
  }

  openModal(){
    // const dialogRef = this.dialog.open(SecondLevelModalComponent, {
    //   width: '750px',
    //   data: this.data
    // });
    const dialogRef = this.dialog.open(SecondLevelModalComponent, {
      width: '250px',
      data: {operand: this.operand, source: this.source}
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.source = result;
    });
}
}

export interface DialogData {
  operand: string;
  source: string;
}