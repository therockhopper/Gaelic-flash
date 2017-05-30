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
  }

  getFlashCardById( id:number = 1 ): Observable<any> {
    return this.http.get(`./assets/${id}.json`)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error || 'Server Error'))
  }

}
