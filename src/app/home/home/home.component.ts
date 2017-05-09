import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service'
import { ScoreService } from '../../results/score.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ 
    ThemeService,
    ScoreService,
  ],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate(400)
      ]),
      transition(':leave', [
        animate(400, style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  themes: Array<string> 
  difficultyLevels: Array<string> = [
    "easy",
    "intermediate",
    "hard"
  ]

  selectedTheme: string 
  selectedDifficulty: string 
  userName: string 

  // hold our observable subscribes so we can eaisly unsubscribe
  themesSub: any

  constructor( 
              private themeService:ThemeService,
              private scoreService:ScoreService,
              private router:Router,
             ) { }

             ngOnInit() {
               //get all the possible themes for the game 
               this.themesSub = this.themeService.getThemes().subscribe(
                 themes => { this.themes = themes },
                   err => console.log(err) 
               )
             }

             ngAfterViewInit() {
               //focus on our name input
               document.getElementById('enterName').focus()
             }

             onSubmit(form: NgForm): void {
               this.scoreService.setName(form.form.controls.name.value)
               this.themeService.setTheme(this.selectedTheme)
               this.themeService.setDifficulty(this.selectedDifficulty)
               this.router.navigate(['/survey'])
             }

             ngOnDestroy(): void {
               // unsubscribe from all of our observables
               this.themesSub.unsubscribe()
             }
}
