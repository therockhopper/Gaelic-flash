import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';


@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule
  ],
  declarations: [
    ResultsComponent
  ],
  providers: [
  ]
})
export class ResultsModule { }
