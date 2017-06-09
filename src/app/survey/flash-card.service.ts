import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FlashCards } from '../flash-card.interface';
import { Observable } from 'rxjs/Observable';

// Import RxJS required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FlashCardService {
  flashCardsUrl: string;
  flashCards: FlashCards;

  constructor( private http: Http ) {
  }

  getFlashCardById( id: number = 1 ): Observable<{}> {
    return this.http.get(`./assets/${id}.json`)
    .map((res: Response) => {
      this.flashCards = res.json();
      return this.flashCards;
    })
    .catch((error: {}) => Observable.throw(error || 'Server Error'));
  }

  getNumberOfCards(): number {
    return this.flashCards ? this.flashCards.cards.length : 0;
  }

}
