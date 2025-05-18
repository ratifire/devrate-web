import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { FormSelect } from '@components/FormsComponents/Inputs';
import { useState } from 'react';
import { LanguagesList, Languages, LanguagesNamesForBackend } from '@utils/constants/languages';
import { useSnackbar } from 'notistack';
import { ChangeLanguageSkeleton } from '@components/UI/Skeleton';
import { useUpdateLanguageMutation } from '@redux/api/slices/profileSettings/profileSettingsApiSlice';
import { styles } from './ChangeLanguage.styles';

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [changeLanguage, { isLoading }] = useUpdateLanguageMutation();
  const systemLang = LanguagesList.find((lang) => lang === i18n.language) || Languages.en;
  const [language, setLanguage] = useState(systemLang);

  const handleChangeLanguage = async ({ target }) => {
    const selectedLanguage = target.value;

    try {
      const html = document.querySelector('html');

      if (!html) return;

      await changeLanguage(LanguagesNamesForBackend[selectedLanguage]).unwrap();
      await i18n.changeLanguage(selectedLanguage);

      html.setAttribute('lang', selectedLanguage);
      setLanguage(selectedLanguage);
      enqueueSnackbar(t('settings.general.changeLanguage.notification.success'), {
        variant: 'success',
      });

      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('settings.general.changeLanguage.notification.error'), {
        variant: 'error',
      });
    }
  };

  if (isLoading) {
    return <ChangeLanguageSkeleton />;
  }

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
