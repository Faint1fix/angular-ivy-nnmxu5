import { TransactionService, PurchaseTokensTransaction } from './../../services/transaction.service';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  numberOfTokens: number = 0;

  constructor(private userService: UserService, private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  buyTokens(): void {
    this.numberOfTokens = Math.floor(this.numberOfTokens);
    if (this.numberOfTokens > 0) {
      const user = this.userService.getUser();
      this.transactionService.makeTransaction(new PurchaseTokensTransaction(user,this.numberOfTokens))
    }
  }
}
