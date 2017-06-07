import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SurveyModule } from './survey/survey.module';
import { ResultsModule } from './results/results.module';
import { AppComponent } from './app.component';

import { ScoreService } from './score.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'flash-universal'
    }),
    ClarityModule.forRoot(),
    FormsModule,
    HttpModule,
    HomeModule,
    SurveyModule,
    ResultsModule,
    AppRoutingModule
  ],
  providers: [
    ScoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
