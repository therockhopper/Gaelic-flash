import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashCardService } from '../flash-card.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  @Input()
  flashCard: any

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FlashCardService,
  ) {}


  ngOnInit() {
  }

  submitAnswer(index: number = -1): void {
    let result: boolean
    // did the user select the correct answer
    result = (index === 1 ) ? true : false
    // update our parent
    this.change.emit(result)
  }


}
