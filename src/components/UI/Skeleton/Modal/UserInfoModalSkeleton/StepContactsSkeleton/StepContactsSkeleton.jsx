import { Skeleton } from '@mui/material';
import { ButtonDef } from '../../../../../FormsComponents/Buttons';
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
      <ButtonDef loading useSkeleton={'working'} variant={'contained'} />
    </>
  );
};

export default StepContactsSkeleton;
