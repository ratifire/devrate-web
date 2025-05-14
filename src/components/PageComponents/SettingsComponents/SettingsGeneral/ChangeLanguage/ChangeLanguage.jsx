import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { FormSelect } from '@components/FormsComponents/Inputs';
import { useState } from 'react';
import { Languages, LanguagesList } from '@utils/constants/languages';
import { styles } from './ChangeLanguage.styles';

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(Languages.uk);

  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;

    if (!selectedLanguage) return;

    i18n.changeLanguage(selectedLanguage).then(() => {
      const html = document.querySelector('html');

      if (!html) return;

      html.setAttribute('lang', selectedLanguage);
      setLanguage(selectedLanguage);
    });
  };

  return (
    <>
      <Typography component='h5' variant='h5'>
        {t('settings.general.changeLanguage.title')}
      </Typography>
      <Box sx={styles.inputSelect}>
        <FormSelect
          isTranslated
          required
          countries={LanguagesList}
          handleChange={handleChangeLanguage}
          label={t('settings.general.changeLanguage.languageLabel')}
          name='language'
          translatedKey={'settings.general.changeLanguage'}
          value={language}
          variant='outlined'
        />
      </Box>
    </>
  );
};

export default ChangeLanguage;
