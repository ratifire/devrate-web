import { Box, Skeleton } from '@mui/material';
import { styles } from './BlogSkeleton.styles';

const BlogSkeleton = () => {
  return (
    <Box sx={styles.box}>
      <Skeleton height={32} sx={styles.title} variant='rounded' />
      <Box sx={styles.list}>
        <Skeleton height={280} sx={styles.card} variant='rounded' />
        <Skeleton height={280} sx={styles.card} variant='rounded' />
        <Skeleton height={280} sx={styles.card} variant='rounded' />
        <Skeleton height={280} sx={styles.card} variant='rounded' />
      </Box>
    </Box>
  );
};

export default BlogSkeleton;
