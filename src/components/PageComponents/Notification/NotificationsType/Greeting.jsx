import React from 'react';
import styles from '../NotificationItem/NotificationItem.styles';
import { Box, Typography } from '@mui/material';
import TimeAgo from '../../../UI/TimeAgo';
import Sms from '@mui/icons-material/SmsOutlined';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Greeting = ({ createAt }) => {
  const { t } = useTranslation();
  
  return (
    <>
      <Box sx={styles.iconWrapper}>
        <Sms />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant="body">
          {t('notifications.greeting')}
        </Typography>
        <Typography sx={styles.date} variant="body2">
          <TimeAgo data={createAt} />
        </Typography>
      </Box>
    </>
  );
};

Greeting.propTypes = {
  createAt: PropTypes.string.isRequired,
};
export default Greeting;