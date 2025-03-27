import { Box, Skeleton } from '@mui/material';
import { styles } from './CalendarSkeleton.styles.js';

const CalendarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton sx={styles.calendar} variant='rectangular' />
    </Box>
  );
};

export default CalendarSkeleton;
