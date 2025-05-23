import { useState } from 'react';
import { Badge, IconButton, Popover } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { openPopup, closePopup } from '@redux/slices/notification/popupSlice.js';
import { useGetNotificationsQuery } from '@redux/api/slices/notificationsApiSlice.js';
import emptyNotificationLight from '@utils/constants/notification/whiteThemeIcons';
import emptyNotificationDark from '@utils/constants/notification/darkThemeIcons';
import { DARK_THEME } from '@utils/constants/Theme/theme';
import BellNotification from '@assets/icons/bell.svg?react';
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
  const dispatch = useDispatch();

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
