import { Box, Skeleton } from '@mui/material';
import { styles } from './ParticipantEvaluationsSkeleton.styles';

const ParticipantEvaluationsSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton height={32} variant='rounded' width='95%' />
        <Skeleton height={32} variant='rounded' width='5%' />
      </Box>
      <Box sx={styles.box}>
        <Skeleton height={56} variant='rounded' width='25%' />
        <Skeleton height={56} variant='rounded' width='25%' />
      </Box>
      <Skeleton height={400} variant='rounded' width='100%' />
    </Box>
  );
};

export default ParticipantEvaluationsSkeleton;
