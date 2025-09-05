import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useOverflowCheck from '@utils/hooks/useOverflowCheck';
import { useLocation } from 'react-router';
import { styles } from './PassedInterviewFeedback.styles.js';

const MAX_FEEDBACK_LENGTH = 420;

const PassedInterviewFeedback = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const interviewData = location.state.event;
  const { feedback } = interviewData;
  const isLongText = feedback?.length > MAX_FEEDBACK_LENGTH;
  const displayedText = expanded || !isLongText ? feedback : feedback.slice(0, MAX_FEEDBACK_LENGTH);

  const { textRef } = useOverflowCheck(displayedText);

  const handleShowMore = () => setExpanded((prev) => !prev);

  return (
    <Box sx={styles.interviewFeedbackWrapper}>
      <Typography sx={styles.interviewFeedbackTitle} variant='h6'>
        {t('interviews.passedInterviews.interviewFeedbackTitle')}
      </Typography>
      <Paper sx={styles.interviewFeedbackText}>
        <Typography ref={textRef} component='span'>
          {displayedText}
        </Typography>
        {isLongText && (
          <Typography component='span' sx={styles.readMoreText} onClick={handleShowMore}>
            expanded ? {t('interviews.passedInterviews.interviewFeedbackReadLess')}
            {'...'}: {t('interviews.passedInterviews.interviewFeedbackReadMore')}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default PassedInterviewFeedback;
