import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { styles } from './LevelSkeleton.styles';

const LevelSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={30} variant='rounded' />
      <Skeleton height={50} variant='rounded' />
      <Skeleton height={40} variant='rounded' />
    </Box>
  );
};

export default LevelSkeleton;
