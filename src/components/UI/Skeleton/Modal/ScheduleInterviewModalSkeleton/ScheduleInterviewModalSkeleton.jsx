import { Box, Skeleton } from '@mui/material';
import { styles } from './ScheduleInterviewModalSkeleton.styles';

const ScheduleInterviewModalSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={32} variant='rounded' width='55%' />
      <Skeleton height={30} variant='rounded' />
      <Box sx={styles.box}>
        <Skeleton height={56} variant='rounded' />
        <Skeleton height={56} variant='rounded' />
        <Skeleton height={56} variant='rounded' />
        <Box sx={styles.inputBox}>
          <Skeleton height={56} variant='rounded' width='100%' />
          <Skeleton height={56} variant='rounded' width={56} />
        </Box>
        <Skeleton height={56} variant='rounded' width='70%' />
      </Box>
    </Box>
  );
};

export default ScheduleInterviewModalSkeleton;
