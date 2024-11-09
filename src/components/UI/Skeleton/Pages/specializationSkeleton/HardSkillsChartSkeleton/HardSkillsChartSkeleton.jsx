import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './HardSkillsChartSkeleton.styles';

const HardSkillsChartSkeleton = () => {
  return (
    <Box>
      <Skeleton sx={styles.title} variant='rounded' height={28} />
      <Skeleton sx={styles.subTitle} variant='rounded' height={50} />
      <Skeleton variant='rounded' height={264} />
    </Box>
  );
};

export default HardSkillsChartSkeleton;
