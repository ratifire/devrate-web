import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { styles } from './CategoriesSkeleton.styles';

const CategoriesSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton variant='rounded' width={235} height={154} />
      <Box sx={styles.box}>
        <Skeleton variant='rounded' width={228} height={139} />
        <Skeleton variant='rounded' width={228} height={139} />
        <Skeleton variant='rounded' width={228} height={139} />
        <Skeleton variant='rounded' width={228} height={139} />
      </Box>
    </Box>
  );
}

export default CategoriesSkeleton;
