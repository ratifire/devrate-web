import { useTranslation } from 'react-i18next';
import { Box, Switch, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubscribedEmailNotification } from '@redux/slices/auth/authSlice.js';
import { styles } from './EmailNotifications.styles';

const EmailNotifications = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth.user);
  const subscribed = data?.subscribed;

  const handleChangeSubscription = () => {
    dispatch(toggleSubscribedEmailNotification());
  };

  return (
    <>
      <Box sx={styles.switchBox}>
        <Typography component='h5' variant='h5'>
          {t('settings.notifications.email.title')}
        </Typography>
        <Switch checked={subscribed} sx={styles.switch} onChange={handleChangeSubscription} />
      </Box>
      <Typography component='p' variant='body'>
        {t('settings.notifications.email.text')}
      </Typography>
    </>
  );
};

export default EmailNotifications;
