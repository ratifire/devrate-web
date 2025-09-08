import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { LevelGauge } from '@components//UI/Chart';
import { feedbackInterviewRole } from '@utils/constants/feedbackInterviewRole';
import { PERCENT_MULTIPLIER } from '@components/PageComponents/InterviewsComponents/InterviewStatistics/constants';
import {
  useThemeAverageSkillsChart,
  useThemeSoftSkillsChart,
  useThemeHardSkillsChart,
} from '@components/PageComponents/InterviewsComponents/InterviewStatistics/hooks';
import { styles } from './InterviewStatistics.styles';

const InterviewStatistics = ({ hardSkillMark, softSkillMark, role }) => {
  const { t } = useTranslation();
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

  const softSkillMarkPercent = softSkillMark > 0 ? softSkillMark * PERCENT_MULTIPLIER : 0;
  const hardSkillMarkPercent = hardSkillMark > 0 ? Math.ceil(hardSkillMark * PERCENT_MULTIPLIER) : 0;

  const skillsCount =
    (softSkillMark > 0 ? 1 : 0) + (hardSkillMark > 0 && role === feedbackInterviewRole.CANDIDATE ? 1 : 0);
  const averageMarkPercent =
    skillsCount > 0 ? Math.ceil((softSkillMarkPercent + hardSkillMarkPercent) / skillsCount) : 0;

  const getPercentageRepresentation = (value) => `${value / PERCENT_MULTIPLIER}/${PERCENT_MULTIPLIER}`;

  const hasSoftSkills = softSkillMark > 0;
  const hasHardSkills = hardSkillMark > 0 && role === feedbackInterviewRole.CANDIDATE;
  const hasAverage = averageMarkPercent > 0 && role === feedbackInterviewRole.CANDIDATE;

  return (
    <Box sx={styles.statisticsWrapper}>
      <Typography sx={styles.statisticsTitle} variant='h6'>
        {t('interviews.passedInterviews.interviewStatisticsTitle')}
      </Typography>
      <Box sx={styles.statisticsCharts}>
        {hasSoftSkills && (
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
        )}

        {hasHardSkills && (
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
        )}

        {hasAverage && (
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
        )}
      </Box>
    </Box>
  );
};
export default InterviewStatistics;

InterviewStatistics.propTypes = {
  hardSkillMark: PropTypes.number.isRequired,
  softSkillMark: PropTypes.number.isRequired,
  role: PropTypes.oneOf([feedbackInterviewRole.CANDIDATE, feedbackInterviewRole.INTERVIEWER]).isRequired,
};

InterviewStatistics.defaultProps = {
  hardSkillMark: 0,
  softSkillMark: 0,
};
