import { Box, Typography, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHardSkillData } from '@utils/hooks/specialization';
import { ErrorComponent } from '@components/UI/Exceptions';
import LevelChartSkeleton from '@components/UI/Skeleton/Pages/specializationSkeleton/LevelChartSkeleton';
import { LevelGauge } from '@components/UI/Chart';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import LevelUp from '@assets/icons/levelUp.svg?react';
import { getLevel } from '../utils';
import { styles } from './LevelChart.styles.js';
import useThemeLevelChart from './useThemeLevelChart';

const LevelChart = () => {
  const { skills, isError, isFetching, activeMastery } = useHardSkillData();
  const { t } = useTranslation();
  const averageMark = (skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length).toFixed(1) * 10 || 0;
  const { grad1, grad2, grad3, grad4 } = useThemeLevelChart();
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);
  const currentSpecialization = activeSpecialization || mainSpecialization;
  const { openModal } = useModalController();

  const handlerUpLevel = (id, name, mastery) => {
    openModal(modalNames.specializationEditModal, { id, name, mastery });
  };

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
            {t('specialization.statistics.levelUp')}
          </Typography>
        </Box>
        {averageMark >= 90 && (
          <IconButton
            aria-label='level up'
            sx={styles.levelBtn}
            onClick={() =>
              handlerUpLevel(
                currentSpecialization?.id,
                currentSpecialization?.name,
                currentSpecialization?.mastery || currentSpecialization.mainMasteryLevel
              )
            }
          >
            <LevelUp />
          </IconButton>
        )}
      </Box>
      <Box sx={styles.chartContainer}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={styles.chartWrapper}>
            <LevelGauge
              colorGrad='gradient'
              fz={48}
              gradient={
                <linearGradient id='gradient' x1='0%' x2='100%' y1='0%' y2='0%'>
                  <stop offset='0.04%' style={{ stopColor: grad1, stopOpacity: 1 }} />
                  <stop offset='26.65%' style={{ stopColor: grad2, stopOpacity: 1 }} />
                  <stop offset='57.07%' style={{ stopColor: grad3, stopOpacity: 1 }} />
                  <stop offset='90.86%' style={{ stopColor: grad4, stopOpacity: 1 }} />
                </linearGradient>
              }
              height={150}
              text={({ value }) => `${value}%`}
              transformX={-30}
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
