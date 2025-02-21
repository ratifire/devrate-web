import { Box, Skeleton } from '@mui/material';
import { styles } from './StatisticsSkeleton.styles.js';

const StatisticsSkeleton = () => {
  return (
    <Box sx={styles.statisticsWrapper}>
      <Skeleton height={24} sx={styles.statisticsTitle} variant='rounded' width={180} />
      <Box sx={styles.statisticsCharts}>
        <Box sx={styles.skillContainer}>
          <Skeleton height={12} sx={styles.skillTitle} variant='rounded' width={60} />
          <Skeleton height={82} variant='rounded' width={120} />
        </Box>
        <Box sx={styles.skillContainer}>
          <Skeleton height={12} sx={styles.skillTitle} variant='rounded' width={60} />
          <Skeleton height={82} variant='rounded' width={120} />
        </Box>
        <Box sx={styles.skillContainer}>
          <Skeleton height={12} sx={styles.skillTitle} variant='rounded' width={60} />
          <Skeleton height={82} variant='rounded' width={120} />
        </Box>
      </Box>
    </Box>
  );
};

export default StatisticsSkeleton;
