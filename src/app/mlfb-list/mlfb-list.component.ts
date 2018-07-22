import { Component, OnInit } from '@angular/core';

import { trigger, style, transition, animate, group } from '@angular/animations';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-mlfb-list',
  templateUrl: './mlfb-list.component.html',
  styleUrls: ['./mlfb-list.component.css'],
  animations: [
    trigger('itemAnim', [
      transition('void => *', [
        style({
          visibility:'hidden', 
          transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ 
          visibility:'visible', 
          transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class MlfbListComponent implements OnInit {

  constructor(private service: AppService) { }
$mlfbList: Observable<any>;
mlfbList:any;
selectedId: string;
  ngOnInit() {
    this.$mlfbList = this.service.$mlfbList;
    //this.mlfbList=this.service.mlfbList;
  }

  onSelection(id) {
    this.selectedId = id;
  }
}
