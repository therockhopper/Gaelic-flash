import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashCardService } from '../flash-card.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  flashCard: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FlashCardService,
  ) {}


  ngOnInit() {
    /*
    this.route.params
    .switchMap((params: Params) => this.service.getFlashCard(+params['id']))
    .subscribe((flashCard: any) => this.flashCard = flashCard);
   */
  }


}
