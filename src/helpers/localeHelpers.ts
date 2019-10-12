import I18n, { TranslateOptions } from 'i18n-js';
import { format } from 'date-fns';
import * as RNLocalize from 'react-native-localize';
import en from '../locales/en.js';

const LOCALES = ['en'];
const DEFAULT_LOCALE = 'en';

I18n.defaultLocale = DEFAULT_LOCALE;
I18n.fallbacks = true;
I18n.translations = {
  en,
};

const bestLocale = RNLocalize.findBestAvailableLanguage(LOCALES);

if (bestLocale) {
  I18n.locale = bestLocale.languageTag;
} else {
  I18n.locale = DEFAULT_LOCALE;
}

export const formatDate = (date: Date, dateFormat: string = 'MM/dd/yyyy') => {
  return format(date, dateFormat);
};

export const localizeText = (phrase: string, options?: TranslateOptions): string => {
  return I18n.t(phrase, options);
};
