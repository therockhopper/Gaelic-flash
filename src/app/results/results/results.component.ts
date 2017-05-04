import { Component, OnInit } from '@angular/core';
import { FlashCardService } from '../../survey/flash-card.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  score:number
  name: string

  constructor( private service:FlashCardService ) { }

  ngOnInit() {
    this.getData()
  }

  getData(): void {
    this.score = this.service.getScore()
    this.name = this.service.getName()
  }

}
