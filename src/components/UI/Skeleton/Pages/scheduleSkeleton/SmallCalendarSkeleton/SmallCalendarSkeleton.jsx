import { Box, Skeleton } from '@mui/material';
import { styles } from './SmallCalendarSkeleton.styles';

const SmallCalendarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={40} sx={styles.title} variant='rounded' />
      <Skeleton height={273} variant='rounded' />
    </Box>
  );
};

export default SmallCalendarSkeleton;
