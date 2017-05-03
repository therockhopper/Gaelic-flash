import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { SurveyComponent } from './survey/survey.component';

import { FlashCardService } from './flash-card.service';

@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule
  ],
  declarations: [
    FlashCardComponent, 
    SurveyComponent
  ],
  providers: [
    FlashCardService,
  ]
})
export class SurveyModule { }
