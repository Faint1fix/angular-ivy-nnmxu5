import { Component, OnInit } from '@angular/core';

import { Transaction, HistoryService } from '../../services/history.service'

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.transactions = this.historyService.getHistory();
  }
}
