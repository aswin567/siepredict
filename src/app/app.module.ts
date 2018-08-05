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
import { SecondLevelModalComponent } from './second-level-modal/second-level-modal.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProcessComponent,
    MlfbListComponent,
    PredictorComponent,
    SecondLevelModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,

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
    PredictorComponent,
    SecondLevelModalComponent
  ],
  providers: [
    AppService,
    ProcessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
