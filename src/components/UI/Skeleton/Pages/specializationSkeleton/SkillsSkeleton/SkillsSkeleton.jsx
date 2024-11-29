import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './SkillsSkeleton.styles';

const SkillsSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={34} variant='rounded' />
      <Skeleton height={312} variant='rounded' />
      <Skeleton height={32} variant='rounded' />
    </Box>
  );
};

export default SkillsSkeleton;
