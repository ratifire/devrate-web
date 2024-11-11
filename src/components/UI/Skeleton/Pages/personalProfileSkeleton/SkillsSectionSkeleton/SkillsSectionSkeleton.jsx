import React from 'react';
import {Box, Skeleton} from '@mui/material';
import { styles } from './SkillsSectionSkeleton.styles';

const SkillsSectionSkeleton = () => {
  return (
    <Box sx={styles.wrapper}>
      <Skeleton sx={styles.elem} variant='rounded' height={32}/>
      <Skeleton sx={styles.elem} variant='rounded' height={32}/>
      <Skeleton sx={styles.lastElem} variant='rounded' height={32}/>
      <Box sx={styles.box}>
        <Skeleton variant='rounded' width={208} height={72}/>
        <Skeleton variant='rounded' width={208} height={72}/>
      </Box>
    </Box>
  )
}

export default SkillsSectionSkeleton;
