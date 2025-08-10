import { Box, Skeleton } from '@mui/material';
import { styles } from './SettingsSideBarSkeleton.styles';

const SettingsSideBarSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton height={42} variant='rounded' />
      <Skeleton height={46} variant='rounded' />
      <Skeleton height={46} variant='rounded' />
    </Box>
  );
};

export default SettingsSideBarSkeleton;
