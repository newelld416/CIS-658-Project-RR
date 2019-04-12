import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/shared/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [ ],
  exports: [
    MaterialModule,
    TranslateModule,
  ],
})
export class SharedModule {}
