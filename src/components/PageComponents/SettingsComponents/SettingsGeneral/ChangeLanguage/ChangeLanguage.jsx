import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { FormSelect } from '@components/FormsComponents/Inputs';
import { useState } from 'react';
import { LanguagesList, Languages } from '@utils/constants/languages';
import { useSnackbar } from 'notistack';
import { styles } from './ChangeLanguage.styles';

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const systemLang = LanguagesList.find((lang) => lang === i18n.language) || Languages.en;
  const [language, setLanguage] = useState(systemLang);

  const handleChangeLanguage = ({ target }) => {
    const selectedLanguage = target.value;

    i18n
      .changeLanguage(selectedLanguage)
      .then(() => {
        const html = document.querySelector('html');

        if (!html) return;

        html.setAttribute('lang', selectedLanguage);
        setLanguage(selectedLanguage);
        enqueueSnackbar(t('settings.general.changeLanguage.change.success'), {
          variant: 'success',
        });
      })
      .catch(() => {
        enqueueSnackbar(t('settings.general.changeLanguage.change.error'), {
          variant: 'error',
        });
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
