import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { LevelGauge } from '@components//UI/Chart/index.js';
import { styles } from './InterviewStatistics.styles.js';
import useThemeHardSkillsChart from './useThemeHardSkillsChart.js';
import useThemeSoftSkillsChart from './useThemeSoftSkillsChart.js';
import useThemeAverageSkillsChart from './useThemeAverageSkillsChart.js';

const InterviewStatistics = ({ hardSkillMark, softSkillMark }) => {
  const { t } = useTranslation();
  const PERCENT_MULTIPLIER = 10;
  const SKILLS_NUMBER = 2;
  const softSkillMarkPercent = softSkillMark * PERCENT_MULTIPLIER;
  const hardSkillMarkPercent = Math.ceil(hardSkillMark * PERCENT_MULTIPLIER);
  const averageMarkPercent = Math.ceil((softSkillMarkPercent + hardSkillMarkPercent) / SKILLS_NUMBER);
  const { hardSkillsGradientStartColor, hardSkillsGradientMiddleColor, hardSkillsGradientEndColor } =
    useThemeHardSkillsChart();
  const { softSkillsGradientStartColor, softSkillsGradientMiddleColor, softSkillsGradientEndColor } =
    useThemeSoftSkillsChart();
  const {
    averageSkillsGradientStartColor,
    averageSkillsGradientMiddleColor,
    averageSkillsGradientEndColor,
    averageSkillsGradientExtraColor,
  } = useThemeAverageSkillsChart();

  const getPercentageRepresentation = (value) => `${value / PERCENT_MULTIPLIER}/${PERCENT_MULTIPLIER}`;

  return (
    <Box sx={styles.statisticsWrapper}>
      <Typography sx={styles.statisticsTitle} variant='h6'>
        {t('interviews.passedInterviews.interviewStatisticsTitle')}
      </Typography>
      <Box sx={styles.statisticsCharts}>
        <Box sx={styles.skillContainer}>
          <Typography sx={styles.skillTitle} variant='subtitle3'>
            {t('interviews.passedInterviews.interviewStatisticsSoftSkills')}
          </Typography>
          <LevelGauge
            colorGrad='gradient-green'
            fz={16}
            gradient={
              <linearGradient id='gradient-green' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: hardSkillsGradientStartColor, stopOpacity: 1 }} />
                <stop offset='54%' style={{ stopColor: hardSkillsGradientMiddleColor, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: hardSkillsGradientEndColor, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={82}
            text={({ value }) => getPercentageRepresentation(value)}
            transformX={-18}
            value={softSkillMarkPercent}
          />
        </Box>
        <Box sx={styles.skillContainer}>
          <Typography sx={styles.skillTitle} variant='subtitle3'>
            {t('interviews.passedInterviews.interviewStatisticsHardSkills')}
          </Typography>
          <LevelGauge
            colorGrad='gradient-red'
            fz={16}
            gradient={
              <linearGradient id='gradient-red' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: softSkillsGradientStartColor, stopOpacity: 1 }} />
                <stop offset='59.61%' style={{ stopColor: softSkillsGradientMiddleColor, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: softSkillsGradientEndColor, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={82}
            text={({ value }) => getPercentageRepresentation(value)}
            transformX={-18}
            value={hardSkillMarkPercent}
          />
        </Box>
        <Box sx={styles.skillContainer}>
          <Typography sx={styles.skillTitle} variant='subtitle3'>
            {t('interviews.passedInterviews.interviewStatisticsOverall')}
          </Typography>
          <LevelGauge
            colorGrad='gradient-purple'
            fz={16}
            gradient={
              <linearGradient id='gradient-purple' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: averageSkillsGradientStartColor, stopOpacity: 1 }} />
                <stop offset='29%' style={{ stopColor: averageSkillsGradientMiddleColor, stopOpacity: 1 }} />
                <stop offset='63%' style={{ stopColor: averageSkillsGradientEndColor, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: averageSkillsGradientExtraColor, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={82}
            text={({ value }) => getPercentageRepresentation(value)}
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
