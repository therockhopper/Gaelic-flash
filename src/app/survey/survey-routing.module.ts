import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashCardComponent } from './flash-card/flash-card.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {
    path: 'survey',
    component: SurveyComponent,
    children: [
      {
        path: ':id',
        component: FlashCardComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
