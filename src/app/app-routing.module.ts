import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },

  // This must be defined as the final route
  {
    path: '**',
    redirectTo: '/home',
    canActivate: [OktaAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
