import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './SkillsAssessmentChartSkeleton.styles';

const SkillsAssessmentChartSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton variant='rounded' height={28}/>
      <Skeleton variant='rounded' height={187}/>
    </Box>
  )
};

export default SkillsAssessmentChartSkeleton;
