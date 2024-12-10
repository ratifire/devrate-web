import { Box, Skeleton } from '@mui/material';
import { BtnSkeleton } from '../components';
import { styles } from './StepPersonalSkeleton.styles';

const StepPersonalSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton height={56} sx={styles.input} variant='rounded' width={334} />
        <Skeleton height={56} sx={styles.input} variant='rounded' width={334} />
        <Skeleton height={56} sx={styles.input} variant='rounded' width={334} />
        <Skeleton height={56} sx={styles.input} variant='rounded' width={334} />
      </Box>
      <Skeleton height={56} sx={styles.input} variant='rounded' />
      <Skeleton height={171} sx={styles.lastElem} variant='rounded' />
      <BtnSkeleton />
    </>
  );
};

export default StepPersonalSkeleton;
