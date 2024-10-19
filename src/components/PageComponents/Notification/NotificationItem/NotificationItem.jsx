import React from 'react';
import styles from './NotificationItem.styles';
import { Box, Chip, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Close from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useDeleteNotificationMutation, useMarkAsReadMutation } from '../../../../redux/services/notificationsApiSlice';
import { useTranslation } from 'react-i18next';
import { Greeting, InterviewFeedback, InterviewScheduled } from '../NotificationsType';
import InterviewRejected from '../NotificationsType/InterviewRejected';
import InterviewRequestExpired from '../NotificationsType/InterviewRequestExpired';

const NotificationItem = ({ data }) => {
  const { t } = useTranslation();
  
  const { id, type, read: isRead, createAt, payload } = data;
  
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
  
  const typeMessages = {
    GREETING: <Greeting createAt={createAt} />,
    INTERVIEW_FEEDBACK: <InterviewFeedback createAt={createAt} payload={payload} />,
    INTERVIEW_SCHEDULED: <InterviewScheduled createAt={createAt} payload={payload} />,
    INTERVIEW_REQUEST_EXPIRED: <InterviewRejected createAt={createAt} payload={payload} />,
    INTERVIEW_REJECTED: <InterviewRequestExpired createAt={createAt} />,
  };
  
  return (
    <Box sx={styles.wrapper}>
      {typeMessages[type]}
      <Box sx={styles.actionWrapper}>
        <IconButton sx={styles.closeBtn} onClick={deleteBtnClickHandler}>
          <Close />
        </IconButton>
        { !isRead &&
          <Chip label={t('notifications.newNotifications')} sx={styles.badge} onClick={markAsReadClickHandler} />}
      </Box>
    </Box>
  );
};

NotificationItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NotificationItem;
