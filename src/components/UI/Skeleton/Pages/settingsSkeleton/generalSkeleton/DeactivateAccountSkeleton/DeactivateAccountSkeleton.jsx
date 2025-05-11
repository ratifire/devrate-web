import { Box, Skeleton } from '@mui/material';
import { styles } from './DeactivateAccountSkeleton.styles';

const DeactivateAccountSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton height={32} variant='rounded' width='35%' />
        <Skeleton height={32} variant='rounded' width={32} />
      </Box>
      <Skeleton height={24} variant='rounded' />
    </>
  );
};

export default DeactivateAccountSkeleton;
