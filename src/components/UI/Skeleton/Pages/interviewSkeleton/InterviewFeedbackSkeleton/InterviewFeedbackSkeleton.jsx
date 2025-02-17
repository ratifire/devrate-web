import { Box, Paper, Skeleton, Typography } from '@mui/material';
import { styles } from './InterviewFeedbackSkeleton.styles.js';

const InterviewFeedbackSkeleton = () => {
  return (
    <Box sx={styles.interviewFeedbackWrapper}>
      <Typography sx={styles.interviewFeedbackTitle} variant='h6'>
        <Skeleton width={200} />
      </Typography>
      <Paper sx={styles.interviewFeedbackText}>
        <Skeleton height={24} variant='text' width='90%' />
        <Skeleton height={24} variant='text' width='85%' />
        <Skeleton height={24} variant='text' width='95%' />
        <Skeleton height={24} variant='text' width='88%' />
        <Skeleton height={24} variant='text' width='99%' />
        <Skeleton height={24} variant='text' width='80%' />
      </Paper>
    </Box>
  );
};

export default InterviewFeedbackSkeleton;
