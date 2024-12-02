import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { styles } from './LevelChartSkeleton.styles';

const LevelChartSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={28} variant='rounded' />
      <Skeleton height={150} variant='rounded' />
      <Skeleton height={20} variant='rounded' />
    </Box>
  );
};

export default LevelChartSkeleton;
