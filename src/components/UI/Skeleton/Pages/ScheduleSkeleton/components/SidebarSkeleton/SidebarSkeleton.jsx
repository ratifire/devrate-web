import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './SidebarSkeleton.styles';

const SidebarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton sx={styles.title} variant='rounded' width={320} height={30} />
      <Skeleton width={320} height={310}/>
    </Box>
  )
}

export default SidebarSkeleton;
