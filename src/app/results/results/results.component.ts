import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../score.service';
import { FlashCardService } from '../../survey/flash-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  score: number;
  name: string;
  surveyId: number;
  numberOfCards: number;

  constructor( private scoreService: ScoreService, private router: Router, private flashCardService: FlashCardService ) { }

  ngOnInit() {
    this.getData();
    this.surveyId = Math.floor(Math.random() * (1 - 1)) + 1;
  }

  getData(): void {
    this.score = this.scoreService.getScore();
    this.numberOfCards = this.flashCardService.getNumberOfCards();
  }

  onSubmit(): void {
    this.router.navigate(['/survey', this.surveyId]);
  }

}
