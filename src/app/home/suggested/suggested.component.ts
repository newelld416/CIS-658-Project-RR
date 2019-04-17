import { BackendService } from '@app/services/backend.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { OktaAuthService } from '@okta/okta-angular';

export interface Restaurants {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const SUGGESTED_RESTAURANTS: Restaurants[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 6, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 7, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 8, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 10, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 11, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 12, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
];

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestedComponent implements OnInit {

  isAuthenticated: boolean;
  suggestedRestaurants: Restaurants[];

  constructor(private backend: BackendService, private oktaAuth: OktaAuthService) {
    // get authentication state for immediate use
    this.oktaAuth.isAuthenticated().then((result: boolean) => {
      this.isAuthenticated = result;
    });

    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  ngOnInit() {
    this.suggestedRestaurants = SUGGESTED_RESTAURANTS;
    this.backend.getRestaurants()
      .pipe(finalize(() => { }))
      .subscribe((response) => {
        console.log(response);
      });
  }

}
