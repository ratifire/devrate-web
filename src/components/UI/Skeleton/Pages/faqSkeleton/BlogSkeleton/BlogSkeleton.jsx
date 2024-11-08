import { styles } from './BlogSkeleton.styles';
import { Box, Skeleton } from '@mui/material';
import React from 'react';

const BlogSkeleton = () => {
  return (
    <Box sx={styles.box}>
      <Skeleton sx={styles.title} variant='rounded' height={32} />
      <Box>
        <Skeleton sx={styles.card} variant='rounded' height={171} width={306} />
        <Skeleton sx={styles.card} variant='rounded' height={171} width={306} />
        <Skeleton sx={styles.card} variant='rounded' height={171} width={306} />
      </Box>
    </Box>
  )
}

export default BlogSkeleton;