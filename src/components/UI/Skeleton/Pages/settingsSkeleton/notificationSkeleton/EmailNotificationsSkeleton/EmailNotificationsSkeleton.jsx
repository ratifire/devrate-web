import { Box, Skeleton } from '@mui/material';
import { styles } from './EmailNotificationsSkeleton.styles';

const EmailNotificationsSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton height={38} variant='rounded' width='90%' />
        <Skeleton height={38} variant='rounded' width='5%' />
      </Box>
      <Skeleton height={24} variant='rounded' />
    </>
  );
};

export default EmailNotificationsSkeleton;
