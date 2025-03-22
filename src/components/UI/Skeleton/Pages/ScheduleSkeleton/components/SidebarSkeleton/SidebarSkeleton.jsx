import { Box, Skeleton } from '@mui/material';
import { styles } from './SidebarSkeleton.styles';

const SidebarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={30} sx={styles.title} variant='rounded' />
      <Skeleton height={280} variant='rounded' />
    </Box>
  );
};

export default SidebarSkeleton;
