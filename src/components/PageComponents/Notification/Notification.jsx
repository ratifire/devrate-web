import { useState } from 'react';
import { Badge, IconButton, Popover } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetNotificationsQuery } from '../../../redux/services/notificationsApiSlice';
import BellNotification from '../../../assets/icons/bell.svg?react';
import { selectCurrentUser } from '../../../redux/auth/authSlice';
import emptyNotificationLight from '../../../utils/constants/notification/whiteThemeIcons';
import emptyNotificationDark from '../../../utils/constants/notification/darkThemeIcons';
import { DARK_THEME } from '../../../utils/constants/Theme/theme';
import styles from './Notification.styles';
import NotificationEmpty from './NotificationEmpty';
import NotificationList from './NotificationList';

const Notification = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const [bellButton, setBellButton] = useState(null);

  const { data: notifications, isLoading } = useGetNotificationsQuery(info.id);
  const newNotification = notifications?.every((item) => item.read) ?? true;

  const { mode } = useSelector((state) => state.theme);
  const icons = mode === DARK_THEME ? emptyNotificationDark : emptyNotificationLight;

  const bellButtonClickHandler = (event) => {
    event.preventDefault();
    setBellButton(event.currentTarget);
  };

  const notificationsListClose = () => {
    setBellButton(null);
  };

  const open = Boolean(bellButton);
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
