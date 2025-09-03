import { Skeleton } from '@mui/material';

const PreviewVideoPassedInterviewSkeleton = () => {
  return (
    <>
      <Skeleton height={24} variant='rounded' width={56} />
      <Skeleton hidden={818} variant='rounded' width={460} />
    </>
  );
};

export default PreviewVideoPassedInterviewSkeleton;
