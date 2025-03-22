import { SidebarEventSkeleton, SidebarCalendarSkeleton } from '@components/UI/Skeleton/Pages/ScheduleSkeleton/index';
import { Box } from '@mui/material';
import { styles } from './SidebarSkeleton.styles';

const SidebarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <SidebarCalendarSkeleton />
      <SidebarEventSkeleton />
    </Box>
  );
};

export default SidebarSkeleton;
