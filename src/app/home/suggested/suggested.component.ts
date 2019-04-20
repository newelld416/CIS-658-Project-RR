import { BackendService } from '@app/services/backend.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { User } from '@app/models/user.model';

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
  suggestedRestaurants: Restaurants[];

  constructor(private backend: BackendService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.backend.getRestaurants()
      .pipe(finalize(() => {
        console.log('finalize');
        this.isLoading = false;
        console.log(this.isLoading);
      }))
      .subscribe((response) => {
        console.log('results returned');
        this.suggestedRestaurants = response;
      });
  }

}
