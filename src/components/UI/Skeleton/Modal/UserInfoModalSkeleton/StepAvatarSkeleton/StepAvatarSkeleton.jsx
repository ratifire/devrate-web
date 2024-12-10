import { Box, Skeleton } from '@mui/material';
import { styles } from './StepAvatarSkeleton.styles';

const StepAvatarSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton height={336} variant='rounded' width={336} />
        <Skeleton height={336} variant='rounded' width={336} />
      </Box>
      <Box sx={styles.btnBox}>
        <Skeleton height={44} variant='rounded' width={228} />
        <Skeleton height={44} variant='rounded' width={44} />
      </Box>
    </>
  );
};

export default StepAvatarSkeleton;
