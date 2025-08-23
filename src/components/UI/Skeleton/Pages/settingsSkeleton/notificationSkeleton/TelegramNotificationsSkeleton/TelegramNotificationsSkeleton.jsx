import { Skeleton } from '@mui/material';

const TelegramNotificationsSkeleton = () => {
  return (
    <>
      <Skeleton height={32} variant='rounded' />
      <Skeleton height={24} variant='rounded' />
    </>
  );
};

export default TelegramNotificationsSkeleton;
