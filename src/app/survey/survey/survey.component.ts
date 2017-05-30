import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FlashCardService } from '../flash-card.service';
import { ScoreService } from '../../results/score.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  providers: [
    FlashCardService,
    ScoreService,
  ],
  animations: [
    trigger('cardInOut', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        style({
          opactiy: '1',
        }),
        animate('255ms ease-out', style({
          transform: 'translateY(-100%)',
        }))
      ]),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: '0'}),
        animate(300, style({ opactiy: '1'}))
      ]),
      transition(':leave', [
        animate(0, style({ 
          opactiy: '0',
          display: 'none'
        }))
      ]),
    ])
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


  // new 
  surveyId: number
  private paramSub: any 
  private surveySub: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public flashCardService: FlashCardService,
    public scoreService: ScoreService,
  ) { 
    // we do not want to show the flash card till we have the data
    this.displayFlashCard = false
    this.flashCardIndex = 0 // start at the first index
  }

  ngOnInit() {
    this.loading = true
    this.displayFlashCard = true  

    // subscribe to the router params
    this.paramSub = this.route.params.subscribe( params => {
      this.surveyId =  +params['id']
      console.log(this.surveyId)
      // now that we know the ID lets get the survey
      this.getData()
    })
  }

  getData(): void {
    this.flashCardSub = this.flashCardService.getFlashCardById(this.surveyId).subscribe(
      flashCards => {
        console.log(flashCards)
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
      let correctAnswer = this.flashCard.options.find((item) => {
        if ( item.id == this.flashCard.answerId ) return item
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
    this.flashCardIndex = (this.flashCardIndex + 1) 
    console.log(this.flashCardIndex, this.numberOfFlashCards)

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
