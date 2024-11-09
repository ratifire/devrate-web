import React, { Suspense } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import { styles } from './SpecialisationPage.styles';
import SpecializationTemplate from '../../Templates/SpecializationTemplate';
import { useTranslation } from 'react-i18next';
import {
  CategoriesSkeleton,
  HardSkillsChartSkeleton,
  InterviewChartSkeleton,
  InterviewsSkeleton,
  LevelSkeleton,
  SkillsAssessmentChartSkeleton,
  SkillsSkeleton,
} from '../../components/UI/Skeleton';
import LevelChartSkeleton from '../../components/UI/Skeleton/Pages/specializationSkeleton/LevelChartSkeleton';

const ProfileHeader = React.lazy(() => import('../../components/PageComponents/ProfileHeader'));
const SpecializationLevel = React.lazy(
  () => import('../../components/PageComponents/SpecializationComponents/SpecializationLevel')
);
const HardSkills = React.lazy(() => import('../../components/PageComponents/SpecializationComponents/HardSkills'));
const SpecialisationCategories = React.lazy(
  () => import('../../components/PageComponents/SpecializationComponents/SpecializationCategories')
);
const Interviews = React.lazy(() => import('../../components/PageComponents/SpecializationComponents/Interviews'));
const SoftSkills = React.lazy(() => import('../../components/PageComponents/SpecializationComponents/SoftSkills'));
const InterviewChart = React.lazy(
  () => import('../../components/PageComponents/SpecializationComponents/Statistics/InteviewChart/InterviewChart')
);
const SkillsAssessmentChart = React.lazy(
  () =>
    import(
      '../../components/PageComponents/SpecializationComponents/Statistics/SkillAssessmentChart/SkillsAssessmentChart'
    )
);
const HardSkillsChart = React.lazy(
  () => import('../../components/PageComponents/SpecializationComponents/Statistics/HardSkillsChart/HardSkillsChart')
);
const LevelChart = React.lazy(
  () => import('../../components/PageComponents/SpecializationComponents/Statistics/LevelChart/LevelChart')
);

const MemoizedProfileHeader = React.memo(ProfileHeader);
const MemoizedSpecializationLevel = React.memo(SpecializationLevel);
const MemoizedHardSkills = React.memo(HardSkills);
const MemoizedSpecialisationCategories = React.memo(SpecialisationCategories);
const MemoizedInterviews = React.memo(Interviews);
const MemoizedSoftSkills = React.memo(SoftSkills);
const MemoizedInterviewChart = React.memo(InterviewChart);
const MemoizedSkillsAssessmentChart = React.memo(SkillsAssessmentChart);
const MemoizedHardSkillsChart = React.memo(HardSkillsChart);
const MemoizedLevelChart = React.memo(LevelChart);

const SpecializationPage = () => {
  const { t } = useTranslation();

  return (
    <SpecializationTemplate>
      <MemoizedProfileHeader />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.specialisationCategories}>
            <Suspense fallback={<CategoriesSkeleton />}>
              <MemoizedSpecialisationCategories />
            </Suspense>
          </Paper>
          <Paper sx={styles.specialisationLevel}>
            <Suspense fallback={<LevelSkeleton />}>
              <MemoizedSpecializationLevel />
            </Suspense>
          </Paper>
          <Paper sx={styles.specialisationInterviewParticipation}>
            <Suspense fallback={<InterviewsSkeleton />}>
              <MemoizedInterviews />
            </Suspense>
          </Paper>
          <Paper sx={styles.specialisationHardSkills}>
            <Suspense fallback={<SkillsSkeleton />}>
              <MemoizedHardSkills />
            </Suspense>
          </Paper>
          <Paper sx={styles.specialisationSoftSkills}>
            <Suspense fallback={<SkillsSkeleton />}>
              <MemoizedSoftSkills />
            </Suspense>
          </Paper>
          <Paper sx={styles.specialisationStatistics}>
            <Typography variant='h6' sx={styles.statisticTitle}>
              {t('specialization.statistics.title')}
            </Typography>
            <Box sx={styles.statisticWrapper}>
              <Paper sx={styles.level}>
                <Suspense fallback={<LevelChartSkeleton />}>
                  <MemoizedLevelChart />
                </Suspense>
              </Paper>
              <Paper sx={styles.averageSkillsScore}>
                <Suspense fallback={<SkillsAssessmentChartSkeleton />}>
                  <MemoizedSkillsAssessmentChart />
                </Suspense>
              </Paper>
              <Paper sx={styles.hardSkillsByProductivity}>
                <Suspense fallback={<HardSkillsChartSkeleton />}>
                  <MemoizedHardSkillsChart />
                </Suspense>
              </Paper>
              <Paper sx={styles.interview}>
                <Suspense fallback={<InterviewChartSkeleton />}>
                  <MemoizedInterviewChart />
                </Suspense>
              </Paper>
            </Box>
          </Paper>
        </Box>
      </Container>
    </SpecializationTemplate>
  );
};

export default SpecializationPage;
