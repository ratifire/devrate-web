import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { ButtonDef } from '../../../../../FormsComponents/Buttons';
import { styles } from './StepPersonalSkeleton.styles';

const StepPersonalSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton height={56} sx={styles.input} variant='rounded' width={334} />
        <Skeleton height={56} sx={styles.input} variant='rounded' width={334} />
        <Skeleton height={56} sx={styles.input} variant='rounded' width={334} />
        <Skeleton height={56} sx={styles.input} variant='rounded' width={334} />
      </Box>
      <Skeleton height={56} sx={styles.input} variant='rounded' />
      <Skeleton height={171} sx={styles.lastElem} variant='rounded' />
      <ButtonDef loading useSkeleton={'working'} variant={'contained'} />
    </>
  );
};
export default StepPersonalSkeleton;
