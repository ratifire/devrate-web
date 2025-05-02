import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { LevelGauge } from '@components/UI/Chart';
import { useGetMasteriesQuery } from '@redux/api/slices/interviews/singleScheduledInterviewApiSlice.js';
import { StatisticSkeleton } from '@components/UI/Skeleton';
import { ErrorComponent } from '@components/UI/Exceptions';
import { prepareSkillsDataStatistics } from '../helpers';
import { styles } from './Statistic.styles';
import { useStatisticChartColor } from './hooks';

const Statistic = () => {
  const { t } = useTranslation();
  const { hardSkillsColors, softSkillsColors, overallColors } = useStatisticChartColor();
  const location = useLocation();
  const { hostMasteryId } = location.state.event;

  const {
    data: allSkills,
    isFetching: isFetchingAllSkills,
    isError: isErrorAllSkills,
  } = useGetMasteriesQuery(hostMasteryId, { skip: !hostMasteryId });

  if (isErrorAllSkills) {
    return <ErrorComponent />;
  }

  if (isFetchingAllSkills) {
    return <StatisticSkeleton />;
  }

  const { hardSkillMark, softSkillMark } = allSkills;
  const { allSkillsAverage, hardSkillsAverage, softSkillsAverage } = prepareSkillsDataStatistics({
    hardSkillMark,
    softSkillMark,
  });

  return (
    <Box sx={styles.wrapper}>
      <Typography component='h6' variant='h6'>
        {t('singleScheduledInterview.statistic.title')}
      </Typography>
      <Box sx={styles.boxCharts}>
        <Box sx={styles.chart}>
          <Typography component='p' variant='subtitle3'>
            {t('interviews.passedInterviews.interviewStatisticsSoftSkills')}
          </Typography>
          <LevelGauge
            colorGrad='gradientSoftSkills'
            fz={16}
            gradient={
              <linearGradient id='gradientSoftSkills' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: softSkillsColors.grad1, stopOpacity: 1 }} />
                <stop offset='50%' style={{ stopColor: softSkillsColors.grad2, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: softSkillsColors.grad3, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={81}
            text={({ value }) => `${value / 10}/10`}
            transformX={-15}
            value={softSkillsAverage}
          />
        </Box>
        <Box sx={styles.chart}>
          <Typography component='p' variant='subtitle3'>
            {t('interviews.passedInterviews.interviewStatisticsHardSkills')}
          </Typography>
          <LevelGauge
            colorGrad='gradientHardSkills'
            fz={16}
            gradient={
              <linearGradient id='gradientHardSkills' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: hardSkillsColors.grad1, stopOpacity: 1 }} />
                <stop offset='50%' style={{ stopColor: hardSkillsColors.grad2, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: hardSkillsColors.grad3, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={61}
            text={({ value }) => `${value / 10}/10`}
            transformX={-15}
            value={hardSkillsAverage}
          />
        </Box>
        <Box sx={styles.chart}>
          <Typography component='p' variant='subtitle3'>
            {t('interviews.passedInterviews.interviewStatisticsOverall')}
          </Typography>
          <LevelGauge
            colorGrad='gradientOverall'
            fz={16}
            gradient={
              <linearGradient id='gradientOverall' x1='0%' x2='100%' y1='0%' y2='0%'>
                <stop offset='0%' style={{ stopColor: overallColors.grad1, stopOpacity: 1 }} />
                <stop offset='25%' style={{ stopColor: overallColors.grad2, stopOpacity: 1 }} />
                <stop offset='75%' style={{ stopColor: overallColors.grad3, stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: overallColors.grad3, stopOpacity: 1 }} />
              </linearGradient>
            }
            height={61}
            text={({ value }) => `${value / 10}/10`}
            transformX={-15}
            value={allSkillsAverage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Statistic;
