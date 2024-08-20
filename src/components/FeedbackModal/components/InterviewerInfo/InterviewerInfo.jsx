import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTimeTitleFeedback, PositionTitle, SubtitleFeedback } from '../../components';
import { styles } from './InterviewerInfo.styles';

const InterviewerInfo = ({ name, position, data, time }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <SubtitleFeedback title={`${t('modal.interview.interviewer')}: ${name}`} variant={'h4'} />
        <PositionTitle variant={'h5'} title={position} />
      </Box>
      <Box sx={styles.box}>
        <Box sx={styles.data}>
          <CalendarTodayIcon sx={styles.icon} />
          <DataTimeTitleFeedback title={data} variant={'subtitle2'} />
        </Box>
        <Box sx={styles.data}>
          <AccessTimeIcon sx={styles.icon} />
          <DataTimeTitleFeedback title={time} variant={'subtitle2'} />
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
