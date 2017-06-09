import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: 'results',
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
