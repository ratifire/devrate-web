import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './SidebarSkeleton.styles';

const SidebarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton sx={styles.title} variant='rectangular' height={30} />
      <Skeleton sx={styles.calendar} variant='rectangular' height={230} />
    </Box>
  )
}

export default SidebarSkeleton;
