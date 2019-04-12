import { Injectable } from '@angular/core';

import { isEmpty } from 'lodash';

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

import { Locale } from '@models';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private _currentLocale$$ = new BehaviorSubject<Locale>(null);
  private _currentLocale$: Observable<Locale> = this._currentLocale$$.asObservable().pipe(distinctUntilChanged());

  constructor(
    private translateService: TranslateService,
  ) {
  }

  /**
   * @returns {Observable<Locale>}
   */
  get currentLocale(): Observable<Locale> {
    return this._currentLocale$;
  }

  /**
   * @param {Locale[]} locales
   */
  setupLocales(locales: Locale[]): void {
    const defaultLocale = this.getDefaultLocale(locales);

    this.setCurrentLocale(defaultLocale);
  }

  /**
   * @param {Locale} locale
   */
  setCurrentLocale(locale: Locale): void {
    if (isEmpty(locale)) {
      return;
    }

    this.translateService.use(locale.id);
    this._currentLocale$$.next(locale);
  }

  /**
   * @param {Locale[]} locales
   * @returns {Locale}
   */
  getDefaultLocale(locales: Locale[]): Locale {
    return locales.find(locale => locale.isDefault) || null;
  }

}
