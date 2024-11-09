import { Box, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHardSkillData } from '../../../../../utils/hooks/specialization';
import { ErrorComponent } from '../../../../UI/Exceptions';
import { getLevel } from '../utils';
import { styles } from './LevelChart.styles.js';
import useThemeLevelChart from './useThemeLevelChart';
import LevelChartSkeleton from '../../../../UI/Skeleton/Pages/specializationSkeleton/LevelChartSkeleton';

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
      <Typography variant='subtitle2' sx={styles.title}>
        {t('specialization.statistics.level_chart_title')}
      </Typography>
      <Box sx={styles.chartContainer}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={styles.chartWrapper}>
            <Gauge
              value={averageMark}
              startAngle={-90}
              endAngle={90}
              innerRadius='80%'
              outerRadius='100%'
              cornerRadius='90%'
              sx={{
                padding: 0,
                height: '150px',
                '.MuiGauge-valueArc': {
                  fill: 'url(#gradient)',
                  strokeWidth: 12,
                },
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 48,
                  transform: 'translate(0px, -30px)',
                },
              }}
              text={({ value }) => `${value}%`}
            >
              <defs>
                <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0.04%' style={{ stopColor: grad1, stopOpacity: 1 }} />
                  <stop offset='26.65%' style={{ stopColor: grad2, stopOpacity: 1 }} />
                  <stop offset='57.07%' style={{ stopColor: grad3, stopOpacity: 1 }} />
                  <stop offset='90.86%' style={{ stopColor: grad4, stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </Gauge>
          </Box>
        </Box>
        <Typography variant='caption' sx={styles.rightCaption}>
          {activeMastery}
        </Typography>
        <Typography variant='caption' sx={styles.leftCaption}>
          {getLevel(activeMastery)}
        </Typography>
      </Box>
    </Box>
  );
};

export default LevelChart;
