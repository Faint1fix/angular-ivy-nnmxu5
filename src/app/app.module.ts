import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './components/games/games.component';
import { LedgerComponent } from './components/ledger/ledger.component';
import { TransactionItemComponent } from './components/transaction-item/transaction.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameItemComponent,
    GamesListComponent,
    HeaderComponent,
    GamesComponent,
    LedgerComponent,
    TransactionItemComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
