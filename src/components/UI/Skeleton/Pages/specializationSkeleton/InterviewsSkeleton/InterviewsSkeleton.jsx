import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { styles } from './InterviewsSkeleton.styles';

const InterviewsSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton height={32} variant='rounded' width='100%' />
        <Skeleton height={24} variant='rounded' width='100%' />
        <Skeleton height={24} variant='rounded' width='100%' />
      </Box>
      <Skeleton height={44} variant='rounded' width='100%' />
    </Box>
  );
};

export default InterviewsSkeleton;
