import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ ],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate(300, style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  // random number holding id of survey
  surveyId: number

  constructor( private router:Router,) { }

  ngOnInit() {
    this.surveyId = Math.floor(Math.random() * (5 - 1)) + 1
  }

  onSubmit(form: NgForm): void {
    this.router.navigate(['/survey', this.surveyId])
  }

}
