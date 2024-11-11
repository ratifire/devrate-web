import { Box, Skeleton } from '@mui/material';
import { styles } from './LevelSkeleton.styles';
import React from 'react';

const LevelSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton variant='rounded' height={30} />
      <Skeleton variant='rounded' height={50} />
      <Skeleton variant='rounded' height={40} />
    </Box>
  )
}

export default LevelSkeleton;
