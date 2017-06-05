import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../score.service';
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

  constructor( private scoreService: ScoreService, private router: Router, ) { }

  ngOnInit() {
    this.getData();
    this.surveyId = Math.floor(Math.random() * (1 - 1)) + 1;
  }

  getData(): void {
    this.score = this.scoreService.getScore();
  }

  onSubmit(): void {
    this.router.navigate(['/survey', this.surveyId]);
  }

}
