import React from 'react';
import { styles } from './StepAvatarSkeleton.styles';
import { Box, Skeleton } from '@mui/material';

const StepAvatarSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton variant='rounded' width={336} height={336} />
        <Skeleton variant='rounded' width={336} height={336} />
      </Box>
      <Box sx={styles.btnBox}>
        <Skeleton variant='rounded' width={228} height={44} />
        <Skeleton variant='rounded' width={44} height={44} />
      </Box>
    </>
  );
};

export default StepAvatarSkeleton;