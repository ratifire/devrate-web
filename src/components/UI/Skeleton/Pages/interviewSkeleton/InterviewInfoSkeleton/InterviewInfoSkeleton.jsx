import { Box, Paper, Skeleton } from '@mui/material';
import { styles } from './InterviewInfoSkeleton.styles.js';

const InterviewInfoSkeleton = () => {
  return (
    <Paper sx={styles.interviewInfo}>
      <Box sx={styles.interviewInfoWrapper}>
        <Box sx={styles.interviewInfoTitleWrapper}>
          <Skeleton height={24} variant='text' width={120} />
          <Skeleton height={16} variant='text' width={80} />
        </Box>
        <Skeleton height={16} sx={{ marginBottom: 2 }} variant='text' width={100} />
        <Box sx={styles.interviewSpecializationTitleWrapper}>
          <Skeleton height={24} variant='text' width={150} />
          <Skeleton height={20} variant='text' width={80} />
        </Box>
        <Skeleton height={20} sx={{ marginBottom: 1 }} variant='text' width={180} />
        <Box sx={styles.hostWrapper}>
          <Skeleton height={20} variant='text' width={120} />
        </Box>
        <Skeleton height={16} variant='text' width={200} />
      </Box>
    </Paper>
  );
};

export default InterviewInfoSkeleton;
