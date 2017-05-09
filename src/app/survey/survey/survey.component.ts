import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FlashCardService } from '../flash-card.service';
import { ScoreService } from '../../results/score.service';
import { ThemeService } from '../../home/theme.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  providers: [
    FlashCardService,
    ScoreService,
    ThemeService,
  ]
})
export class SurveyComponent implements OnInit {
  flashCard: any
  flashCards: any
  numberOfFlashCards:number
  flashCardResult: any = {}
  flashCardIndex: number

  displayFlashCard: boolean
  displayResult:boolean 

  loading: boolean

  flashCardSub: any // hold our obseravble 

  score: number
  theme: any 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public flashCardService: FlashCardService,
    public scoreService: ScoreService,
    public themeService: ThemeService,
  ) { 
    // we do not want to show the flash card till we have the data
    this.displayFlashCard = false
    this.flashCardIndex = 0 // start at the first index
  }

  ngOnInit() {
    this.loading = true
    this.displayFlashCard = true  

    this.theme = this.themeService.getTheme()
    console.log(this.theme)
    this.score = this.scoreService.getScore()
    // get the flashcard data
    this.getData()
  }

  getData(): void {
    this.flashCardSub = this.flashCardService.getThemeFlashCards(this.theme.id).subscribe(
      flashCards => {
        this.flashCards = flashCards
        this.flashCard = flashCards.cards[this.flashCardIndex]
        this.numberOfFlashCards = flashCards.cards.length
        this.loading = false 
      },
      err => console.log(err)
    )
  }

  submitAnswer(result: boolean):void {
    // did we answer correct?
    this.flashCardResult.correct = result 
    // if we got the wong answer we need to find out the right answer 
    if ( !this.flashCardResult.correct ) {
      // find the mofo 
      let correctAnswer = this.flashCard.possibleAnswers.find((item) => {
        if ( item.id == this.flashCard.correctAnswer ) return item
      })
    this.flashCardResult.correctAnswer = correctAnswer
    } else {
      // add to the score
      this.scoreService.updateScore(100)
      this.score = this.scoreService.getScore()
    }
    // hide our flashCard and show the result card
    this.displayFlashCard = false 
  }

  nextQuestion(): void {
    // update our index
    this.flashCardIndex++ 

    // is this the last card?
    if ( this.flashCardIndex >= this.numberOfFlashCards ) {
      this.router.navigate(['/results'])
    } else {
      // get our new flashCard
      this.flashCard = this.flashCards.cards[this.flashCardIndex]
    }

    // hide our result card and show the question
    this.displayFlashCard = true  
  }

  ngOnDestroy(): void {
    // unsubscribe from all of our observables
    this.flashCardSub.unsubscribe()
  }


}
