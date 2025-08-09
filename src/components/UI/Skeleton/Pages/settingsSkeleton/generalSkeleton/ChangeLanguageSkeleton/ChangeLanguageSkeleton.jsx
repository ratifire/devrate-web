import { ChangeEmailAndPasswordSkeletonStyles as styles } from '@components/UI/Skeleton/Pages/settingsSkeleton/generalSkeleton/styles';
import { Box, Skeleton } from '@mui/material';

const ChangeLanguageSkeleton = () => {
  return (
    <>
      <Skeleton height={32} variant='rounded' width='30%' />
      <Box sx={styles.container}>
        <Skeleton height={56} variant='rounded' />
      </Box>
    </>
  );
};

export default ChangeLanguageSkeleton;
