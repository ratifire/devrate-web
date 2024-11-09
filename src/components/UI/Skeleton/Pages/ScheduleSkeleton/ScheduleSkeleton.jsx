import { Box } from '@mui/material';
import React from 'react';
import { styles } from './ScheduleSkeleton.styles';
import SidebarSkeleton from './components/SidebarSkeleton';

const ScheduleSkeleton = () => {
  return (
    <Box>
      <SidebarSkeleton />
    </Box>
  )
}

export default ScheduleSkeleton;
