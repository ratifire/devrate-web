import { Box, Skeleton } from '@mui/material';
import { styles } from './InterviewSkillsSkeleton.styles';

const InterviewSkillsSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton height={32} variant='rounded' width='20%' />
        <Skeleton height={32} variant='rounded' width='5%' />
      </Box>
      <Box sx={styles.box}>
        <Skeleton height={28} variant='rounded' width='30%' />
        <Skeleton height={28} variant='rounded' width='30%' />
      </Box>
      <Skeleton height={210} variant='rounded' />
      <Skeleton height={210} variant='rounded' />
    </Box>
  );
};

export default InterviewSkillsSkeleton;
