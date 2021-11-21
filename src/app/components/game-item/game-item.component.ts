import { Component, Input } from '@angular/core';

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

  constructor(private userService: UserService) { }

  canPlay(): boolean {
    return this.userService.getUser().tokens >= this.game.cost;
  }

  play(): void {
    this.userService.playGame(this.game);
  }
}
