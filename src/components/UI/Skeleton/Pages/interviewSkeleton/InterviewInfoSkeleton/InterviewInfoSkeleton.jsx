import { Box, Skeleton } from '@mui/material';
import { styles } from './InterviewInfoSkeleton.styles.js';

const InterviewInfoSkeleton = () => {
  return (
    <Box sx={styles.interviewInfoWrapper}>
      <Box sx={styles.interviewInfoTitleWrapper}>
        <Box width='50%'>
          <Skeleton height={32} variant='rounded' width='100%' />
          <Skeleton height={24} width='45%' />
        </Box>
        <Skeleton height={24} variant='rounded' width='35%' />
      </Box>
      <Skeleton height={1} sx={styles.line} variant='rounded' width='100%' />
      <Box sx={styles.interviewSpecializationTitleWrapper}>
        <Skeleton height={32} variant='rounded' width='40%' />
        <Skeleton height={28} variant='rounded' width='18%' />
      </Box>
      <Skeleton height={24} sx={styles.interviewRole} variant='rounded' width='40%' />
      <Box sx={styles.hostWrapper}>
        <Skeleton height={24} variant='rounded' width='40%' />
      </Box>
      <Skeleton height={17} variant='rounded' width='40%' />
    </Box>
  );
};

export default InterviewInfoSkeleton;
