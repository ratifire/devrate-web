import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const TitleNotifications = () => {
  const { t } = useTranslation();

  return (
    <Typography component='h4' variant='h4'>
      {t('settings.notifications.title')}
    </Typography>
  );
};

export default TitleNotifications;
