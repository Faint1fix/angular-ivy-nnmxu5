import { Injectable } from '@angular/core';

export interface User {
  name: string,
  tokens: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User = {
    name: 'John',
    tokens: 0,
  };

  constructor() { }

  getUser(): User {
    return this.currentUser;
  }
}
