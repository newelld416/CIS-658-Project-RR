import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'http://localhost:8081/';

const routes = {
  getUserByEmail: (c: Context) => {
    const url = `${BASE_URL}users/email/${c.email}`;
    console.log(url);
    return url;
  },
  createUser: () => {
    const url = `${BASE_URL}users`;
    console.log(url);
    return url;
  },
  getRestaurants: () => {
    const url = `${BASE_URL}restaurants`;
    console.log(url);
    return url;
  },
  getRestaurantById: (c: Context) => {
    const url = `${BASE_URL}restaurants/${c.id}`;
    console.log(url);
    return url;
  },
  createRestaurant: () => {
    const url = `${BASE_URL}restaurants`;
    console.log(url);
    return url;
  },
  getFavoritesByUserId: (c: Context) => {
    const url = `${BASE_URL}favorites/${c.id}`;
    console.log(url);
    return url;
  },

  addFavoritesByUserId: () => {
    const url = `${BASE_URL}favorites`;
    console.log(url);
    return url;
  },
};

export interface Context {
  id?: string;
  restaurantid?: string;
  email?: string;
}

@Injectable()
export class BackendService {
  constructor(private httpClient: HttpClient) { }

  getUsersByEmail(c: Context): Observable<[any]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .get(routes.getUserByEmail(c), httpOptions)
      .pipe(
        map((body: any) => {
          return body;
        }),
        catchError(() => of('There was an error')),
      );
  }

  createUser(body: any): Observable<string | object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .post<any>(routes.createUser(), body, httpOptions)
      .pipe(
        map((returnBody: object) => returnBody),
        catchError(() => of('There was an error')),
      );
  }

  getFavoritesByUserId(c: Context): Observable<[any]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .get(routes.getFavoritesByUserId(c), httpOptions)
      .pipe(
        map((body: any) => {
          return body;
        }),
        catchError(() => of('There was an error')),
      );
  }

  addFavoriteByUserId(body: any): Observable<string | object> {
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .post<any>(routes.addFavoritesByUserId(), body, httpOptions)
      .pipe(
        map((returnBody: object) => {
          console.log(returnBody);
          return returnBody;
        }),
        catchError(() => of('There was an error')),
      );
  }

  getRestaurants(): Observable<[any]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .get(routes.getRestaurants(), httpOptions)
      .pipe(
        map((body: any) => {
          return body;
        }),
        catchError(() => of('There was an error')),
      );
  }

  getRestaurantById(c: Context): Observable<[any]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .get(routes.getRestaurantById(c), httpOptions)
      .pipe(
        map((body: any) => {
          return body;
        }),
        catchError(() => of('There was an error')),
      );
  }

  createRestaurant(body: any): Observable<string | object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.httpClient
      .post<any>(routes.createRestaurant(), body, httpOptions)
      .pipe(
        map((returnBody: object) => returnBody),
        catchError(() => of('There was an error')),
      );
  }

}
