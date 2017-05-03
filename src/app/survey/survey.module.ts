import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';

import { SurveyRoutingModule } from './survey-routing.module';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { SurveyComponent } from './survey/survey.component';

import { FlashCardService } from './flash-card.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forRoot(),
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
