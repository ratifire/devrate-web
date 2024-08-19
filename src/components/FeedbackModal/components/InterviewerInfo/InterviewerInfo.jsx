import { Box, Typography } from '@mui/material';
import { styles } from './InterviewerInfo.styles';
import { useTranslation } from 'react-i18next';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PropTypes from 'prop-types';
import React from 'react';

const InterviewerInfo = ({ name, position, data, time }) => {
  const {t} = useTranslation();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Typography sx={styles.title} >{t('modal.interview.interviewer')}: {name}</Typography>
        <Typography sx={styles.title}>{position}</Typography>
      </Box>
      <Box sx={styles.box}>
        <Typography sx={styles.data}>
          <CalendarTodayIcon sx={styles.icon} />
          {data}
        </Typography>
        <Typography sx={styles.data}>
          <AccessTimeIcon sx={styles.icon} />
          {time}
        </Typography>
      </Box>
    </Box>
  )
}

InterviewerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default InterviewerInfo
