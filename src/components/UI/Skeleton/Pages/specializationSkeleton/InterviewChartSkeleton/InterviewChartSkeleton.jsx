import { Box, Skeleton } from '@mui/material';
import { styles } from './InterviewChartSkeleton.styles';

const InterviewChartSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={28} sx={styles.title} variant='rounded' />
      <Box sx={styles.box}>
        <Skeleton height={21} variant='rounded' width={100} />
        <Skeleton height={21} variant='rounded' width={100} />
      </Box>
      <Skeleton height={270} variant='rounded' />
    </Box>
  );
};

export default InterviewChartSkeleton;
