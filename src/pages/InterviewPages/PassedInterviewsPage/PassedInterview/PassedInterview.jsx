import { Suspense } from 'react';
import { Box, Paper, Typography } from '@mui/material';

import HardSkills from '../../../../components/PageComponents/SpecializationComponents/HardSkills/index.js';
import SoftSkills from '../../../../components/PageComponents/SpecializationComponents/SoftSkills/index.js';
import InterviewInfo from '../InverviewInfo/InterviewInfo.jsx';
import InterviewFeedback from '../InterviewFeedback/InterviewFeedback.jsx';
import { SkillsSkeleton } from '../../../../components/UI/Skeleton/index.js';
import { styles } from './PassedInterview.styles';

const PassedInterview = () => {
  return (
    <Box sx={styles.mainContent}>
      <Paper sx={styles.userInfo}>
        <Suspense>UserInfo</Suspense>
      </Paper>
      <Paper sx={styles.interviewersAssessment}>
        <Typography sx={styles.interviewersAssessmentTitle} variant='h6'>
          Interviewer`&#39;`s assessment
        </Typography>
        <Box sx={styles.skillsWrapper}>
          <Paper sx={styles.hardSkills}>
            <Suspense fallback={<SkillsSkeleton />}>
              <HardSkills />
            </Suspense>
          </Paper>
          <Paper sx={styles.sortSkills}>
            <Suspense fallback={<SkillsSkeleton />}>
              <SoftSkills />
            </Suspense>
          </Paper>
        </Box>
      </Paper>
      <Paper sx={styles.interviewInfo}>
        <Suspense>
          <InterviewInfo />
        </Suspense>
      </Paper>
      <Paper sx={styles.statistics}>
        <Suspense>Statistics</Suspense>
      </Paper>
      <Paper sx={styles.interviewFeedback}>
        <Suspense>
          <InterviewFeedback />
        </Suspense>
      </Paper>
    </Box>
  );
};
export default PassedInterview;
