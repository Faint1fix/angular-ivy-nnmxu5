import { Injectable } from '@angular/core';

import { Game } from './../game';
import { HistoryService } from './history.service';

export const tokenCost = 0.25;

export interface User {
  name: string,
  tokens: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User = {
    name: 'John',
    tokens: 0,
  };

  constructor(private historyService: HistoryService) { }

  getUser(): User {
    return this.currentUser;
  }

  playGame(game: Game): void {
    const currentCount = this.currentUser.tokens;
    const newCount = currentCount - game.cost;

    const description = `You have used ${game.cost} ${game.cost === 1 ? 'token' : 'tokens'} - "${game.name}"`;
    this.historyService.addTransaction(currentCount, newCount, description);
    this.currentUser.tokens = newCount;
  }

  purchaseTokens(count: number): void {
    const currentCount = this.currentUser.tokens;
    const newCount = currentCount + count;

    const description = `You have purchased ${count} ${count === 1 ? 'token' : 'tokens'}
    for ${count * tokenCost}$`;
    this.historyService.addTransaction(currentCount, newCount, description);
    this.currentUser.tokens = newCount;
  }
}
