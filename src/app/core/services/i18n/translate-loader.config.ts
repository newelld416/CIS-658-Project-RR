import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ConfigService } from '@services';

class AmwTranslateHttpLoader extends TranslateHttpLoader {
  constructor(http, prefix, suffix) {
    super(http, prefix, suffix);
  }

  /**
   * @param {string} lang
   * @returns {Observable<any>}
   */
  getTranslation(lang: string): Observable<any> {
    return super.getTranslation(lang).pipe(
      catchError(error => of(error)), // the only way to handle the http error within ngx-translate
    );
  }
}

/**
 * @param {HttpClient} http
 * @param {ConfigService} configService
 * @returns {AmwTranslateHttpLoader}
 * @constructor
 */
export function TranslateHttpLoaderFactory(http: HttpClient, configService: ConfigService): AmwTranslateHttpLoader {
  const { prefix, suffix } = configService.i18nAssets;

  return new AmwTranslateHttpLoader(http, prefix, suffix);
}
