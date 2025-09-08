import { Skeleton } from '@mui/material';
import { styles } from './HardSkillsChartSkeleton.styles';

const HardSkillsChartSkeleton = () => {
  return (
    <>
      <Skeleton height={28} sx={styles.title} variant='rounded' />
      <Skeleton height={18} sx={styles.subTitle} variant='rounded' />
      <Skeleton height={270} variant='rounded' />
    </>
  );
};

export default HardSkillsChartSkeleton;
