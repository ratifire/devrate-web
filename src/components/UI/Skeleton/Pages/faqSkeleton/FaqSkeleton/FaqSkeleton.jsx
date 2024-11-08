import { styles } from './FaqSkeleton.styles';
import { Box, Skeleton } from '@mui/material';
import React from 'react';

const FaqSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton sx={styles.block} variant='rounded' width='100%' height={43} />
      <Box sx={styles.list}>
        <Skeleton sx={styles.block} variant='rounded' width='100%' height={74} />
        <Skeleton sx={styles.block} variant='rounded' width='100%' height={94} />
        <Skeleton sx={styles.block} variant='rounded' width='100%' height={74} />
        <Skeleton sx={styles.block} variant='rounded' width='100%' height={74} />
        <Skeleton sx={styles.block} variant='rounded' width='100%' height={74} />
        <Skeleton sx={styles.block} variant='rounded' width='100%' height={74} />
        <Skeleton sx={styles.block} variant='rounded' width='100%' height={74} />
        <Skeleton sx={styles.block} variant='rounded' width='100%' height={74} />
      </Box>
    </Box>
  );
}

export default FaqSkeleton;
