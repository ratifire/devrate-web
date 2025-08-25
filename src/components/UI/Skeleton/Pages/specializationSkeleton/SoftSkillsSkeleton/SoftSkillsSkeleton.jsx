import { Box, Skeleton } from '@mui/material';
import { styles } from './SoftSkillsSkeleton.styles.js';

const HardSkillsSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={34} variant='rounded' />
      <Skeleton height={116} variant='rounded' />
      <Skeleton height={32} variant='rounded' />
    </Box>
  );
};

export default HardSkillsSkeleton;
