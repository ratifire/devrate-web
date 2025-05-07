import { Trans, useTranslation } from 'react-i18next';
import { Box, Link, Switch, Typography } from '@mui/material';
import { styles } from './SettingsNotifications.styles';

const SettingsNotifications = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.wrapper}>
      <Typography component='h4' variant='h4'>
        {t('settings.notifications.title')}
      </Typography>
      <Box sx={styles.section}>
        <Box sx={styles.switchBox}>
          <Typography component='h5' variant='h5'>
            {t('settings.notifications.email.title')}
          </Typography>
          <Switch sx={styles.switch} />
        </Box>
        <Typography component='p' variant='body'>
          {t('settings.notifications.email.text')}
        </Typography>
      </Box>
      <Box sx={styles.section}>
        <Typography component='h5' variant='h5'>
          {t('settings.notifications.telegram.title')}
        </Typography>
        <Typography component='p' variant='body'>
          <Trans
            components={{
              a: <Link href='#' sx={styles.link} target='_blank' />,
            }}
            i18nKey={'settings.notifications.telegram.text'}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default SettingsNotifications;
