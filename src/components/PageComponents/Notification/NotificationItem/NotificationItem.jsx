import { Box, Chip, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Close from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { useDeleteNotificationMutation, useMarkAsReadMutation } from '@redux/api/slices/notificationsApiSlice.js';
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

  const formatDate = (dateString) => {
    const date = new Date(dateString + 'Z');
    return date
      .toLocaleString('uk-UA', {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      .replace(/, /g, ' ');
  };

  const formattedDate = formatDate(createdAt);

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
    GREETING: <Greeting formattedDate={formattedDate} />,
    INTERVIEW_FEEDBACK: <InterviewFeedback formattedDate={formattedDate} payload={payload} />,
    INTERVIEW_SCHEDULED: <InterviewScheduled formattedDate={formattedDate} payload={payload} />,
    INTERVIEW_REQUEST_EXPIRED: <InterviewRequestExpired formattedDate={formattedDate} payload={payload} />,
    INTERVIEW_REJECTED: <InterviewRejected formattedDate={formattedDate} payload={payload} />,
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
