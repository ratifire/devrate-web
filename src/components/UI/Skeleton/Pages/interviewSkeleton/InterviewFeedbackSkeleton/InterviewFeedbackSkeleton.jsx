import { Box, Skeleton } from '@mui/material';
import { styles } from './InterviewFeedbackSkeleton.styles.js';

const InterviewFeedbackSkeleton = () => {
  return (
    <Box sx={styles.interviewFeedbackWrapper}>
      <Skeleton height={32} sx={styles.interviewFeedbackTitle} width={200} />
      <Box sx={styles.interviewFeedbackText}>
        <Skeleton height={24} variant='text' width='90%' />
        <Skeleton height={24} variant='text' width='85%' />
        <Skeleton height={24} variant='text' width='95%' />
        <Skeleton height={24} variant='text' width='88%' />
        <Skeleton height={24} variant='text' width='99%' />
        <Skeleton height={24} variant='text' width='80%' />
      </Box>
    </Box>
  );
};

export default InterviewFeedbackSkeleton;
