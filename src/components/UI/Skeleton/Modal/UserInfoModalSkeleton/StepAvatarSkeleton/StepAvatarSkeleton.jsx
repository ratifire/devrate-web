import { Box, Skeleton } from '@mui/material';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { styles } from './StepAvatarSkeleton.styles';

const StepAvatarSkeleton = () => {
  return (
    <>
      <Box sx={styles.box}>
        <Skeleton height={336} variant='rounded' width={336} />
        <Skeleton height={336} variant='rounded' width={336} />
      </Box>
      <Box sx={styles.btnBox}>
        <ButtonDef loading useSkeleton={'working'} variant={'contained'} />
        <ButtonDef loading useSkeleton={'workingSmall'} variant={'contained'} />
      </Box>
    </>
  );
};

export default StepAvatarSkeleton;
