import React from 'react';
import { Skeleton } from '@mui/material';
import { styles } from './HardSkillsChartSkeleton.styles';

const HardSkillsChartSkeleton = () => {
  return (
    <>
      <Skeleton sx={styles.title} variant='rounded' height={28} />
      <Skeleton sx={styles.subTitle} variant='rounded' height={50} />
      <Skeleton variant='rounded' height={264} />
    </>
  );
};

export default HardSkillsChartSkeleton;
