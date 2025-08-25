import { Link, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { styles } from './TelegramNotifications.styles';

const TelegramNotifications = () => {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
};

export default TelegramNotifications;
