import { Box, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHardSkillData } from '../../../../../utils/hooks/specialization';
import { ErrorComponent } from '../../../../UI/Exceptions';
import { getLevel } from '../utils';
import LevelChartSkeleton from '../../../../UI/Skeleton/Pages/specializationSkeleton/LevelChartSkeleton';
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
      <Typography sx={styles.title} variant='subtitle2'>
        {t('specialization.statistics.level_chart_title')}
      </Typography>
      <Box sx={styles.chartContainer}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={styles.chartWrapper}>
            <Gauge
              cornerRadius='90%'
              endAngle={90}
              innerRadius='80%'
              outerRadius='100%'
              startAngle={-90}
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
              value={averageMark}
            >
              <defs>
                <linearGradient id='gradient' x1='0%' x2='100%' y1='0%' y2='0%'>
                  <stop offset='0.04%' style={{ stopColor: grad1, stopOpacity: 1 }} />
                  <stop offset='26.65%' style={{ stopColor: grad2, stopOpacity: 1 }} />
                  <stop offset='57.07%' style={{ stopColor: grad3, stopOpacity: 1 }} />
                  <stop offset='90.86%' style={{ stopColor: grad4, stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </Gauge>
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
