import { Skeleton } from '@mui/material';
import { BtnSkeleton } from '../components';
import { styles } from './StepContactsSkeleton.styles';

const StepContactsSkeleton = () => {
  return (
    <>
      <Skeleton height={56} sx={styles.input} variant='rounded' />
      <Skeleton height={56} sx={styles.input} variant='rounded' />
      <Skeleton height={56} sx={styles.input} variant='rounded' />
      <Skeleton height={56} sx={styles.input} variant='rounded' />
      <Skeleton height={56} sx={styles.input} variant='rounded' />
      <Skeleton height={56} sx={styles.input} variant='rounded' />
      <BtnSkeleton />
    </>
  );
};

export default StepContactsSkeleton;
