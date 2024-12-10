import { Skeleton } from '@mui/material';
import { styles } from './BtnSkeleton.styles';

const BtnSkeleton = () => {
  return <Skeleton height={44} sx={styles.btn} variant='rounded' />;
};

export default BtnSkeleton;
