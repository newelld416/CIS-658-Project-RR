import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material';

import { RIPPLE_OPTIONS_PROVIDER } from './ripple/ripple-options.service';
import { LABEL_OPTIONS_PROVIDER } from './label/label-options.service';

const MODULES = [
  MatSelectModule,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ],
  providers: [
    LABEL_OPTIONS_PROVIDER,
    RIPPLE_OPTIONS_PROVIDER,
  ],
})
export class MaterialModule {}
