import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './SkillsAssessmentChartSkeleton.styles';

const SkillsAssessmentChartSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={28} variant='rounded' />
      <Skeleton height={187} variant='rounded' />
    </Box>
  );
};

export default SkillsAssessmentChartSkeleton;
