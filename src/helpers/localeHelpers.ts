import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { NativeModules, Platform } from "react-native";
import { format } from "date-fns";
import * as RNLocalize from "react-native-localize";

const DEFAULT_LOCALE = "en";
const LOCALES = {
  en: {
    translation: require("../locales/en.json")
  }
};

let translator: i18n.TFunction | null = null;
let locale = DEFAULT_LOCALE;

const getSystemLocale = (): string | void => {
  const systemLocale = RNLocalize.findBestAvailableLanguage(["en"]);

  console.log(systemLocale);

  if (systemLocale) {
    return systemLocale.languageTag;
  } else {
    return DEFAULT_LOCALE;
  }
};

const filterLocale = (filterLocale: string): string => {
  locale = filterLocale.substring(0, 2);

  if ((LOCALES as any)[locale]) {
    return locale;
  } else {
    return DEFAULT_LOCALE;
  }
};

export const formatDate = (date: Date, dateFormat: string = "MM/dd/yyyy") => {
  return format(date, dateFormat);
};

export const translate = (key: string, values?: any): string => {
  if (translator) {
    return translator(key, values);
  }

  return " ";
};

export const localeBootstrap = async (): Promise<void> => {
  const systemLocale = getSystemLocale() || DEFAULT_LOCALE;
  locale = filterLocale(systemLocale);

  console.log(123, getSystemLocale());

  translator = await i18n.use(initReactI18next).init({
    resources: LOCALES,
    lng: locale,
    fallbackLng: DEFAULT_LOCALE,
    keySeparator: ".",
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    }
  });
};
