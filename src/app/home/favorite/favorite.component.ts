import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { BackendService } from '@app/services/backend.service';
import { finalize } from 'rxjs/operators';
import { OktaAuthService } from '@okta/okta-angular';

import { User } from '../../models/user.model';
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

  constructor(private backend: BackendService, private oktaAuth: OktaAuthService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.oktaAuth.isAuthenticated().then((result: boolean) => { this.isAuthenticated = result; });
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
      this.getFavoriteData();
    });

    this.getFavoriteData();
  }

  getFavoriteData() {
    this.oktaAuth.getUser().then((user: User) => {
      this.setDataSource();
      this.backend.getUsersByEmail({ email: user.email })
        .subscribe((response) => {
          const loggedInUser = JSON.parse(JSON.stringify(response[0]));
          this.backend.getFavoritesByUserId({ id: loggedInUser.userId })
            .pipe(finalize(() => {
              this.isLoading = false;
            }))
            .subscribe((res) => {
              if (res) {
                for (const favorite of res) {
                  const newFav: Favorite = favorite;
                  this.backend.getRestaurantById({ id: newFav.restaurantId })
                    .subscribe((restaurantResponse) => {
                      this.favorites.push(restaurantResponse[0] as Favorite);
                      this.dataSource.data = this.favorites;
                    });
                }
              }
            });
        });
    });
    this.isLoading = false;
  }

  setDataSource() {
    this.dataSource = new MatTableDataSource(this.favorites);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
