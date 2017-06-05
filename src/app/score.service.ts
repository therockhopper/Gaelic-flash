import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJS required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ScoreService {
  name: string;
  score = 0;

  constructor( private http: Http ) { }

  setName(userName: string = 'unknown'): void {
    this.name = userName;
  }

  getName(): string {
    return this.name;
  }

  updateScore(increament: number = 0): void {
    this.score += increament;
  }

  getScore(): number {
    return this.score;
  }

}
