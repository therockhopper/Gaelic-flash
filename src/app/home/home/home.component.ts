import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme.service'
import { ScoreService } from '../../results/score.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ 
    ThemeService,
    ScoreService,
  ]
})
export class HomeComponent implements OnInit {
  themes: any
  selectedTheme: any
  userName: string 

  // hold our observable subscribes so we can eaisly unsubscribe
  themesSub: any

  constructor( 
    private themeService:ThemeService ,
    private scoreService:ScoreService ,
   ) { }

   ngOnInit() {
     //get all the possible themes for the game 
     this.themesSub = this.themeService.getThemes().subscribe(
       themes => {
         this.themes = themes
         this.setSelectedTheme(themes[0])
       },
       err => console.log(err) 
     )
   }

   ngAfterViewInit() {
     //focus on our name input
     document.getElementById('enterName').focus()
   }

   setSelectedTheme(theme: any = {}) {
     this.selectedTheme = theme
     this.themeService.setTheme(theme)
   }

   setUserName(name:string = "unknown"): void {
     this.scoreService.setName(name)
   }

   ngOnDestroy(): void {
     // unsubscribe from all of our observables
     this.themesSub.unsubscribe()
   }
}
