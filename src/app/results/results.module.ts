import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';

import { ScoreService } from './score.service';

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule
  ],
  declarations: [
    ResultsComponent
  ],
  providers: [
    ScoreService
  ]
})
export class ResultsModule { }
