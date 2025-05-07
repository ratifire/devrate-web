import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { styles } from './SettingsNotifications.styles';

const SettingsNotifications = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.wrapper}>
      <Typography component='h4' variant='h4'>
        {t('settings.notifications.title')}
      </Typography>
      <Box sx={styles.section}>
        <Typography component='h5' variant='h5'>
          {t('settings.notifications.email.title')}
        </Typography>
        <Typography component='p' variant='body'>
          {t('settings.notifications.email.text')}
        </Typography>
      </Box>
      <Box sx={styles.section}>
        <Typography component='h5' variant='h5'>
          {t('settings.notifications.telegram.title')}
        </Typography>
        <Typography component='p' variant='body'>
          {t('settings.notifications.telegram.text')}
        </Typography>
      </Box>
    </Box>
  );
};

export default SettingsNotifications;
