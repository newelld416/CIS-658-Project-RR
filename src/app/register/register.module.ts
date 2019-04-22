import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

import { MaterialModule } from '@app/material.module';
import { BackendService } from '@app/services/backend.service';
import { OktaAuthService } from '@okta/okta-angular';
import { SharedModule } from '@app/shared';
@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
  ],
  providers: [
    BackendService,
    OktaAuthService,
  ],
})
export class RegisterModule { }
