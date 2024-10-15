import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { styles } from './FeedbackModalSkeleton.styles';

const FeedbackModalSkeleton = () => {
  return (
    <Box>
      <Skeleton variant='rounded' height={32} width={200}/>
      <Box sx={styles.boxContent}>
        <Box sx={styles.flexBetween}>
          <Skeleton variant='rounded' width={228} height={48}/>
          <Skeleton variant='rounded' width={94} height={48}/>
        </Box>
        <Box sx={styles.box}>
          <Skeleton variant='rounded' height={80}/>
          <Skeleton variant='rounded' height={32} width={100}/>
          <Box sx={styles.flexBetween}>
            <Skeleton variant='rounded' width={154} height={48}/>
            <Skeleton variant='rounded' width={292} height={48}/>
          </Box>
          <Box sx={styles.flexBetween}>
            <Skeleton variant='rounded' width={154} height={48}/>
            <Skeleton variant='rounded' width={292} height={48}/>
          </Box>
          <Box sx={styles.flexBetween}>
            <Skeleton variant='rounded' width={154} height={48}/>
            <Skeleton variant='rounded' width={292} height={48}/>
          </Box>
        </Box>
        <Skeleton variant='rounded' width={228} height={44}/>
      </Box>
    </Box>
  )
}

export default FeedbackModalSkeleton;
