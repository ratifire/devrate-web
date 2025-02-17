import { Box, Skeleton } from '@mui/material';
import { styles } from './ScheduledMeeting.styles';

const ScheduledMeetingSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxFlex}>
        <Skeleton height={32} variant='rounded' width='40%' />
        <Skeleton height={32} variant='rounded' width='40%' />
      </Box>
      <Box sx={styles.boxCol}>
        <Skeleton height={22} variant='rounded' width='30%' />
        <Skeleton height={42} variant='rounded' width='30%' />
      </Box>
      <Skeleton height={28} variant='rounded' />
      <Box sx={styles.boxFlex}>
        <Box sx={styles.boxInfo}>
          <Skeleton height={28} variant='rounded' />
          <Skeleton height={24} variant='rounded' />
        </Box>
        <Box sx={styles.boxInfo}>
          <Skeleton height={28} variant='rounded' />
          <Skeleton height={24} variant='rounded' />
        </Box>
        <Box sx={styles.boxInfo}>
          <Skeleton height={28} variant='rounded' />
          <Skeleton height={24} variant='rounded' />
        </Box>
      </Box>
      <Skeleton height={40} variant='rounded' />
      <Box sx={styles.boxBtn}>
        <Skeleton height={44} variant='rounded' width='100%' />
        <Skeleton height={44} variant='rounded' width='100%' />
      </Box>
    </Box>
  );
};

export default ScheduledMeetingSkeleton;
