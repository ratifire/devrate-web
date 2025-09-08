import { Box, Skeleton } from '@mui/material';
import { styles } from './PreviewVideoPassedInterviewSkeleton.styles';

const PreviewVideoPassedInterviewSkeleton = () => {
  return (
    <Box sx={styles.box}>
      <Skeleton height={24} variant='rounded' width={56} />
      <Skeleton height={430} variant='rounded' width={'100%'} />
    </Box>
  );
};

export default PreviewVideoPassedInterviewSkeleton;
