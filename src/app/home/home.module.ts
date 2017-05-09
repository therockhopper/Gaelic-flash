import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ThemeService } from './theme.service'

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forRoot(),
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    ThemeService,
  ]
})
export class HomeModule { }
