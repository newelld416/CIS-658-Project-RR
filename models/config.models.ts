export enum CountryCd {
  US = 'US',
  Canada = 'CA',
  DominicanRepublic = 'DO',
}

export enum LocaleId {
  en_US = 'en-US',
  es_US = 'es-US',
  en_CA = 'en-CA',
  fr_CA = 'fr-CA',
  en_DO = 'en-DO',
  es_DO = 'es-DO',
}

export interface Locale {
  id: LocaleId;
  title: string;
  isDefault?: boolean;
}

export interface Country {
  id: CountryCd;
  title: string;
  locales: Locale[];
}

export interface EnvConfig {
  production: boolean;
  api: ApiEndpoints;
  i18n: I18nConfig;
  oktaConfig: OktaConfig;
  envValue: string;
}

export interface ApiEndpoints {
  mdmsPartyAccounts: string;
  mdmsAboAccounts: string;
}

export type CountriesRecord = Record<CountryCd, Country>;

export interface I18nConfig {
  assets: I18nAssets;
  countries: CountriesRecord;
}

export interface I18nAssets {
  prefix: string;
  suffix: string;
}

export interface OktaConfig {
  issuer: string;
  clientId: string;
  redirectUri: string;
}
