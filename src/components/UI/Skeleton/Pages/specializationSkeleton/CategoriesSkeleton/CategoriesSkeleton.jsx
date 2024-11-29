import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './CategoriesSkeleton.styles';

const CategoriesSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.mainBox}>
        <Skeleton height={45} variant='rounded' width={235} />
        <Skeleton height={50} variant='rounded' width={235} />
      </Box>
      <Box sx={styles.box}>
        <Skeleton height={139} variant='rounded' width={226} />
        <Skeleton height={139} variant='rounded' width={226} />
        <Skeleton height={139} variant='rounded' width={226} />
        <Skeleton height={139} variant='rounded' width={226} />
      </Box>
    </Box>
  );
};

export default CategoriesSkeleton;
