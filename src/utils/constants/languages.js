import _ from 'lodash';

const Languages = {
  en: 'en',
  uk: 'uk',
};

const LanguagesNamesForBackend = {
  [Languages.en]: 'ENGLISH',
  [Languages.uk]: 'UKRAINE',
};

const AccountLanguages = _.invert(LanguagesNamesForBackend);

const LanguagesList = Object.values(Languages);

export { Languages, LanguagesList, LanguagesNamesForBackend, AccountLanguages };
