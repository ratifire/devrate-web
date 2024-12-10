import { Box, Skeleton } from '@mui/material';
import { styles } from './FullCalendarSkeleton.styles';

const FullCalendarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton sx={styles.calendar} variant='rectangular' />
    </Box>
  );
};

export default FullCalendarSkeleton;
