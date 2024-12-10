import { Box, Skeleton } from '@mui/material';
import { styles } from './BaseUserInfoSkeleton.styles';

const BaseUserInfoSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxAvatar}>
        <Skeleton height={152} variant='rounded' width={152} />
        <Box sx={styles.boxInfo}>
          <Box sx={styles.boxName}>
            <Skeleton height={30} variant='rounded' width='100%' />
            <Skeleton height={30} variant='rounded' width={34} />
          </Box>
          <Skeleton height={32} variant='rounded' />
          <Skeleton height={28} variant='rounded' />
        </Box>
      </Box>
      <Skeleton height={44} variant='rounded' width='100' />
    </Box>
  );
};

export default BaseUserInfoSkeleton;
