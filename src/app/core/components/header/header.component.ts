import { BackendService } from '@app/services/backend.service';
import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { User } from '../../../models/user.model';

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

  /**
   * This is my constructor
   */
  constructor(private oktaAuth: OktaAuthService, private backend: BackendService) {
    // Set up initial authorization logic
    this.oktaAuth.isAuthenticated().then((result: boolean) => { this.isAuthenticated = result; });
    this.oktaAuth.getUser().then((user: User) => {
      console.log('getUser');
      this.user = user;
      this.setUser(this.user);
    });

    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean)  => {
      console.log('subscribe');
      this.isAuthenticated = isAuthenticated;
      this.oktaAuth.getUser().then((user: User) => {
        this.user = user;
        this.setUser(this.user);
      });
    });
  }

  setUser(user: User) {
    this.backend.getUsersByEmail({email: user.email})
      .subscribe((response) => {
        localStorage.setItem('user', JSON.stringify(response[0]));
      });
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
  }
}
