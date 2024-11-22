import React from 'react';
import { styles } from './BtnSkeleton.styles';
import { Skeleton } from '@mui/material';

const BtnSkeleton = () => {
  return <Skeleton sx={styles.btn} height={44} variant='rounded' />;
};

export default BtnSkeleton;
