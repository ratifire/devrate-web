import { Box, Skeleton } from '@mui/material';
import { styles } from './SidebarCalendarSkeleton.styles';

const SidebarCalendarSkeleton = () => {
  return (
    <Box>
      <Skeleton height={30} sx={styles.title} variant='rounded' />
      <Skeleton height={280} variant='rounded' />
    </Box>
  );
};

export default SidebarCalendarSkeleton;
