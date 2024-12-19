import { Box, Skeleton } from '@mui/material';
import { styles } from './UserRightSectionSkeleton.styles';

const UserRightSectionSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.titleBox}>
        <Skeleton height={32} variant='rounded' width='100%' />
      </Box>
      <Skeleton height={50} sx={styles.contacts} variant='rounded' />
      <Box sx={styles.titleBox}>
        <Skeleton height={32} variant='rounded' width='100%' />
      </Box>
      <Skeleton height={120} sx={styles.contacts} variant='rounded' />
      <Skeleton height={32} sx={styles.title} variant='rounded' />
      <Skeleton height={196} variant='rounded' />
    </Box>
  );
};

export default UserRightSectionSkeleton;
