import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from './InterviewerInfo.styles';

const InterviewerInfo = ({ name, position, data, time }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Typography variant='subtitle2'>
          {t('modal.interview.interviewer')}: {name}
        </Typography>
        <Typography variant='caption2'>{position}</Typography>
      </Box>
      <Box sx={styles.box}>
        <Box sx={styles.data}>
          <CalendarTodayIcon sx={styles.icon} />
          <Typography variant='caption1'>{data}</Typography>
        </Box>
        <Box sx={styles.data}>
          <AccessTimeIcon sx={styles.icon} />
          <Typography variant='caption1'>{time}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

InterviewerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default InterviewerInfo;
