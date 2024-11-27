import React from 'react';
import { Box, Chip, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Close from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useDeleteNotificationMutation, useMarkAsReadMutation } from '../../../../redux/services/notificationsApiSlice';
import { Greeting, InterviewFeedback, InterviewScheduled } from '../NotificationsType';
import InterviewRejected from '../NotificationsType/InterviewRejected';
import InterviewRequestExpired from '../NotificationsType/InterviewRequestExpired';
import styles from './NotificationItem.styles';

const NotificationItem = ({ data }) => {
  const { t } = useTranslation();

  const { id, type, read: isRead, createdAt, payload } = data;

  const { data: currentUser } = useSelector(selectCurrentUser);

  const [markAsRead] = useMarkAsReadMutation();
  const [deleteNotification] = useDeleteNotificationMutation();

  const markAsReadClickHandler = () => {
    markAsRead({
      notificationId: id,
      userId: currentUser.id,
    });
  };

  const deleteBtnClickHandler = () => {
    deleteNotification({
      notificationId: id,
      userId: currentUser.id,
    });
  };

  const typeMessages = {
    GREETING: <Greeting createAt={createdAt} />,
    INTERVIEW_FEEDBACK: <InterviewFeedback createAt={createdAt} payload={payload} />,
    INTERVIEW_SCHEDULED: <InterviewScheduled createAt={createdAt} payload={payload} />,
    INTERVIEW_REQUEST_EXPIRED: <InterviewRejected createAt={createdAt} payload={payload} />,
    INTERVIEW_REJECTED: <InterviewRequestExpired createAt={createdAt} />,
  };

  return (
    <Box sx={styles.wrapper}>
      {typeMessages[type]}
      <Box sx={styles.actionWrapper}>
        <IconButton sx={styles.closeBtn} onClick={deleteBtnClickHandler}>
          <Close />
        </IconButton>
        {!isRead && (
          <Chip label={t('notifications.newNotifications')} sx={styles.badge} onClick={markAsReadClickHandler} />
        )}
      </Box>
    </Box>
  );
};

NotificationItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    payload: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotificationItem;
