import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule
  ],
  declarations: [
    FlashCardComponent, 
    SurveyComponent
  ]
})
export class SurveyModule { }
