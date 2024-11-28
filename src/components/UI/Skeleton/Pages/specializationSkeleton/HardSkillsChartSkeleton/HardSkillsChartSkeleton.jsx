import React from 'react';
import { Skeleton } from '@mui/material';
import { styles } from './HardSkillsChartSkeleton.styles';

const HardSkillsChartSkeleton = () => {
  return (
    <>
      <Skeleton height={28} sx={styles.title} variant='rounded' />
      <Skeleton height={50} sx={styles.subTitle} variant='rounded' />
      <Skeleton height={264} variant='rounded' />
    </>
  );
};

export default HardSkillsChartSkeleton;
