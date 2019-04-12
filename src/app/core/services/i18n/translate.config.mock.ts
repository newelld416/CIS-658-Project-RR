import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { of } from 'rxjs';

class MockTranslateLoader extends TranslateFakeLoader {
  getTranslation() {
    return of();
  }
}

export const MOCK_TRANSLATE_MODULE = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useClass: MockTranslateLoader,
  },
});
