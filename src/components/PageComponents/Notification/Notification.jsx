import React, { useState } from 'react';
import { Badge, IconButton, Popover } from '@mui/material';
import { ReactComponent as BellNotification } from '../../../assets/icons/bell.svg';
import styles from './Notification.styles';
import { useGetNotificationsQuery } from '../../../redux/services/notificationsApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/auth/authSlice';
import emptyNotificationLight from '../../../utils/constants/notification/whiteThemeIcons';
import emptyNotificationDark from '../../../utils/constants/notification/darkThemeIcons';
import { DARK_THEME } from '../../../utils/constants/Theme/theme';
import NotificationEmpty from './NotificationEmpty';
import NotificationList from './NotificationList';

const Notification = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const [bellButton, setBellButton] = useState(null);
  
  const { data: notifications, isLoading } = useGetNotificationsQuery(info.id);
  const newNotification = notifications?.every(item => item.read) ?? true;
  
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
  
  const elem = notifications?.length === 0 ? <NotificationEmpty icons={icons} /> :
    <NotificationList data={notifications} isLoading={isLoading} />;
  
  return (
    <>
      <IconButton sx={styles.btnIcon} onClick={bellButtonClickHandler}>
        <Badge
          sx={styles.badge}
          color="error"
          overlap="circular"
          variant="dot"
          invisible={newNotification}
        >
          <BellNotification />
        </Badge>
      </IconButton>
      <Popover
        open={open}
        anchorEl={bellButton}
        onClose={notificationsListClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={styles.wrapperPopover}
      >
        {elem}
      </Popover>
    </>
  );
};

export default Notification;
