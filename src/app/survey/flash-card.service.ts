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
    this.flashCardsUrl = "http://127.0.0.1:3004/api/flashcard"
  }

  getThemeFlashCards(id:number): Observable<any> {
    return this.http.get(this.flashCardsUrl, {params:{"id": id }})
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getAllFlashCards(): Observable<any> {
    return this.http.get(this.flashCardsUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

}
