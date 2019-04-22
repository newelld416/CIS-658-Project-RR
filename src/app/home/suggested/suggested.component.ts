import { BackendService } from '@app/services/backend.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { User } from '@app/models/user.model';
import { OktaAuthService } from '@okta/okta-angular';

export interface Restaurants {
  name: string;
  description: number;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.scss'],
})
export class SuggestedComponent implements OnInit {

  isLoading: boolean;
  isAuthenticated: boolean;
  user: User;
  loggedInUser: any;
  suggestedRestaurants: Restaurants[];

  constructor(private backend: BackendService, private oktaAuth: OktaAuthService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.backend.getRestaurants()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((response) => {
        this.suggestedRestaurants = response;
      });

    this.oktaAuth.isAuthenticated().then((result: boolean) => { this.isAuthenticated = result; });
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean) => { this.isAuthenticated = isAuthenticated; });

    const user = JSON.parse(localStorage.getItem('user'));
    this.loggedInUser = user.userId;
  }

  addFavorite(suggestion: any) {
    this.backend.addFavoriteByUserId({userId: this.loggedInUser, restaurantId: suggestion.id})
      .subscribe((response) => {
        console.log(response);
        window.location.reload();
      });
  }

}
