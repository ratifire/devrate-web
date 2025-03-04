import { Box, FormControl, Skeleton } from '@mui/material';
import { styles } from './InterviewRequestSkeleton.styles.js';

const InterviewRequestSkeleton = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Skeleton sx={styles.heading} variant='text' />
        <FormControl>
          <Skeleton sx={styles.select} variant='rounded' />
        </FormControl>
      </Box>

      <Box sx={styles.participant}>
        <Box sx={styles.requestHeader}>
          <Skeleton height={30} variant='text' width={300} />
          <Skeleton height={20} sx={{ mt: 1 }} variant='text' width={150} />
          <Skeleton height={20} sx={{ mt: 1 }} variant='text' width='80%' />
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            <Skeleton height={20} variant='text' width={100} />
            <Skeleton height={36} variant='rounded' width={120} />
          </Box>
        </Box>
        {[1, 2].map((group) => (
          <Box key={group} sx={styles.timeSlotGroup}>
            <Skeleton height={24} sx={styles.dayTitle} variant='text' width={200} />
            <Box sx={styles.dayGroup}>
              {[1, 2, 3, 4].map((slot) => (
                <Skeleton key={slot} height={48} sx={{ mr: 2, mb: 2 }} variant='rounded' width={209} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InterviewRequestSkeleton;
