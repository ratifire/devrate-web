import { Box, Skeleton } from '@mui/material';
import { styles } from './InterviewsSkeleton.styles';

const InterviewsSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={152} variant='rounded' />
      <Skeleton height={152} variant='rounded' />
      <Skeleton height={152} variant='rounded' />
    </Box>
  );
};

export default InterviewsSkeleton;
