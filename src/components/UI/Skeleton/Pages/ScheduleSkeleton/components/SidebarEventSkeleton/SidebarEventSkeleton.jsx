import { Box, Skeleton } from '@mui/material';
import { styles } from './SidebarEventSkeleton.styles';

const SidebarEventSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton height={32} variant='rounded' width='100%' />
        <Skeleton height={32} variant='rounded' width='100%' />
      </Box>
      <Skeleton height={20} variant='rounded' />
      <Skeleton height={20} variant='rounded' />
      <Box sx={styles.box}>
        <Skeleton height={40} variant='rounded' width='20%' />
        <Skeleton height={40} variant='rounded' width='70%' />
      </Box>
    </Box>
  );
};

export default SidebarEventSkeleton;
