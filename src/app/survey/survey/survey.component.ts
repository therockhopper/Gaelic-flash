import { Component, Input, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
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
  topImgUrl: string
  bottomImgUrl: string
  topImage: HTMLElement
  bottomImage: HTMLElement
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

  ngAfterViewChecked():void {
    this.topImage = document.getElementById('top')
    this.bottomImage = document.getElementById('bottom')
  }

  getData(): void {
    this.flashCardSub = this.flashCardService.getFlashCardById(this.surveyId).subscribe(
      flashCards => {
        console.log(flashCards)
        this.flashCards = flashCards
        this.flashCard = flashCards.cards[this.flashCardIndex]
        this.numberOfFlashCards = flashCards.cards.length
        this.topImgUrl = this.flashCard.imageUrl
        this.bottomImgUrl = this.flashCards.cards[this.flashCardIndex + 1].imageUrl
        this.loading = false 
      },
      err => console.log(err)
    )
  }

  updateImageUrls():void {
    // toggle our animation classes for the background image
    this.topImage.classList.toggle('fadeIn')
    this.bottomImage.classList.toggle('fadeIn')
    this.topImage.classList.toggle('fadeOut')
    this.bottomImage.classList.toggle('fadeOut')

    // if last question no need to fetch next image 
    if ( this.flashCardIndex >= this.numberOfFlashCards - 1 ) return

    // the iamge that has the transparent class, will need to get a new img src
    if ( this.topImage.classList.contains('fadeOut') ) {
      this.topImgUrl = this.flashCards.cards[this.flashCardIndex + 1].imageUrl
    } else {
      this.bottomImgUrl = this.flashCards.cards[this.flashCardIndex + 1].imageUrl
    }
    console.log(this.topImgUrl, this.bottomImgUrl, this.flashCardIndex)
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
      this.updateImageUrls()
    }

    // hide our result card and show the question
    this.displayFlashCard = true  
  }

  ngOnDestroy(): void {
    // unsubscribe from all of our observables
    this.flashCardSub.unsubscribe()
  }


}
