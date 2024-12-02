import { Box, Skeleton } from '@mui/material';
import React from 'react';
import { styles } from './UserExperienceSectionSkeleton.styles';

const UserExperienceSectionSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton height={50} variant='rounded' width={542} />
      </Box>
      <Skeleton height={261} variant='rounded' width='100%' />
    </Box>
  );
};

export default UserExperienceSectionSkeleton;
