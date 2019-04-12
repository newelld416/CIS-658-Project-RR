import { CountriesRecord, CountryCd, I18nAssets, LocaleId } from '@models';

export const I18N_ASSETS: I18nAssets = {
  prefix: '/assets/i18n/',
  suffix: '.json',
};

export const I18N_COUNTRIES: CountriesRecord = {
  [CountryCd.US]: {
    id: CountryCd.US,
    title: 'United states',
    locales: [
      { id: LocaleId.en_US, title: 'English', isDefault: true },
      { id: LocaleId.es_US, title: 'Español' },
    ],
  },
  [CountryCd.Canada]: {
    id: CountryCd.Canada,
    title: 'Canada',
    locales: [
      { id: LocaleId.en_CA, title: 'English', isDefault: true },
      { id: LocaleId.fr_CA, title: 'Français' },
    ],
  },
  [CountryCd.DominicanRepublic]: {
    id: CountryCd.DominicanRepublic,
    title: 'Dominican Republic',
    locales: [
      { id: LocaleId.en_DO, title: 'English', isDefault: true },
      { id: LocaleId.es_DO, title: 'Dominican Republic Spanish' },
    ],
  },
};
