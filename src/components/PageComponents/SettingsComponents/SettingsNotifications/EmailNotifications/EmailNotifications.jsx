import { useTranslation } from 'react-i18next';
import { Box, Switch, Typography } from '@mui/material';
import { styles } from './EmailNotifications.styles';

const EmailNotifications = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={styles.switchBox}>
        <Typography component='h5' variant='h5'>
          {t('settings.notifications.email.title')}
        </Typography>
        <Switch sx={styles.switch} />
      </Box>
      <Typography component='p' variant='body'>
        {t('settings.notifications.email.text')}
      </Typography>
    </>
  );
};

export default EmailNotifications;
