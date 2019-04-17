import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'http://localhost:8081/';

const routes = {
  getRestaurants: () => {
    const url = `${BASE_URL}restaurants`;
    console.log(url);
    return url;
  },
};

export interface Context {
  id?: string;
}

@Injectable()
export class BackendService {
  constructor(private httpClient: HttpClient) { }

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

}
