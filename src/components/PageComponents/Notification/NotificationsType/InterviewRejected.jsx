import React from 'react';
import styles from '../NotificationItem/NotificationItem.styles';
import { Box, Typography } from '@mui/material';
import TimeAgo from '../../../UI/TimeAgo';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const InterviewRejected = ({ createAt, payload }) => {
  const { t } = useTranslation();
  const { userFirstName } = JSON.parse(payload);
  
  console.log(userFirstName);
  return (
    <>
      <Box sx={styles.iconWrapper}>
        <InfoOutlined />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant="body">
          {t('notifications.interviewRejected')}
        </Typography>
        <Typography sx={styles.date} variant="body2">
          <TimeAgo data={createAt} />
        </Typography>
      </Box>
    </>
  );
};

InterviewRejected.propTypes = {
  createAt: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default InterviewRejected;