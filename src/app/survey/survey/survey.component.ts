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
  numberOfFlashCards:number
  flashCardResult: any = {}

  flashCardIndex: number

  displayFlashCard: boolean
  displayResult: any 

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
        this.numberOfFlashCards = flashCards.cards.length
        this.displayFlashCard = true  
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
    }
    // hide our flashCard and show the result card
    this.displayFlashCard = false 
    this.displayResult = true 
  }

  nextQuestion(): void {
    // update our index
    this.flashCardIndex++ 

      // is this the last card?
      if ( this.flashCardIndex >= this.numberOfFlashCards ) {
      // send user to results, since they have seen all the flash cards
      this.router.navigate(['/results'])
    } else {
      // get our new flashCard
      this.flashCard = this.flashCards.cards[this.flashCardIndex]
    }

    // hide our result card and show the question
    this.displayFlashCard = true  
    this.displayResult = false 
  }

  ngOnDestroy(): void {
    // unsubscribe from all of our observables
    this.flashCardSub.unsubscribe()
  }


}
