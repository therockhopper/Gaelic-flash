import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // random number holding id of survey
  surveyId: number;

  constructor( private router: Router, ) { }

  ngOnInit() {
    this.surveyId = Math.floor(Math.random() * (1 - 1)) + 1;
  }

  onSubmit(): void {
    this.router.navigate(['/survey', 1]);
  }

}
