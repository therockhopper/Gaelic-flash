import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlashCardService } from '../../survey/flash-card.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ FlashCardService ]
})
export class HomeComponent implements OnInit {
  themes: any
  selectedTheme: any
  userName: string 

  // hold our observable subscribes so we can eaisly unsubscribe
  themesSub: any

  constructor( private service:FlashCardService ) { 
  }

  ngOnInit() {
    //get all the possible themes for the game 
    this.themesSub = this.service.getThemes().subscribe(
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
    this.service.setTheme(theme)
  }

  setUserName(name:string = "unknown"): void {
    this.service.setName(name)
  }

  ngOnDestroy(): void {
    // unsubscribe from all of our observables
    this.themesSub.unsubscribe()
  }

}
