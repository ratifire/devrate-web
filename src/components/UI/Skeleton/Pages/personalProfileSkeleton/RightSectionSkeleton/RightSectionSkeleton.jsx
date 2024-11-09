import React from 'react';
import {Box, Skeleton} from '@mui/material';
import { styles } from './RightSectionSkeleton.styles';

const RightSectionSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.titleBox}>
        <Skeleton variant='rounded' width='100%' height={32}/>
        <Skeleton variant='rounded' width={40} height={32}/>
      </Box>
      <Skeleton sx={styles.contacts} variant='rounded' height={50}/>
      <Box sx={styles.titleBox}>
        <Skeleton variant='rounded' width='100%' height={32}/>
        <Skeleton variant='rounded' width={40} height={32}/>
      </Box>
      <Skeleton sx={styles.contacts} variant='rounded' height={120}/>
      <Skeleton sx={styles.title} variant='rounded' height={32}/>
      <Skeleton variant='rounded' height={196}/>
    </Box>
  )
};

export default RightSectionSkeleton;
