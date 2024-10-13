import React, { useState } from 'react';
import { Badge, Box, IconButton, Popover, Typography } from '@mui/material';
import NotificationItem from './NotificationItem';
import { ReactComponent as BellNotification } from '../../../assets/icons/bell.svg';
import styles from './Notification.styles';
import { useGetNotificationsQuery } from '../../../redux/services/notificationsApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/auth/authSlice';
import { useTranslation } from 'react-i18next';
import emptyNotificationLight from '../../../utils/constants/notification/whiteThemeIcons';
import emptyNotificationDark from '../../../utils/constants/notification/darkThemeIcons';
import { DARK_THEME } from '../../../utils/constants/theme';

const Notification = () => {
  const { t } = useTranslation();
  
  const { data: info } = useSelector(selectCurrentUser);
  const [bellButton, setBellButton] = useState(null);
  
  const { data: notifications, isLoading, isError } = useGetNotificationsQuery(info.id);
  const newNotification = !notifications?.some((item) => item.read === false);
  
  const { mode } = useSelector((state) => state.theme);
  const icons = mode === DARK_THEME ? emptyNotificationDark : emptyNotificationLight;
  console.log(icons);
  const bellButtonClickHandler = (event) => {
    event.preventDefault();
    setBellButton(event.currentTarget);
  };
  
  const notificationsListClose = () => {
    setBellButton(null);
  };
  
  const open = Boolean(bellButton);
  const id = open ? 'simple-popover' : undefined;
  
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
        id={id}
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
        {notifications?.length === 0 ?
          <Box sx={styles.boxWrapper}>
            <Typography sx={styles.boxTitle} variant="subtitle1">
              {t('notifications.empty')}
            </Typography>
            <Box sx={{ ...styles.boxImg, backgroundImage: `url(${icons})` }} />
          </Box>
          : <Box sx={styles.wrapper}>
            <Box sx={styles.scrollWrapper}>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error loading notifications</div>}
              { !isLoading &&
                notifications?.map((item) => (
                  <NotificationItem
                    key={item.id}
                    data={item}
                  />
                ))}
            </Box>
          </Box>}
      </Popover>
    </>
  );
};

export default Notification;
