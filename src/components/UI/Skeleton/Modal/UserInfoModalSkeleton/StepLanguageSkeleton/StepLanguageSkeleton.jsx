import React from 'react';
import { styles } from './StepLanguageSkeleton.styles';
import { Box, Skeleton } from '@mui/material';
import { BtnSkeleton } from '../components';

const StepLanguageSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton variant='rounded' width={302} height={56} />
        <Skeleton variant='rounded' width={302} height={56} />
        <Skeleton variant='rounded' width={56} height={56} />
      </Box>
      <Box sx={styles.boxLabel}>
        <Skeleton variant='rounded' width={158} height={34} />
        <Skeleton variant='rounded' width={141} height={34} />
        <Skeleton variant='rounded' width={178} height={34} />
      </Box>
      <BtnSkeleton />
    </>
  );
};

export default StepLanguageSkeleton;
