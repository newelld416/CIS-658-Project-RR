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
    path: '**',
    redirectTo: '/home',
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
