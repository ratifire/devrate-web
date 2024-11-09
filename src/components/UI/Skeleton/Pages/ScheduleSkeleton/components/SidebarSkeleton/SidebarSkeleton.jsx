import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './SidebarSkeleton.styles';

const SidebarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton variant='rounded' width={275} height={260} />
    </Box>
  )
}

export default SidebarSkeleton;
