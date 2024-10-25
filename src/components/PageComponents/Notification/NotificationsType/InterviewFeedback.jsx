import React from 'react';
import styles from '../NotificationItem/NotificationItem.styles';
import { Box,  Typography } from '@mui/material';
import TimeAgo from '../../../UI/TimeAgo';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const InterviewFeedback = ({ createAt, payload }) => {
  const { t } = useTranslation();
  const { feedbackId } = JSON.parse(payload); // Херня где приходит ID

  const handleClick = () => {

  }

  return (
    <>
      <Box sx={styles.iconWrapper}>
        <InfoOutlined />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant="body">
          {t('notifications.interviewFeedback')} {feedbackId}
          <Typography onClick={handleClick} variant="body" sx={styles.btn}>
              {t('notifications.feedbackBtn')}
          </Typography>
        </Typography>
        <Typography sx={styles.date} variant="body2">
          <TimeAgo data={createAt} />
        </Typography>
      </Box>
    </>
  );
};

InterviewFeedback.propTypes = {
  createAt: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default InterviewFeedback;