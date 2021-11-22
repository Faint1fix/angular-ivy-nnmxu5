import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Game } from './../game';
import { User } from './user.service';

export const tokenCost = 0.25;

export abstract class Transaction {
  public id: number = 0;
  public user: User;
  public openingBalance: number = 0;
  public currentBalance: number = 0;
  public description: string = '';

  constructor(user: User) {
    this.user = user;
  }

  makeTransaction(): void { }
}

export class PlayGameTransaction extends Transaction {
  public game: Game;

  constructor(user: User, game: Game) {
    super(user);
    this.game = game;
  }

  makeTransaction(): void {
    this.openingBalance = this.user.tokens;
    this.currentBalance = this.openingBalance - this.game.cost;
    this.description = `You have used ${this.game.cost} ${this.game.cost === 1 ? 'token' : 'tokens'} - "${this.game.name}"`

    this.user.tokens = this.currentBalance;
   }
}

export class PurchaseTokensTransaction extends Transaction {
  public numberOfTokens: number;

  constructor(user: User, numberOfTokens: number) {
    super(user);
    this.numberOfTokens = numberOfTokens;
  }

  makeTransaction(): void {
    this.openingBalance = this.user.tokens;
    this.currentBalance = this.openingBalance + this.numberOfTokens;
    this.description = `You have purchased ${this.numberOfTokens} ${this.numberOfTokens === 1 ? 'token' : 'tokens'} 
    for ${this.numberOfTokens * tokenCost}$`;

    this.user.tokens = this.currentBalance;
   }
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionsList: Transaction[] = [];

  constructor() { }

  makeTransaction(transaction: Transaction): void {
    transaction.id = this.transactionsList.length + 1;
    transaction.makeTransaction();
    this.transactionsList.push(transaction);
    
  }

  getHistory(): Observable<Transaction[]> {
    return of(this.transactionsList);
  }
}
