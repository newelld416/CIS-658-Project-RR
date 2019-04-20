import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/material.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    SpinnerComponent,
  ],
  exports: [
    MaterialModule,
    TranslateModule,
  ],
})
export class SharedModule {}
