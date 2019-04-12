import { inject, TestBed } from '@angular/core/testing';

import { tap } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

import { LocaleId } from '@models';
import { I18nService } from '@services';
import { MOCK_TRANSLATE_MODULE } from './translate.config.mock';

const DEFAULT_LOCALE = { id: LocaleId.en_US, title: 'English', isDefault: true };
const LOCALES = [
  { ...DEFAULT_LOCALE },
  { id: LocaleId.es_US, title: 'Español' },
];

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nService],
      imports: [MOCK_TRANSLATE_MODULE],
    });

    service = TestBed.get(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setup locales', () => {
    spyOn(service, 'getDefaultLocale').and.callThrough();
    spyOn(service, 'setCurrentLocale');

    service.setupLocales([ ...LOCALES ]);

    expect(service.getDefaultLocale).toHaveBeenCalledWith(LOCALES);
    expect(service.setCurrentLocale).toHaveBeenCalledWith(DEFAULT_LOCALE);
  });

  it('should set default locale as current', () => {
    service.setupLocales([ ...LOCALES ]);

    service.currentLocale.pipe(
      tap(locale => {
        expect(locale).toEqual(DEFAULT_LOCALE);
      }),
    ).subscribe();
  });

  describe('current locale', () => {
    it('should set current locale', inject([TranslateService], (translateService) => {
      spyOn(translateService, 'use');

      service.setCurrentLocale({ ...DEFAULT_LOCALE });

      expect(translateService.use).toHaveBeenCalledWith(DEFAULT_LOCALE.id);
    }));

    it('should not set current locale', inject([TranslateService], (translateService) => {
      spyOn(translateService, 'use');
      service.setCurrentLocale(null);

      expect(translateService.use).not.toHaveBeenCalledWith(DEFAULT_LOCALE.id);
    }));
  });

  it('should return null as default locale', () => {
    expect(service.getDefaultLocale([])).toBeNull();
  });

});
