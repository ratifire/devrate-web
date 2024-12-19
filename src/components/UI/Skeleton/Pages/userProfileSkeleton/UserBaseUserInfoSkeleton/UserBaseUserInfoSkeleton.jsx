import { Box, Skeleton } from '@mui/material';
import { styles } from './UserBaseUserInfoSkeleton.styles';

const UserBaseUserInfoSkeleton = () => {
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
      <Box sx={styles.btnBox}>
        <Skeleton height={45} variant='rounded' width={267} />
        <Skeleton height={45} variant='rounded' width={267} />
      </Box>
    </Box>
  );
};

export default UserBaseUserInfoSkeleton;
