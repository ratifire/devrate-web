import { styles } from './BlogSkeleton.styles';
import { Box, Skeleton } from '@mui/material';
import React from 'react';

const BlogSkeleton = () => {
  return (
    <Box sx={styles.box}>
      <Skeleton sx={styles.title} variant='rounded' height={32} />
      <Box sx={styles.list}>
        <Skeleton sx={styles.card} variant='rounded' height={280} />
        <Skeleton sx={styles.card} variant='rounded' height={280} />
        <Skeleton sx={styles.card} variant='rounded' height={280} />
        <Skeleton sx={styles.card} variant='rounded' height={280} />
      </Box>
    </Box>
  )
}

export default BlogSkeleton;