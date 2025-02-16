import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { LevelGauge } from '../../../UI/Chart/index.js';
import { styles } from './InterviewStatistics.styles.js';
import useThemeHardSkillsChart from './useThemeHardSkillsChart.js';
import useThemeSoftSkillsChart from './useThemeSoftSkillsChart.js';
import useThemeAverageSkillsChart from './useThemeAverageSkillsChart.js';

const InterviewStatistics = ({ hardSkillMark, softSkillMark }) => {
  const PERCENT_MULTIPLIER = 10;
  const SKILLS_NUMBER = 2;
  const softSkillMarkPercent = softSkillMark * PERCENT_MULTIPLIER;
  const hardSkillMarkPercent = Math.ceil(hardSkillMark * PERCENT_MULTIPLIER);
  const averageMarkPercent = Math.ceil((softSkillMarkPercent + hardSkillMarkPercent) / SKILLS_NUMBER);
  const { gradHard1, gradHard2, gradHard3 } = useThemeHardSkillsChart();
  const { gradSoft1, gradSoft2, gradSoft3 } = useThemeSoftSkillsChart();
  const { gradAver1, gradAver2, gradAver3, gradAver4 } = useThemeAverageSkillsChart();

  return (
    <Box sx={styles.statisticsWrapper}>
      <Typography sx={styles.statisticsTitle} variant='h6'>
        Statistics
      </Typography>
      <Box sx={styles.statisticsCharts}>
        <Box sx={styles.skillContainer}>
          <Typography sx={styles.skillTitle} variant='subtitle3'>
            Soft Skills
          </Typography>
          <LevelGauge
            colorGrad='gradient-green'
            fz={16}
            gradient={
              <linearGradient id='gradient-green' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: gradHard1, stopOpacity: 1 }} />
                <stop offset='54%' style={{ stopColor: gradHard2, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: gradHard3, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={82}
            text={({ value }) => `${value / PERCENT_MULTIPLIER}/${PERCENT_MULTIPLIER}`}
            transformX={-18}
            value={softSkillMarkPercent}
          />
        </Box>
        <Box sx={styles.skillContainer}>
          <Typography sx={styles.skillTitle} variant='subtitle3'>
            Hard Skills
          </Typography>
          <LevelGauge
            colorGrad='gradient-red'
            fz={16}
            gradient={
              <linearGradient id='gradient-red' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: gradSoft1, stopOpacity: 1 }} />
                <stop offset='59.61%' style={{ stopColor: gradSoft2, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: gradSoft3, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={82}
            text={({ value }) => `${value / PERCENT_MULTIPLIER}/${PERCENT_MULTIPLIER}`}
            transformX={-18}
            value={hardSkillMarkPercent}
          />
        </Box>
        <Box sx={styles.skillContainer}>
          <Typography sx={styles.skillTitle} variant='subtitle3'>
            Over All
          </Typography>
          <LevelGauge
            colorGrad='gradient-purple'
            fz={16}
            gradient={
              <linearGradient id='gradient-purple' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: gradAver1, stopOpacity: 1 }} />
                <stop offset='29%' style={{ stopColor: gradAver2, stopOpacity: 1 }} />
                <stop offset='63%' style={{ stopColor: gradAver3, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: gradAver4, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={82}
            text={({ value }) => `${value / PERCENT_MULTIPLIER}/${PERCENT_MULTIPLIER}`}
            transformX={-18}
            value={averageMarkPercent}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default InterviewStatistics;

InterviewStatistics.propTypes = {
  hardSkillMark: PropTypes.number.isRequired,
  softSkillMark: PropTypes.number.isRequired,
};

InterviewStatistics.defaultProps = {
  hardSkillMark: 0,
  softSkillMark: 0,
};
