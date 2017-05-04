import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashCardService } from '../flash-card.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  flashCard: any
  flashCards: any
  flashCardResult: any

  flashCardIndex: number

  displayFlashCard: boolean
  displayResult: boolean

  flashCardSub: any // hold our obseravble 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FlashCardService,
  ) { 
    // we do not want to show the flash card till we have the data
    this.displayFlashCard = false
    this.displayResult = false 

    this.flashCardIndex = 0 // start at the first index
  }

  ngOnInit() {
    // get the flashcard data
    this.getData()
  }

  getData(): void {
    this.flashCardSub = this.service.getThemeFlashCards().subscribe(
      flashCards => {
        this.flashCards = flashCards
        this.flashCard = flashCards.cards[this.flashCardIndex]

        console.log(this.flashCards, this.flashCardIndex)
        this.displayFlashCard = true  
      },
      err => console.log(err)
    )
  }

  submitAnswer(result: boolean):void {
    // did we answer correct?
    this.flashCardResult = result 
    // hide our flashCard and show the result card
    this.displayFlashCard = false 
    this.displayResult = true 

  }

  nextQuestion(): void {
    // update our index
    this.flashCardIndex++ 
    // get our new flashCard
    this.flashCard = this.flashCards.cards[this.flashCardIndex]

    // hide our result card and show the question
    this.displayFlashCard = true  
    this.displayResult = false 
  }

  ngOnDestroy(): void {
    // unsubscribe from all of our observables
    this.flashCardSub.unsubscribe()
  }


}
