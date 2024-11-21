import React from 'react';
import { styles } from './StepContactsSkeleton.styles';
import { Skeleton } from '@mui/material';
import { BtnSkeleton } from '../components';

const StepContactsSkeleton = () => {
  return (
    <>
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <Skeleton sx={styles.input} variant='rounded' height={56} />
      <BtnSkeleton />
    </>
  );
};

export default StepContactsSkeleton;
