import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en';
import { uk } from './locales/uk';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en,
    uk,
  },
  debug: false,
  fallbackLng: 'uk',
  lng: 'en',
});
export default i18n;
