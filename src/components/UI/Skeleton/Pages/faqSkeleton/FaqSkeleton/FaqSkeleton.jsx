import { Box, Skeleton } from '@mui/material';
import { styles } from './FaqSkeleton.styles';

const FaqSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={43} sx={styles.block} variant='rounded' width='100%' />
      <Box sx={styles.list}>
        <Skeleton height={74} sx={styles.block} variant='rounded' width='100%' />
        <Skeleton height={94} sx={styles.block} variant='rounded' width='100%' />
        <Skeleton height={74} sx={styles.block} variant='rounded' width='100%' />
        <Skeleton height={74} sx={styles.block} variant='rounded' width='100%' />
        <Skeleton height={74} sx={styles.block} variant='rounded' width='100%' />
        <Skeleton height={74} sx={styles.block} variant='rounded' width='100%' />
        <Skeleton height={74} sx={styles.block} variant='rounded' width='100%' />
        <Skeleton height={74} sx={styles.block} variant='rounded' width='100%' />
      </Box>
    </Box>
  );
};

export default FaqSkeleton;
