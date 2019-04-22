import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { BackendService } from '@app/services/backend.service';
import { finalize } from 'rxjs/operators';
import { OktaAuthService } from '@okta/okta-angular';

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  phone: string;
  description: string;
}

export interface Favorite {
  userId: number;
  restaurantId: string;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  isLoading: boolean;
  isAuthenticated: boolean;
  displayedColumns: string[] = ['name', 'address', 'phone', 'description'];
  dataSource = new MatTableDataSource();
  favorites: Favorite[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private backend: BackendService, private oktaAuth: OktaAuthService  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.oktaAuth.isAuthenticated().then((result: boolean) => { this.isAuthenticated = result; });
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean) => { this.isAuthenticated = isAuthenticated; });

    const user = JSON.parse(localStorage.getItem('user'));
    this.getFavoritesByUserId(user);
  }

  getFavoritesByUserId(user: any) {
    if (user) {
      this.dataSource = new MatTableDataSource(this.favorites);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.backend.getFavoritesByUserId({ id: user.userId })
        .pipe(finalize(() => {
          this.isLoading = false;
        }))
        .subscribe((response) => {
          for (const favorite of response) {
            const newFav: Favorite = favorite;
            this.backend.getRestaurantById({ id: newFav.restaurantId })
              .subscribe((restaurantResponse) => {
                this.favorites.push(restaurantResponse[0] as Favorite);
                this.dataSource.data = this.favorites;
              });
          }
          this.isLoading = true;
        });
    } else {
      this.isLoading = false;
    }
  }

}
