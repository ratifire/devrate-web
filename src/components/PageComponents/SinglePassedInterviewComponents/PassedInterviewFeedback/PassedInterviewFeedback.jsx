import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useOverflowCheck from '@utils/hooks/useOverflowCheck';
import { useParams } from 'react-router';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice';
import { InterviewFeedbackSkeleton } from '@components/UI/Skeleton';
import { ErrorComponent } from '@components/UI/Exceptions';
import { styles } from './PassedInterviewFeedback.styles.js';

const MAX_FEEDBACK_LENGTH = 420;

const PassedInterviewFeedback = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  const { interviewId } = useParams();
  const {
    data: interviewData,
    isFetching: isFetchingPassedInterview,
    isError: isErrorPassedInterview,
  } = useGetPassedInterviewByIdQuery({ interviewId }, { skip: !interviewId });
  const { feedback = '' } = interviewData ?? {};

  const isLongText = feedback?.length > MAX_FEEDBACK_LENGTH;
  const displayedText = expanded || !isLongText ? feedback : feedback.slice(0, MAX_FEEDBACK_LENGTH);

  const { textRef } = useOverflowCheck(displayedText);

  if (isFetchingPassedInterview) {
    return <InterviewFeedbackSkeleton />;
  }

  if (isErrorPassedInterview) {
    return <ErrorComponent />;
  }

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
