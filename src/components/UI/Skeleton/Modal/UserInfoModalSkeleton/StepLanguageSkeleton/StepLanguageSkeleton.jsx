import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { ButtonDef } from '../../../../../FormsComponents/Buttons';
import { styles } from './StepLanguageSkeleton.styles';

const StepLanguageSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton height={56} variant='rounded' width={302} />
        <Skeleton height={56} variant='rounded' width={302} />
        <Skeleton height={56} variant='rounded' width={56} />
      </Box>
      <Box sx={styles.boxLabel}>
        <Skeleton height={34} variant='rounded' width={158} />
        <Skeleton height={34} variant='rounded' width={141} />
        <Skeleton height={34} variant='rounded' width={178} />
      </Box>
      <ButtonDef loading useSkeleton={'working'} variant={'contained'} />
    </>
  );
};

export default StepLanguageSkeleton;
