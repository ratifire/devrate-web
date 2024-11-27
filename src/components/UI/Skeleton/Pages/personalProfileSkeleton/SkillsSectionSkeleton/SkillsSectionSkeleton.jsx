import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './SkillsSectionSkeleton.styles';

const SkillsSectionSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={32} sx={styles.elem} variant='rounded' />
      <Skeleton height={32} sx={styles.elem} variant='rounded' />
      <Skeleton height={32} sx={styles.lastElem} variant='rounded' />
      <Box sx={styles.box}>
        <Skeleton height={72} variant='rounded' width={208} />
        <Skeleton height={72} variant='rounded' width={208} />
      </Box>
    </Box>
  );
};

export default SkillsSectionSkeleton;
