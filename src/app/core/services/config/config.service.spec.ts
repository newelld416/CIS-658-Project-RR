import { TestBed } from '@angular/core/testing';

import { ConfigService } from '@services';
import { CountryCd } from '@models';

import { environment } from '@env/environment';
import { I18N_ASSETS, I18N_COUNTRIES } from '@env/constants';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService],
    });

    service = TestBed.get(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide environment configuration', () => {
    expect(service.envConfig).toEqual(environment);
  });

  it('should provide i18n assets', () => {
    expect(service.i18nAssets).toEqual(I18N_ASSETS);
  });

  it('should provide locales per country', () => {
    expect(service.countries).toEqual(I18N_COUNTRIES);
  });

  it('should provide locales per country', () => {
    const supportedCountriesCodes = [
      CountryCd.US,
      CountryCd.Canada,
      CountryCd.DominicanRepublic,
    ];

    supportedCountriesCodes.forEach(countryCd => {
      expect(service.getLocalesByCountryCd(countryCd)).toEqual(I18N_COUNTRIES[countryCd].locales);
    });
  });

});
