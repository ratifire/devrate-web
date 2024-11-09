import {Box, Skeleton} from '@mui/material';
import React from 'react';
import {styles} from './UserBaseUserInfoSkeleton.styles';

const UserBaseUserInfoSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxAvatar}>
        <Skeleton variant='rounded' width={152} height={152} />
        <Box sx={styles.boxInfo}>
          <Box sx={styles.boxName}>
            <Skeleton variant='rounded' width='100%' height={30} />
            <Skeleton variant='rounded' width={34} height={30} />
          </Box>
          <Skeleton variant='rounded' height={32} />
          <Skeleton variant='rounded' height={28} />
        </Box>
      </Box>
      <Box sx={styles.btnBox}>
        <Skeleton variant='rounded' width={267} height={45} />
        <Skeleton variant='rounded' width={267} height={45} />
      </Box>
    </Box>
  )
};

export default UserBaseUserInfoSkeleton;
