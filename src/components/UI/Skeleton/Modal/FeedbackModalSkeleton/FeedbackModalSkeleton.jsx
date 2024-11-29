import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { styles } from './FeedbackModalSkeleton.styles';

const FeedbackModalSkeleton = () => {
  return (
    <Box>
      <Skeleton height={32} variant='rounded' width={200} />
      <Box sx={styles.boxContent}>
        <Box sx={styles.flexBetween}>
          <Skeleton height={48} variant='rounded' width={228} />
          <Skeleton height={48} variant='rounded' width={94} />
        </Box>
        <Box sx={styles.box}>
          <Skeleton height={80} variant='rounded' />
          <Skeleton height={32} variant='rounded' width={100} />
          <Box sx={styles.flexBetween}>
            <Skeleton height={48} variant='rounded' width={154} />
            <Skeleton height={48} variant='rounded' width={292} />
          </Box>
          <Box sx={styles.flexBetween}>
            <Skeleton height={48} variant='rounded' width={154} />
            <Skeleton height={48} variant='rounded' width={292} />
          </Box>
          <Box sx={styles.flexBetween}>
            <Skeleton height={48} variant='rounded' width={154} />
            <Skeleton height={48} variant='rounded' width={292} />
          </Box>
        </Box>
        <Skeleton height={44} variant='rounded' width={228} />
      </Box>
    </Box>
  );
};

export default FeedbackModalSkeleton;
