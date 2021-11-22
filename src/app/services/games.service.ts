import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Game, Games } from './../game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(Games);
  }
}
