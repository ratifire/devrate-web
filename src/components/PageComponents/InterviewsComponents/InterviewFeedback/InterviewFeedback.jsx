import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import useOverflowCheck from '../../../../utils/hooks/useOverflowCheck.js';
import { styles } from './InterviewFeedback.styles.js';

const MAX_FEEDBACK_LENGTH = 420;

const InterviewFeedback = ({ feedbackText }) => {
  const [expanded, setExpanded] = useState(false);
  const isLongText = feedbackText?.length > MAX_FEEDBACK_LENGTH;
  const displayedText = expanded || !isLongText ? feedbackText : feedbackText.slice(0, MAX_FEEDBACK_LENGTH);
  const { textRef } = useOverflowCheck(displayedText);

  return (
    <Box sx={styles.interviewFeedbackWrapper}>
      <Typography sx={styles.interviewFeedbackTitle} variant='h6'>
        Interviewee&#39;s feedback
      </Typography>
      <Paper sx={styles.interviewFeedbackText}>
        <Typography ref={textRef} component='span'>
          {displayedText}
        </Typography>
        {isLongText && (
          <Typography component='span' sx={styles.readMoreText} onClick={() => setExpanded(!expanded)}>
            {expanded ? ' Read less' : ' Read more...'}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default InterviewFeedback;
InterviewFeedback.propTypes = {
  feedbackText: PropTypes.string,
};

InterviewFeedback.defaultProps = {
  feedbackText: '',
};
