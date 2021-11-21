import { Component, OnInit } from '@angular/core';

import { Game } from './../../game';
import { GamesService } from './../../services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  gamesList: Game[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesList = this.gamesService.getGames();
  }
}
