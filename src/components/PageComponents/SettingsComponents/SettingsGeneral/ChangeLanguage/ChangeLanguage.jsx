import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { FormSelect } from '@components/FormsComponents/Inputs';
import { styles } from './ChangeLanguage.styles';

const ChangeLanguage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography component='h5' variant='h5'>
        {t('settings.general.changeLanguage.title')}
      </Typography>
      <Box sx={styles.inputSelect}>
        <FormSelect
          required
          countries={[t('settings.general.changeLanguage.ua'), t('settings.general.changeLanguage.en')]}
          label={t('settings.general.changeLanguage.languageLabel')}
          name='startYear'
          variant='outlined'
        />
      </Box>
    </>
  );
};

export default ChangeLanguage;
