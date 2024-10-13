import React from 'react';
import { Box, Chip, IconButton, Typography } from '@mui/material';
import styles from './NotificationItem.styles';
import PropTypes from 'prop-types';
import Sms from '@mui/icons-material/SmsOutlined';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import ErrorRounded from '@mui/icons-material/ErrorRounded';
import Close from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useDeleteNotificationMutation, useMarkAsReadMutation } from '../../../../redux/services/notificationsApiSlice';
import TimeAgo from '../../../UI/TimeAgo';
import { useTranslation } from 'react-i18next';

const iconMap = {
  INTERVIEW_REQUEST_EXPIRED: <Sms />,
  INTERVIEW_REJECTED: <InfoOutlined />,
  INTERVIEW_SCHEDULED: <ErrorRounded />,
  GREETING: <ErrorRounded />,
};

const NotificationItem = ({ data }) => {
  const { t } = useTranslation();
  
  const { id, type, read, createAt, payload } = data;
  const payloadObj = JSON.parse(payload);
  const {role,scheduledDateTime} = payloadObj;
  
  const currentUser = useSelector(selectCurrentUser);
  
  const [markAsRead] = useMarkAsReadMutation();
  const [deleteNotification] = useDeleteNotificationMutation();
  
  const markAsReadClickHandler = () => {
    markAsRead({
      notificationId: id,
      userId: currentUser.data.id,
    });
  };
  
  const deleteBtnClickHandler = () => {
    deleteNotification({
      notificationId: id,
      userId: currentUser.data.id,
    });
  };
  
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.iconWrapper}>
        {iconMap[type || 'info']}
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant="body">{role } {scheduledDateTime}</Typography>
        <Typography sx={styles.date} variant="body2">
          <TimeAgo data={createAt}/>
        </Typography>
      </Box>
      <Box sx={styles.actionWrapper}>
        <IconButton sx={styles.closeBtn} onClick={deleteBtnClickHandler}>
          <Close />
        </IconButton>
        { !read && <Chip label={t('notifications.newNotifications')} sx={styles.badge} onClick={markAsReadClickHandler} />}
      </Box>
    </Box>
  );
};

NotificationItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NotificationItem;
