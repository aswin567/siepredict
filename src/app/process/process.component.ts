import { Component, OnInit } from '@angular/core';
import { ProcessService } from './process.service';
import { Observable } from 'rxjs';
import {ProcessConst} from '../../assets/const/process.const';

import { trigger, style, transition, animate, group } from '@angular/animations';
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
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
export class ProcessComponent implements OnInit {

  $processList: Observable<any>;
  processList:any;
  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.getProcessList();
  }

  getProcessList() {
    //this.processList = ProcessConst;
    this.$processList = this.processService.getProcessList();
  }
}
