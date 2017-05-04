import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';``

// Import RxJS required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FlashCardService {
  flashCardsUrl: string
  themesUrl: string
  theme: any 
  name: string
  score: number 

  constructor( private http:Http ) { 
    this.flashCardsUrl = "http://localhost:3000/flashcards/"
    this.themesUrl = "http://localhost:3000/themes"
    // fake it till we make it
    this.score = 243523
  }

  setTheme(theme: any = {}): void {
    this.theme = theme
  }

  getThemes(): Observable<any> {
    return this.http.get(this.themesUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
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

  // prob gonna move to a score service 
  
  setName(userName:string = "unknown"): void {
    this.name = userName
  } 

  getName(): string {
    return this.name
  }
  
  updateScore(increament:number = 0): void {
    this.score += increament
  }

  getScore(): number {
    return this.score
  }

}
