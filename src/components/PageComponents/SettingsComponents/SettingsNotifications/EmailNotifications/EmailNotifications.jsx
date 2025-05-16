import { useTranslation } from 'react-i18next';
import { Box, Switch, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubscribedEmailNotification } from '@redux/slices/auth/authSlice';
import { useUpdateEmailSubscriptionMutation } from '@redux/api/slices/profileSettings/profileSettingsApiSlice';
import { useSnackbar } from 'notistack';
import { EmailNotificationsSkeleton } from '@components/UI/Skeleton';
import { styles } from './EmailNotifications.styles';

const EmailNotifications = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = useSelector((state) => state.auth.user);
  const [updateEmailSubscription, { isLoading }] = useUpdateEmailSubscriptionMutation();
  const subscribed = data?.subscribed;

  const handleChangeSubscription = ({ target }) => {
    updateEmailSubscription(target.checked)
      .unwrap()
      .then(() => {
        enqueueSnackbar(t('settings.notifications.email.change.success'), {
          variant: 'success',
        });
        dispatch(toggleSubscribedEmailNotification());
      })
      .catch(() => {
        enqueueSnackbar(t('settings.notifications.email.change.error'), {
          variant: 'error',
        });
      });
  };

  if (isLoading) {
    return <EmailNotificationsSkeleton />;
  }

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
