import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ConfigService } from '@services';
import { TranslateHttpLoaderFactory } from '@services/i18n/translate-loader.config';
import { FooterComponent, HeaderComponent } from '@app/core/components';
import { OktaAuthService } from '@okta/okta-angular';

import { MaterialModule } from '@app/material.module';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
];

const TRANSLATE_MODULE_CONFIG = {
  loader: {
    provide: TranslateLoader,
    useFactory: TranslateHttpLoaderFactory,
    deps: [HttpClient, ConfigService],
  },
};

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot(TRANSLATE_MODULE_CONFIG),
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    OktaAuthService,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
