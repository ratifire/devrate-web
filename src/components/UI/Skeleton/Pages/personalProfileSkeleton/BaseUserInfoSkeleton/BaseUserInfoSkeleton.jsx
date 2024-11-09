import React from 'react';
import {Box, Skeleton} from '@mui/material';
import { styles } from './BaseUserInfoSkeleton.styles';

const BaseUserInfoSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxAvatar}>
        <Skeleton variant='rounded' width={152} height={152} />
        <Box sx={styles.boxInfo}>
          <Box sx={styles.boxName}>
            <Skeleton variant='rounded' width='100%' height={30} />
            <Skeleton variant='rounded' width={34} height={30} />
          </Box>
          <Skeleton variant='rounded' width='100%' height={32} />
          <Skeleton variant='rounded' width='100%' height={28} />
        </Box>
      </Box>
      <Skeleton variant='rounded' width='100' height={44} />
    </Box>
  )
};

export default BaseUserInfoSkeleton;
