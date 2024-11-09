import React from 'react';
import { Box, Skeleton } from '@mui/material';

const SidebarSkeleton = () => {
  return (
    <Box>
      <Skeleton variant='rounded' width={300} height={100} />
    </Box>
  )
}

export default SidebarSkeleton;
