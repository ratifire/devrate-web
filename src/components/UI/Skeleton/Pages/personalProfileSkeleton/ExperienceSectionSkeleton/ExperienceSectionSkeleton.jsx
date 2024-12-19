import { Box, Skeleton } from '@mui/material';
import { styles } from './ExperienceSectionSkeleton.styles';

const ExperienceSectionSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton height={50} variant='rounded' width={542} />
        <Skeleton height={50} variant='rounded' width={50} />
      </Box>
      <Skeleton height={261} variant='rounded' width='100%' />
    </Box>
  );
};

export default ExperienceSectionSkeleton;
