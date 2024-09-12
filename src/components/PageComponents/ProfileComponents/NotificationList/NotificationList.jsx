import React, { useState } from 'react';
import { Badge, Box, IconButton, Popover } from '@mui/material';
import Notification from './Notification';
import { ReactComponent as BellNotification } from '../../../../assets/icons/bell.svg';
import PropTypes from 'prop-types';
import styles from './NotificationList.styles';
import {useSocket} from "../../../../utils/hooks/useSocket"; // import { ReactComponent as LoupeSearch } from '../../../assets/icons/loupe.svg';

const NotificationList = () => {
  const [bellButton, setBellButton] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const bellButtonClickHandler = (event) => {
    event.preventDefault();

    setBellButton(event.currentTarget);
  };

  const openSocketHandler = event => {
    event.target.addEventListener('message', ({data}) => {
      const json = JSON.parse(data);
      setNotifications(json)
    })
  };

  useSocket('/ws/notifications', openSocketHandler);

  const notificationsListClose = () => {
    setBellButton(null);
  };

  const open = Boolean(bellButton);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton onClick={bellButtonClickHandler}>
        <Badge
          color='error'
          overlap='circular'
          badgeContent=' '
          variant='dot'
          invisible={!notifications?.length}
        >
          <BellNotification />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open && Boolean(notifications?.length)}
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
      >
        <Box sx={styles.wrapper}>
          <Box sx={styles.scrollWrapper}>
            {notifications.map((item) => {
              return (
                <Notification
                  key={`notification-${item.id}`}
                  type={item.type}
                  id={item.id}
                  date={item.date}
                  read={item.read}
                  text={item.text}
                />
              );
            })}
          </Box>
        </Box>
      </Popover>
    </>
  );
};

NotificationList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default NotificationList;
