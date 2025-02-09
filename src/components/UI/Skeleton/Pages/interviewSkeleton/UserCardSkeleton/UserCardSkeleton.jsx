import { Box, Skeleton } from '@mui/material';
import { styles } from './UserCardSkeleton.styles.js';

const UserCardSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton height={64} sx={{ borderRadius: 2 }} variant='rectangular' width={64} />
        <Box sx={styles.boxInfo}>
          <Skeleton height={24} variant='text' width={120} />
          <Skeleton height={20} variant='text' width={100} />
          <Skeleton height={20} variant='text' width={80} />
          <Skeleton height={18} variant='text' width={60} />
        </Box>
      </Box>
      <Skeleton height={40} sx={styles.btn} variant='rounded' />
    </Box>
  );
};

export default UserCardSkeleton;
