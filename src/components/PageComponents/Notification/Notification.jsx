import { useEffect, useState } from 'react';
import { Badge, IconButton, Popover } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '@redux/slices/auth/authSlice';
import { openPopup, closePopup } from '@redux/slices/notification/popupSlice';
import { useGetNotificationsQuery } from '@redux/api/slices/notificationsApiSlice';
import emptyNotificationLight from '@utils/constants/notification/whiteThemeIcons';
import emptyNotificationDark from '@utils/constants/notification/darkThemeIcons';
import { DARK_THEME } from '@utils/constants/Theme/theme';
import BellNotification from '@assets/icons/bell.svg?react';
import { resetPage } from '@redux/slices/scheduledInterview/scheduledInterviewSlice';
import { useGetAllScheduledInterviewsQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice';
import NOTIFICATION_TYPES from '@utils/constants/notificationTypes';
import styles from './Notification.styles';
import NotificationEmpty from './NotificationEmpty';
import NotificationList from './NotificationList';

const Notification = () => {
  const [bellButton, setBellButton] = useState(null);
  const dispatch = useDispatch();
  const { data: info } = useSelector(selectCurrentUser);
  const { mode } = useSelector((state) => state.theme);
  const { refetch } = useGetAllScheduledInterviewsQuery({ page: 0, size: 6 });

  const { data: notifications, isLoading } = useGetNotificationsQuery(info.id);

  const newNotification = notifications?.every((item) => item.read) ?? true;
  const icons = mode === DARK_THEME ? emptyNotificationDark : emptyNotificationLight;

  useEffect(() => {
    if (Array.isArray(notifications) && notifications.length > 0) {
      const hasUpdated = notifications.some(
        (v) => v.type === NOTIFICATION_TYPES.INTERVIEW_SCHEDULED || v.type === NOTIFICATION_TYPES.INTERVIEW_REJECTED
      );

      /* eslint-disable */
      console.log('notifications', notifications);
      console.log('hasUpdated', hasUpdated);
      if (hasUpdated) {
        dispatch(resetPage());
        refetch();
      }
    }
  }, [notifications]);

  const bellButtonClickHandler = (event) => {
    event.preventDefault();
    setBellButton(event.currentTarget);
    dispatch(openPopup());
  };

  const notificationsListClose = () => {
    setBellButton(null);
    dispatch(closePopup());
  };

  const open = useSelector((state) => state.popup.isOpen);
  const elem =
    notifications?.length === 0 ? (
      <NotificationEmpty icons={icons} />
    ) : (
      <NotificationList data={notifications} isLoading={isLoading} />
    );

  return (
    <>
      <IconButton sx={styles.btnIcon} onClick={bellButtonClickHandler}>
        <Badge color='error' invisible={newNotification} overlap='circular' sx={styles.badge} variant='dot'>
          <BellNotification />
        </Badge>
      </IconButton>
      <Popover
        anchorEl={bellButton}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        sx={styles.wrapperPopover}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={notificationsListClose}
      >
        {elem}
      </Popover>
    </>
  );
};

export default Notification;
