// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

import { EnvConfig } from '@models';

import {
  I18N_ASSETS,
  I18N_COUNTRIES,
} from './constants';

export const environment: EnvConfig = { // TODO: clean up
  production: false,
  api: null, // TODO: provide URLs
  i18n: {
    assets: I18N_ASSETS,
    countries: I18N_COUNTRIES,
  },
  oktaConfig: {
    issuer: 'https://dev-587527.oktapreview.com/oauth2/default',
    clientId: '0oainf6sqdsP8vwbq0h7',
    redirectUri: 'http://localhost:4200/implicit/callback',
  },
  envValue: 'Local',
};
