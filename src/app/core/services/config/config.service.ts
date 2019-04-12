import { Injectable } from '@angular/core';

import { get } from 'lodash';

import {
  CountryCd,
  EnvConfig,
  I18nAssets,
  Locale,
  CountriesRecord,
} from '@models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _envConfig: EnvConfig = environment;

  /**
   * @returns {EnvConfig}
   */
  get envConfig(): EnvConfig {
    return this._envConfig;
  }

  /**
   * @returns {I18nAssets}
   */
  get i18nAssets(): I18nAssets {
    return get(this.envConfig, 'i18n.assets', null);
  }

  /**
   * @returns {CountriesRecord}
   */
  get countries(): CountriesRecord {
    return get(this.envConfig, 'i18n.countries', null);
  }

  /**
   * @param {CountryCd} countryCd
   * @returns {Locale[]}
   */
  getLocalesByCountryCd(countryCd: CountryCd): Locale[] {
    return get(this.countries, `${countryCd}.locales`, []);
  }

}
