import { Injectable } from '@angular/core';

export interface Transaction {
  id: number,
  openingBalance: number,
  currentBalance: number,
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private transactionsList: Transaction[] = [];

  constructor() { }

  addTransaction(currentBalance: number, newBalance: number, descr: string): void {
    const newTransaction: Transaction = {
      id: this.transactionsList.length + 1,
      openingBalance: currentBalance,
      currentBalance: newBalance,
      description: descr
    }
    
    this.transactionsList.push(newTransaction);
  }

  getHistory(): Transaction[] {
    return this.transactionsList;
  }
}
