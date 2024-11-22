import React from 'react';
import { styles } from './StepPersonalSkeleton.styles';
import { Box, Skeleton } from '@mui/material';
import { BtnSkeleton } from '../components';

const StepPersonalSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton sx={styles.input} variant='rounded' width={334} height={56} />
        <Skeleton sx={styles.input} variant='rounded' width={334} height={56} />
        <Skeleton sx={styles.input} variant='rounded' width={334} height={56} />
        <Skeleton sx={styles.input} variant='rounded' width={334} height={56} />
      </Box>
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.lastElem} variant='rounded' height={171} />
      <BtnSkeleton />
    </>
  );
};

export default StepPersonalSkeleton;
