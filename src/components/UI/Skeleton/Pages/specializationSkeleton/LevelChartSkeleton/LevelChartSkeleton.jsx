import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { styles } from './LevelChartSkeleton.styles';

const LevelChartSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton variant='rounded' height={28}/>
      <Skeleton variant='rounded' height={150} />
      <Skeleton variant='rounded' height={20} />
    </Box>
  )
};

export default LevelChartSkeleton;
