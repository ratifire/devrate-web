import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DARK_THEME } from '@utils/constants/Theme/theme';
import { useSelector } from 'react-redux';
import EmptyRequestPicDark from '../../../../assets/pictures/emptyInterviewTabsPictures/requestInterview/requestDark.svg?react';
import EmptyRequestPicLight from '../../../../assets/pictures/emptyInterviewTabsPictures/requestInterview/requestLight.svg?react';
import { styles } from './EmptyStatisticsPassedInterview.styles';

const EmptyStatisticsPassedInterview = () => {
  const { t } = useTranslation();
  const { mode } = useSelector((state) => state.theme);

  const EmptyInterviewSvg = mode === DARK_THEME ? EmptyRequestPicDark : EmptyRequestPicLight;

  return (
    <>
      <Typography className='emptyTitle' variant='h6'>
        {t('interviews.passedInterviews.interviewersAssessmentTitle')}
      </Typography>
      <Box sx={styles.mascotStatsBox}>
        <EmptyInterviewSvg />
      </Box>
      <Typography sx={styles.emptyStatsText} variant='subtitle2'>
        {t('interviews.emptyInterviewTabs.emptyStatistics')}
      </Typography>
    </>
  );
};

export default EmptyStatisticsPassedInterview;
