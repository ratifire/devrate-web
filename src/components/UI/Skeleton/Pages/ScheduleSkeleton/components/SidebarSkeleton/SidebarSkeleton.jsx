import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './SidebarSkeleton.styles';

const SidebarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={30} sx={styles.title} variant='rectangular' />
      <Skeleton height={210} variant='rectangular' />
    </Box>
  );
};

export default SidebarSkeleton;
