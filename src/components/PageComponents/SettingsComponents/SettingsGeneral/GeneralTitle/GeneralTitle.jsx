import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const GeneralTitle = () => {
  const { t } = useTranslation();

  return (
    <Typography component='h4' variant='h4'>
      {t('settings.general.title')}
    </Typography>
  );
};

export default GeneralTitle;
