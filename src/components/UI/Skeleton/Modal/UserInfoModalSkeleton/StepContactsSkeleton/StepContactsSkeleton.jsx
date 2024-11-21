import React from 'react';
import { styles } from './StepContactsSkeleton.styles';
import { Skeleton } from '@mui/material';

const StepContactsSkeleton = () => {
  return (
    <>
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.btn} height={44} variant='rounded'/>
    </>
  );
};

export default StepContactsSkeleton;
