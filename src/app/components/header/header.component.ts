import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User = {
    name: 'emptyUser',
    tokens: -1,
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getUser();
  }

  get currentUrl(): string {
    return this.router.url;
  }

  buyTokens(): void {
    this.router.navigateByUrl('/ledger');
  }
}
