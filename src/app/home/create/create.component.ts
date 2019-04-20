import { BackendService } from './../../services/backend.service';
import { OktaAuthService } from '@okta/okta-angular';
import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  user: User;
  constructor(private oktaAuth: OktaAuthService, private backend: BackendService) { }

  ngOnInit() {

  }

  createRestaurant($event: any, name: string, address: string, phone: string, description: string, form: NgForm) {
    $event.preventDefault();
    this.oktaAuth.getUser().then((user: User) => {
      console.log('Create restaurant by user: ' + user.email);
      this.backend.createRestaurant({ name, address, phone, description })
        .subscribe((response: object) => {
          console.log(response);
          form.reset();
          window.location.reload();
        });

    });
  }

}
