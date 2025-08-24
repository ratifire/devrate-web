import { AccountLanguages, Languages } from '@utils/constants/languages.js';
import i18n from 'i18next';

const setLanguageI18n = async (queryFulfilled) => {
  const {
    data: {
      userData: { accountLanguage },
    },
  } = await queryFulfilled;
  const lang = AccountLanguages[accountLanguage] || Languages.en;

  await i18n.changeLanguage(lang);

  const html = document.querySelector('html');

  if (html) {
    html.setAttribute('lang', lang);
  }
};

export default setLanguageI18n;
