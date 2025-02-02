import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LevelGauge } from '../../../UI/Chart';
import { styles } from './Statistic.styles.js';
import { useStatisticChartColor } from './hooks';

const Statistic = () => {
  const { t } = useTranslation();
  const { hardSkills, softSkills, overall } = useStatisticChartColor();

  return (
    <Box sx={styles.wrapper}>
      <Typography component='h6' variant='h6'>
        {t('singleScheduledInterview.statistic.title')}
      </Typography>
      <Box sx={styles.boxCharts}>
        <Box sx={styles.chart}>
          <Typography component='p' variant='subtitle3'>
            Soft Skills
          </Typography>
          <LevelGauge
            colorGrad='gradientSoftSkills'
            fz={16}
            gradient={
              <linearGradient id='gradientSoftSkills' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: softSkills.grad1, stopOpacity: 1 }} />
                <stop offset='50%' style={{ stopColor: softSkills.grad2, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: softSkills.grad3, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={81}
            text={({ value }) => `${value / 10}/10`}
            transformX={-15}
            value={80}
          />
        </Box>
        <Box sx={styles.chart}>
          <Typography component='p' variant='subtitle3'>
            Hard Skills
          </Typography>
          <LevelGauge
            colorGrad='gradientHardSkills'
            fz={16}
            gradient={
              <linearGradient id='gradientHardSkills' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: hardSkills.grad1, stopOpacity: 1 }} />
                <stop offset='50%' style={{ stopColor: hardSkills.grad2, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: hardSkills.grad3, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={61}
            text={({ value }) => `${value / 10}/10`}
            transformX={-15}
            value={90}
          />
        </Box>
        <Box sx={styles.chart}>
          <Typography component='p' variant='subtitle3'>
            Over All
          </Typography>
          <LevelGauge
            colorGrad='gradientOverall'
            fz={16}
            gradient={
              <linearGradient id='gradientOverall' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: overall.grad1, stopOpacity: 1 }} />
                <stop offset='25%' style={{ stopColor: overall.grad2, stopOpacity: 1 }} />
                <stop offset='75%' style={{ stopColor: overall.grad3, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: overall.grad3, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={61}
            text={({ value }) => `${value / 10}/10`}
            transformX={-15}
            value={80}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Statistic;
