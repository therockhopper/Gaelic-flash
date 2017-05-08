import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';``

// Import RxJS required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ThemeService {
  themesUrl: string
  theme: string 
  difficulty: string

  constructor( private http:Http ) { 
    this.themesUrl = "http://localhost:3004/api/allThemes"
  }

  setTheme(theme:string = "nature" ): void {
    this.theme = theme
  }

  setDifficulty(difficulty:string = "easy" ): void {
    this.difficulty = difficulty 
  }

  getTheme(): any {
    return this.theme || "unset"
  }

  getThemes(): Observable<any> {
    return this.http.get(this.themesUrl)
    .map((res:Response) =>  {
      console.log(res.json())
      return res.json()
    })
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

}
