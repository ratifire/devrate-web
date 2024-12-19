import { Box } from '@mui/material';
import { styles } from './ScheduleSkeleton.styles';
import SidebarSkeleton from './components/SidebarSkeleton';
import FullCalendarSkeleton from './components/FullCalendarSkeleton';

const ScheduleSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <SidebarSkeleton />
      <FullCalendarSkeleton />
    </Box>
  );
};

export default ScheduleSkeleton;
