import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  user: User;
  isAuthenticated: boolean;

  /**
   * This is my constructor
   */
  constructor(private oktaAuth: OktaAuthService) {
    // get authentication state for immediate use
    this.oktaAuth.isAuthenticated().then((result: boolean) => {
      this.isAuthenticated = result;
    });

    this.oktaAuth.getUser().then((user: User) => {
      this.user = user;
    });

    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean)  => {
      this.isAuthenticated = isAuthenticated;
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
    console.log('execute logout');
    this.oktaAuth.logout('/home');
    window.location.reload();
  }

  get username(): string | null {
    return this.user ? this.user.email : null;
  }

}
