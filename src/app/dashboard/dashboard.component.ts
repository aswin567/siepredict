import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material';
import { PredictorComponent } from '../predictor/predictor.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  $mlfbList: Observable<any>;
  mobHeight:string;
  mlfbList: any;
  data: any[] = [];
  expiredMlfbList: Array<any> = [];
  displayedColumns: string[] = ['ArticleNumber', 'ProductFamily', 'ProductLifecycle', 'PLMEffectiveDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: AppService, public dialog: MatDialog) { 
    
    this.mobHeight = (window.screen.height - 140 - 172) + "px";
    console.log(this.mobHeight);
  }

  ngOnInit() {
    this.service.$mlfbList.subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      res.forEach(element => {
        if (element.ProductLifecycle !== 'PM300:Active Product') {
          this.expiredMlfbList.push(element);
        }
        if(element.PLMEffectiveDateSince !== ''){
          element.PLMEffectiveDateSince=new Date(element.PLMEffectiveDateSince);
        }
        this.data.push(element);
      });
    });
  }

  openModal(){
      const dialogRef = this.dialog.open(PredictorComponent, {
        width: '750px',
        data: this.data
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }

}
