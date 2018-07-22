import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProcessComponent } from './process/process.component';
import { MlfbListComponent } from './mlfb-list/mlfb-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatToolbarModule, MatMenuModule, MatBadgeModule, MatIconModule, MatCardModule, MatTooltipModule, MatTableModule, MatSortModule, MatDialogModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule} from '@angular/material';

import { AppService } from './app.service';
import { ProcessService} from './process/process.service';
import { PredictorComponent } from './predictor/predictor.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProcessComponent,
    MlfbListComponent,
    PredictorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatTableModule,
    MatBadgeModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  entryComponents:[
    PredictorComponent
  ],
  providers: [
    AppService,
    ProcessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
