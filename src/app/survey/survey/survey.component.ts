import { Component, Input, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashCards, Card, FlashCardResult, Option } from '../../flash-card.interface';

import { FlashCardService } from '../flash-card.service';
import { ScoreService } from '../../score.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})

export class SurveyComponent implements OnInit, OnDestroy {
  flashCard: Card;
  flashCards: FlashCards;
  numberOfFlashCards: number;
  flashCardResult: FlashCardResult;
  flashCardIndex: number;

  displayFlashCard: boolean;
  displayResult: boolean;
  loading: boolean;

  score = 0;

  surveyId: number;
  private paramSub: Subscription;
  private flashCardSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashCardService: FlashCardService,
    private scoreService: ScoreService,
  ) {
    // we do not want to show the flash card till we have the data
    this.displayFlashCard = false;
    this.flashCardIndex = 0; // start at the first index
  }

  ngOnInit() {
    this.loading = true;
    this.displayFlashCard = true;

    // subscribe to the router params
    this.paramSub = this.route.params.subscribe( params => {
      this.surveyId =  +params['id'];
      // now that we know the ID lets get the survey
      this.getData();
    });
  }

  getData(): void {
    this.flashCardSub = this.flashCardService.getFlashCardById(this.surveyId).subscribe(
      (flashCards: FlashCards) => {
        this.flashCards = flashCards;
        this.flashCard = flashCards.cards[this.flashCardIndex];
        this.numberOfFlashCards = flashCards.cards.length;
        this.loading = false;
      },
      err => console.log(err)
    );
  }

  submitAnswer(result: boolean): void {
    // did we answer correct?
    this.flashCardResult = {};
    this.flashCardResult.correct = result;
    // if we got the wong answer we need to find out the right answer
    if ( !this.flashCardResult.correct ) {
      // find the mofo
      const answer = this.flashCard.options.find((option) => {
        return option.id === this.flashCard.answerId;
      });
      this.flashCardResult.correctAnswer = answer;
    } else {
      // add to the score
      this.scoreService.updateScore(1);
      this.score = this.scoreService.getScore();
    }
    // hide our flashCard and show the result card
    this.displayFlashCard = false;
  }

  nextQuestion(): void {
    // update our index
    this.flashCardIndex = (this.flashCardIndex + 1);

    // is this the last card?
    if ( this.flashCardIndex >= this.numberOfFlashCards ) {
      this.router.navigate(['/results']);
    } else {
      // get our new flashCard
      this.flashCard = this.flashCards.cards[this.flashCardIndex];
    }

    // hide our result card and show the question
    this.displayFlashCard = true;
  }

  ngOnDestroy(): void {
    // unsubscribe from all of our observables
    this.flashCardSub.unsubscribe();
    this.paramSub.unsubscribe();
  }

}
