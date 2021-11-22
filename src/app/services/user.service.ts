import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  tokens: number;
  tokensObservable: BehaviorSubject<number>;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public;

  private currentUser: User;

  constructor() {
    this.currentUser = {
      name: 'John',
      tokens: 0,
      tokensObservable: new BehaviorSubject<number>(0),
    };
    this.currentUser.tokensObservable.next(this.currentUser.tokens);
  }

  getUser(): User {
    return this.currentUser;
  }
}
