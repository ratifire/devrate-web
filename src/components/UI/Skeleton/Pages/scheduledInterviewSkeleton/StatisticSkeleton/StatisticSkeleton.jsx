import { Box, Skeleton } from '@mui/material';
import { styles } from './StatisticSkeleton.styles';

const StatisticSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={32} variant='rounded' />
      <Box sx={styles.boxCharts}>
        <Box sx={styles.chart}>
          <Skeleton height={22} variant='rounded' />
          <Skeleton height={61} variant='rounded' />
        </Box>
        <Box sx={styles.chart}>
          <Skeleton height={22} variant='rounded' />
          <Skeleton height={61} variant='rounded' />
        </Box>
        <Box sx={styles.chart}>
          <Skeleton height={22} variant='rounded' />
          <Skeleton height={61} variant='rounded' />
        </Box>
      </Box>
    </Box>
  );
};

export default StatisticSkeleton;
