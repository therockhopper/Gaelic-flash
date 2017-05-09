import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [ ScoreService ]
})
export class ResultsComponent implements OnInit {
  score:number
  name: string

  constructor( public scoreService:ScoreService ) { }

  ngOnInit() {
    this.getData()
  }

  getData(): void {
    this.score = this.scoreService.getScore()
    this.name = this.scoreService.getName()
  }

}
