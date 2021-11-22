import { Component, Input } from '@angular/core';
import { TransactionService, PlayGameTransaction } from './../../services/transaction.service';

import { Game } from '../../game';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {
  @Input() game: Game = {
    name: 'defaultName',
    cost: 0,
  };

  constructor(private userService: UserService, private transactionService: TransactionService) { }

  get canPlay(): boolean {
    return this.userService.getUser().tokens >= this.game.cost;
  }

  play(): void {
    const user = this.userService.getUser();
    this.transactionService.makeTransaction(new PlayGameTransaction(user,this.game));
  }
}
