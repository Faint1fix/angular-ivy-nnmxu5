import { Injectable } from '@angular/core';

import { Game, Games } from './../game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames(): Game[] {
    return Games;
  }
}
