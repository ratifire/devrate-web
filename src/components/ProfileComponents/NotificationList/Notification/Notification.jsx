import React, {useEffect} from 'react';
import { Box, Chip, IconButton, Typography } from '@mui/material';
import styles from './Notification.styles';
import PropTypes from 'prop-types';
import Sms from '@mui/icons-material/SmsOutlined';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import ErrorRounded from '@mui/icons-material/ErrorRounded';
import Close from '@mui/icons-material/Close';
import {useMarkAsReadMutation} from "../../../../redux/auth/notificationsApiSlice";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../../redux/auth/authSlice";

const iconMap = {
  message: <Sms />,
  info: <InfoOutlined />,
  warning: <ErrorRounded />,
};

const Notification = (props) => {
  const currentUser = useSelector(selectCurrentUser);
  const [markAsRead] = useMarkAsReadMutation();

  useEffect(() => {


    markAsRead({
        notificationId: props.id,
        userId: currentUser.data.id,
      });
  }, []);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.iconWrapper}>{iconMap[props.type || 'info'] || <InfoOutlined />}</Box>

      <Box sx={styles.textWrapper}>
        <Typography variant='subtitle2'>{props.text}</Typography>
        {props.date && <Typography sx={styles.date} variant='subtitle3'>
          {props.date}
        </Typography>}
      </Box>

      <Box sx={styles.actionWrapper}>
        <IconButton sx={styles.closeBtn}>
          <Close />
        </IconButton>

        {!props.read && <Chip label='Нове' sx={styles.badge} />}
      </Box>
    </Box>
  );
};

Notification.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number.isRequired,
  read: PropTypes.bool,
  date: PropTypes.string,
};

export default Notification;
