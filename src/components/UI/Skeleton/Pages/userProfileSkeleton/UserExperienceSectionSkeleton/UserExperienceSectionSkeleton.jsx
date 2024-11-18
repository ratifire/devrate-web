import { Box, Skeleton } from '@mui/material';
import { styles } from './UserExperienceSectionSkeleton.styles';
import React from 'react';

const UserExperienceSectionSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton variant='rounded' width={542} height={50} />
      </Box>
      <Skeleton variant='rounded' width='100%' height={261} />
    </Box>
  );
};

export default UserExperienceSectionSkeleton;
