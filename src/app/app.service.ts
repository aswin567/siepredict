import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MlfbList } from '../assets/const/mlfbList.const';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
    this.getMflbs();
  }

  $mlfbList: Observable<any>;
  mlfbList:any;
  getMflbs() {
    this.$mlfbList = this.http.get('https://testpredi.azurewebsites.net/allproducts');
    //this.mlfbList = MlfbList
  }
}
