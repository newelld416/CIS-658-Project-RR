import { BackendService } from '@app/services/backend.service';
import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { User } from '../../../models/user.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoading: boolean;
  user: User;
  username: string;
  isAuthenticated: boolean;
  userEmail = '';

  /**
   * This is my constructor
   */
  constructor(private oktaAuth: OktaAuthService, private backend: BackendService, private router: Router) {
    // Set up initial authorization logic
    this.oktaAuth.isAuthenticated().then((result: boolean) => { this.isAuthenticated = result; });
    this.oktaAuth.getUser().then((user: User) => {
      if (user) {
        this.user = user;
        this.userEmail = this.user.email;
        this.setUser(this.user);
      } else {
        this.removeUser();
      }
    });

    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean)  => {
      this.isAuthenticated = isAuthenticated;
      this.oktaAuth.getUser().then((user: User) => {
        this.user = user;
        if (user) {
          this.userEmail = this.user.email;
          this.setUser(this.user);
        } else {
          this.removeUser();
        }
      });
    });
  }

  setUser(user: User) {
    this.backend.getUsersByEmail({email: user.email})
      .subscribe((response) => {
        localStorage.setItem('user', JSON.stringify(response[0]));
      });
  }

  removeUser() {
    localStorage.removeItem('user');
  }

  /**
   * This is my ngOnInit
   */
  ngOnInit() { }

  login() {
    this.oktaAuth.loginRedirect('/home');
  }

  logout() {
    this.oktaAuth.logout();
    localStorage.removeItem('user');
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }

}
