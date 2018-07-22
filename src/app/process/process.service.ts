import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  constructor(private http: HttpClient) { }

  getProcessList() {
    return this.http.get('./assets/mockdata/process.json');
  }
}
