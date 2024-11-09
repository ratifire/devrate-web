import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './InterviewChartSkeleton.styles';

const InterviewChartSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton sx={styles.title} variant='rounded' height={28}/>
      <Box sx={styles.box}>
        <Skeleton variant='rounded' width={100} height={21}/>
        <Skeleton variant='rounded' width={100} height={21}/>
      </Box>
      <Skeleton variant='rounded' height={309}/>
    </Box>
  )
};

export default InterviewChartSkeleton;
