import { Box, Skeleton } from '@mui/material';
import { ChangeEmailAndPasswordSkeletonStyles as styles } from '@components/UI/Skeleton/Pages/settingsSkeleton/generalSkeleton/styles/index.js';

const ChangePasswordSkeleton = () => {
  return (
    <>
      <>
        <Skeleton height={32} variant='rounded' width='30%' />
        <Box sx={styles.container}>
          <Skeleton height={56} variant='rounded' />
          <Skeleton height={56} variant='rounded' />
          <Skeleton height={56} variant='rounded' />
          <Box sx={styles.box}>
            <Skeleton height={50} sx={styles.btn} variant='rounded' />
            <Skeleton height={50} sx={styles.btn} variant='rounded' />
          </Box>
        </Box>
      </>
    </>
  );
};

export default ChangePasswordSkeleton;
