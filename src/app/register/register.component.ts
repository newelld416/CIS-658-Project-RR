import { BackendService } from '@app/services/backend.service';
import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isLoading: boolean;
  isAuthenticated = false;
  user: string;

  /**
   * This is my constructor
   */
  constructor(public oktaAuth: OktaAuthService, private backend: BackendService) {
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

  registerUser(fName: string, lName: string, userEmail: string, form: any) {
    this.backend.createUser({ firstName: fName, lastName: lName, email: userEmail }).subscribe(() => {
      form.reset();
      window.location.reload();
    });
  }
}
