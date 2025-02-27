import { Box, Container, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import useGetHeightElement from '../../../utils/hooks/useGetHeightElement.js';
import { styles } from './EmptyPassedInterviewsPage.styles';

const EmptyPassedInterviewsPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const ref = useGetHeightElement('.InterviewsPage');

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.box}>
          <Paper>
            <Box sx={styles.wrapper}>
              <Typography sx={styles.interviewTitle} variant='h4'>
                {t('interviews.sideBar.title')}s are not available
              </Typography>
              <Box sx={styles.scrollContainer(theme, ref.current)}>
                <Paper sx={styles.sideBarEventContainer}>
                  <Typography component='div' sx={styles.title} variant='subtitle2'>
                    {'Interview data is missing'}
                  </Typography>
                </Paper>
                <Paper sx={styles.sideBarEventContainer}>
                  <Typography component='div' sx={styles.title} variant='subtitle2'>
                    {'Interview data is missing'}
                  </Typography>
                  <Box sx={styles.titleLevelBox}>
                    <Typography component='div' sx={styles.title} variant='h6' />
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box className='InterviewsPage' sx={styles.mainContent}>
          <Paper sx={styles.userInfo}>
            <Box sx={styles.userCardWrapper}>
              <Box sx={styles.userCardBox}>
                <Typography variant='h6'>No Interview data available </Typography>
                <Box sx={styles.userCardBoxInfo} />
              </Box>
            </Box>
          </Paper>
          <Paper sx={styles.interviewersAssessment}>
            <Typography sx={styles.interviewersAssessmentTitle} variant='h6'>
              {t('interviews.passedInterviews.interviewersAssessmentTitle')} data not available
            </Typography>
            <Box sx={styles.userSkillsWrapper}>
              <Paper sx={styles.hardSkills}>
                <Box sx={styles.userSkillsWrapper}>
                  <Typography variant='h6'>{t('specialization.hardSkills.title')}</Typography>
                  <Box sx={styles.userSkillsInfo} />
                </Box>
              </Paper>
              <Paper sx={styles.hardSkills}>
                <Box sx={styles.userSkillsWrapper}>
                  <Typography variant='h6'>{t('specialization.softSkills.title')}</Typography>
                  <Box sx={styles.userSkillsInfo} />
                </Box>
              </Paper>
            </Box>
          </Paper>
          <Paper sx={styles.interviewInfo}>
            <Box sx={styles.interviewInfoWrapper}>
              <Typography sx={styles.interviewInfoTitle} variant='h6'>
                {t('interviews.passedInterviews.interviewInfoTitle')} not available
              </Typography>
              <Box sx={styles.interviewInfoTitleWrapper} />
            </Box>
          </Paper>
          <Paper sx={styles.statistics}>
            <Box sx={styles.statisticsWrapper}>
              <Typography sx={styles.statisticsTitle} variant='h6'>
                {t('interviews.passedInterviews.interviewStatisticsTitle')} not availble
              </Typography>
            </Box>
          </Paper>
          <Paper sx={styles.interviewFeedback}>
            <Box sx={styles.interviewFeedbackWrapper}>
              <Typography sx={styles.interviewFeedbackTitle} variant='h6'>
                {t('interviews.passedInterviews.interviewFeedbackTitle')} not available
              </Typography>
              <Paper sx={styles.interviewFeedbackText} />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default EmptyPassedInterviewsPage;
