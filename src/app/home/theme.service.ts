import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';``

// Import RxJS required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ThemeService {
  themesUrl: string
  theme: any 

  constructor( private http:Http ) { 
    this.themesUrl = "http://localhost:3000/themes"
  }

  setTheme(theme: any = {}): void {
    this.theme = theme
  }

  getTheme(): any {
    return this.theme || {"id": 1,"name": "nature"}
  }

  getThemes(): Observable<any> {
    return this.http.get(this.themesUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

}
