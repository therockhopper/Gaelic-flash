import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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

  constructor( private router:Router,) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onSubmit(form: NgForm): void {
    this.router.navigate(['/survey'])
  }

  ngOnDestroy(): void {
    // unsubscribe from all of our observables
  }
}
