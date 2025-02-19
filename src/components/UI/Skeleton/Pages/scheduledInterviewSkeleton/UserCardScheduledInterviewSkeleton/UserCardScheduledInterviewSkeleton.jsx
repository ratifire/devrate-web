import { Box, Skeleton } from '@mui/material';
import { styles } from './UserCardScheduledInterviewSkeleton.styles';

const UserCardScheduledInterviewSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Skeleton height={132} sx={styles.img} variant='rounded' />
        <Box sx={styles.box}>
          <Skeleton height={32} variant='rounded' />
          <Skeleton height={24} variant='rounded' />
          <Skeleton height={24} variant='rounded' />
          <Skeleton height={28} variant='rounded' />
        </Box>
      </Box>
      <Skeleton height={44} variant='rounded' />
    </Box>
  );
};

export default UserCardScheduledInterviewSkeleton;
