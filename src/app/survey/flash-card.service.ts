import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';``

// Import RxJS required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FlashCardService {
  flashCardsUrl: string

  constructor( private http:Http ) { 
    this.flashCardsUrl = "http://localhost:3000/flashcards/"
  }

  getThemeFlashCards(id:number = 1): Observable<any> {
    return this.http.get(this.flashCardsUrl + id)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getAllFlashCards(): Observable<any> {
    return this.http.get(this.flashCardsUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

}
