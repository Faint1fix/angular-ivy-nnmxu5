import { Component, Input } from '@angular/core';

import { Transaction } from '../../services/transaction.service'

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent {
  @Input() transaction: Transaction

  constructor() { }
}
