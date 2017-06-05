import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlashCardResult } from '../../flash-card.interface';

@Component({
  selector: 'app-flash-card-result',
  templateUrl: './flash-card-result.component.html',
  styleUrls: ['./flash-card-result.component.scss']
})
export class FlashCardResultComponent implements OnInit {
  @Input()
  flashCardResult: FlashCardResult; 

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  sound: HTMLAudioElement;

  constructor() { }

  ngOnInit() {
    this.sound = document.createElement('audio');
    this.sound.id = 'audio-player';
  }

  playAudio(url: string): void {
    this.sound.src = './assets/sounds/' + url;
    this.sound.play();
  }

  close(): void {
    // update our parent
    this.change.emit();
  }

}
