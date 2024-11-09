import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './SkillsSkeleton.styles';

const SkillsSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton variant='rounded' height={34} />
      <Skeleton variant='rounded' height={312}/>
      <Skeleton variant='rounded' height={32} />
    </Box>
  )
}

export default SkillsSkeleton;
