import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  isAuthenticated = false;
  user: string;

  /**
   * This is my constructor
   */
  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.isAuthenticated()
      .finally(() => {
        this.isLoading = false;
      }).then(result => {
        this.isAuthenticated = result;
      });
  }

  /**
   * This is my ngOnInit
   */
  ngOnInit() { }

}
