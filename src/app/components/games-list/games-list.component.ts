import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Game } from 'src/app/game';
import { GamesService } from './../../services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  gamesList: Game[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.gamesService.getGames().subscribe(list => this.gamesList = list));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscr => subscr.unsubscribe());
  }
}
