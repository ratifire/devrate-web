import React from 'react';
import {Box, Skeleton} from '@mui/material';
import { styles} from './ExperienceSectionSkeleton.styles';

const ExperienceSectionSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.box}>
        <Skeleton variant='rounded' width={542} height={50}/>
        <Skeleton variant='rounded' width={50} height={50}/>
      </Box>
      <Skeleton variant='rounded' width='100%' height={261}/>
    </Box>
  )
}

export default ExperienceSectionSkeleton;
