import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './FullCalendarSkeleton.styles';

const FullCalendarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton variant='rounded' width={1064} height={788} />
    </Box>
  )
}

export default FullCalendarSkeleton;
