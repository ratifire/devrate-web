import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { FormSelect } from '@components/FormsComponents/Inputs';
import { useState } from 'react';
import { styles } from './ChangeLanguage.styles';

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

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
          required
          countries={[t('settings.general.changeLanguage.uk'), t('settings.general.changeLanguage.en')]}
          handleChange={handleChangeLanguage}
          label={t('settings.general.changeLanguage.languageLabel')}
          name='startYear'
          value={language}
          variant='outlined'
        />
      </Box>
    </>
  );
};

export default ChangeLanguage;
