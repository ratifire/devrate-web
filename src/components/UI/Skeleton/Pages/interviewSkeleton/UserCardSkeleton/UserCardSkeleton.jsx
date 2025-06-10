import { Box, Skeleton } from '@mui/material';
import { styles } from './UserCardSkeleton.styles.js';

const UserCardSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton height={'132px'} sx={{ borderRadius: 2 }} variant='rectangular' width={'132px'} />
        <Box sx={styles.boxInfo}>
          <Skeleton height={32} variant='rounded' />
          <Skeleton height={24} variant='rounded' />
          <Skeleton height={24} variant='rounded' />
          <Skeleton height={28} variant='rounded' />
        </Box>
      </Box>
    </Box>
  );
};

export default UserCardSkeleton;
