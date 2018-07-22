import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent implements OnInit {

  expiredData:any[] =[];
  constructor(
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
}
