import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  count: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  buyTokens(): void {
    this.count = Math.floor(this.count);
    if (this.count > 0) {
      this.userService.purchaseTokens(this.count);
    }
  }
}
