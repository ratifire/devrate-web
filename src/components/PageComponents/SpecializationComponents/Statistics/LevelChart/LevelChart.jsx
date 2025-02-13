import { Box, Typography, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useHardSkillData } from '../../../../../utils/hooks/specialization';
import { ErrorComponent } from '../../../../UI/Exceptions';
import { getLevel } from '../utils';
import LevelChartSkeleton from '../../../../UI/Skeleton/Pages/specializationSkeleton/LevelChartSkeleton';
import { LevelGauge } from '../../../../UI/Chart';
import LevelUp from '../../../../../assets/icons/levelUp.svg?react';
import { styles } from './LevelChart.styles.js';
import useThemeLevelChart from './useThemeLevelChart';

const LevelChart = () => {
  const { skills, isError, isFetching, activeMastery } = useHardSkillData();
  const { t } = useTranslation();
  const averageMark = (skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length).toFixed(1) * 10 || 0;
  const { grad1, grad2, grad3, grad4 } = useThemeLevelChart();

  if (isFetching) {
    return <LevelChartSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.levelChartContainer}>
      <Box sx={styles.contentContainer}>
        <Box>
          <Typography sx={styles.title} variant='subtitle2'>
            {t('specialization.statistics.level_chart_title')}
          </Typography>
          <Typography sx={styles.text} variant='subtitle3'>
            За результатами ми рекомендуємо вам перейти на наступний рівень!
          </Typography>
        </Box>
        <IconButton aria-label='level up' sx={styles.levelBtn}>
          <LevelUp />
        </IconButton>
      </Box>
      <Box sx={styles.chartContainer}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={styles.chartWrapper}>
            <LevelGauge
              gradient={
                <linearGradient id='gradient' x1='0%' x2='100%' y1='0%' y2='0%'>
                  <stop offset='0.04%' style={{ stopColor: grad1, stopOpacity: 1 }} />
                  <stop offset='26.65%' style={{ stopColor: grad2, stopOpacity: 1 }} />
                  <stop offset='57.07%' style={{ stopColor: grad3, stopOpacity: 1 }} />
                  <stop offset='90.86%' style={{ stopColor: grad4, stopOpacity: 1 }} />
                </linearGradient>
              }
              text={({ value }) => `${value}%`}
              value={averageMark}
            />
          </Box>
        </Box>
        <Typography sx={styles.rightCaption} variant='caption'>
          {activeMastery}
        </Typography>
        <Typography sx={styles.leftCaption} variant='caption'>
          {getLevel(activeMastery)}
        </Typography>
      </Box>
    </Box>
  );
};

export default LevelChart;
