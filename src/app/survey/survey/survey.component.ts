import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  flashCard: any

  displayFlashCard: boolean
  displayResult: boolean

  constructor() { 
    // we do not want to show the flash card till we have the data
    this.displayFlashCard = false
    this.displayResult = false
  }

  ngOnInit() {
    this.displayFlashCard = true  
  }

  submitAnswer(event: any):void {
    this.displayFlashCard = false 
    this.displayResult = true  
  }

  nextQuestion(): void {
    this.displayFlashCard = true  
    this.displayResult = false 
  }

}
