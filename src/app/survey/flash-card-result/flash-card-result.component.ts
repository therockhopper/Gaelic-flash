import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flash-card-result',
  templateUrl: './flash-card-result.component.html',
  styleUrls: ['./flash-card-result.component.scss']
})
export class FlashCardResultComponent implements OnInit {
  @Input()
  flashCardResult: any

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  close(): void {
    // update our parent
    this.change.emit()
  }

}
