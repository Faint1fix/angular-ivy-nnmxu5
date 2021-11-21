import { Component, Input } from '@angular/core';

import { Transaction } from '../../services/history.service'

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent {

  @Input() transaction: Transaction = {
    id: -1,
    openingBalance: 0,
    currentBalance: 0,
    description: 'empty description'
  };

  constructor() { }
}
