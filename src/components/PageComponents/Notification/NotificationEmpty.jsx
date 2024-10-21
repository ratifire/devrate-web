import styles from './Notification.styles';
import { Box, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const NotificationEmpty = ({ icons }) => {
  const { t } = useTranslation();
  return (
    <Box sx={styles.boxWrapper}>
      <Typography sx={styles.boxTitle} variant="subtitle1">
        {t('notifications.empty')}
      </Typography>
      <Box sx={{ ...styles.boxImg, backgroundImage: `url(${icons})` }} />
    </Box>
  );
};
NotificationEmpty.propTypes = {
  icons: PropTypes.string.isRequired,
};
export default NotificationEmpty;