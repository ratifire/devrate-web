import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './CategoriesSkeleton.styles';

const CategoriesSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.mainBox}>
        <Skeleton variant='rounded' width={235} height={45} />
        <Skeleton variant='rounded' width={235} height={50} />
      </Box>
      <Box sx={styles.box}>
        <Skeleton variant='rounded' width={226} height={139} />
        <Skeleton variant='rounded' width={226} height={139} />
        <Skeleton variant='rounded' width={226} height={139} />
        <Skeleton variant='rounded' width={226} height={139} />
      </Box>
    </Box>
  );
}

export default CategoriesSkeleton;
