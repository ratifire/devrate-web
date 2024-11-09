import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { styles } from './InterviewsSkeleton.styles';

const InterviewsSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton variant='rounded' width='100%' height={32} />
        <Skeleton variant='rounded' width='100%' height={24} />
        <Skeleton variant='rounded' width='100%' height={24} />
      </Box>
      <Skeleton variant='rounded' width='100%' height={44} />
    </Box>
  );
};

export default InterviewsSkeleton;
