import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../flash-card.interface';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  @Input()
  flashCard: Card;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  sound: HTMLAudioElement;
  selectedId: number;

  constructor() {}

  ngOnInit() {
    this.sound = document.createElement('audio');
    this.sound.id = 'audio-player';
  }

  playAudio(url: string): void {
    this.sound.src = './assets/sounds/' + url;
    this.sound.play();
  }

  submitAnswer(index: number = -1): void {
    let result: boolean;
    // did the user select the correct answer
    result = ( index === this.flashCard.answerId ) ? true : false;
    // update our parent
    this.change.emit(result);
  }


}
