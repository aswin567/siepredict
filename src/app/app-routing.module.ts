import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { ProcessComponent } from './process/process.component';
import { MlfbListComponent } from './mlfb-list/mlfb-list.component';
const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'process',
        component: ProcessComponent
      },
      {
        path: 'mlFb',
        component: MlfbListComponent
      },
    ]
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(appRoutes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
