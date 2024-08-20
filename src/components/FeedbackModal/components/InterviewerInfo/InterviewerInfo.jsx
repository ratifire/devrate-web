import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { styles } from './InterviewerInfo.styles'
import { DataTimeTitleFeedback, PositionTitle, SubtitleFeedback } from '../Titles';

const InterviewerInfo = ({ name, position, data, time }) => {
  const { t } = useTranslation();
  const interviewerName = `${t('modal.interview.interviewer')}: ${name}`

  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <SubtitleFeedback title={interviewerName} variant={'h4'}/>
        <PositionTitle variant={'h5'} title={position}/>
      </Box>
      <Box sx={styles.box}>
        <Box sx={styles.data}>
          <CalendarTodayIcon sx={styles.icon} />
          <DataTimeTitleFeedback title={data} variant={'subtitle2'}/>
        </Box>
        <Box sx={styles.data}>
          <AccessTimeIcon sx={styles.icon} />
          <DataTimeTitleFeedback title={time} variant={'subtitle2'}/>
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
