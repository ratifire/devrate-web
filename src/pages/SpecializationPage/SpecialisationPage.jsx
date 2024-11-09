import React, { lazy, memo, Suspense } from 'react';
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
import ProfileHeader from '../../components/PageComponents/ProfileHeader';

const SpecializationLevel = lazy(
  () => import('../../components/PageComponents/SpecializationComponents/SpecializationLevel')
);
const HardSkills = lazy(() => import('../../components/PageComponents/SpecializationComponents/HardSkills'));
const SpecialisationCategories = lazy(
  () => import('../../components/PageComponents/SpecializationComponents/SpecializationCategories')
);
const Interviews = lazy(() => import('../../components/PageComponents/SpecializationComponents/Interviews'));
const SoftSkills = lazy(() => import('../../components/PageComponents/SpecializationComponents/SoftSkills'));
const InterviewChart = lazy(
  () => import('../../components/PageComponents/SpecializationComponents/Statistics/InteviewChart/InterviewChart')
);
const SkillsAssessmentChart = lazy(
  () =>
    import(
      '../../components/PageComponents/SpecializationComponents/Statistics/SkillAssessmentChart/SkillsAssessmentChart'
    )
);
const HardSkillsChart = lazy(
  () => import('../../components/PageComponents/SpecializationComponents/Statistics/HardSkillsChart/HardSkillsChart')
);
const LevelChart = lazy(
  () => import('../../components/PageComponents/SpecializationComponents/Statistics/LevelChart/LevelChart')
);

const MemoizedProfileHeader = memo(ProfileHeader);
const MemoizedSpecializationLevel = memo(SpecializationLevel);
const MemoizedHardSkills = memo(HardSkills);
const MemoizedSpecialisationCategories = memo(SpecialisationCategories);
const MemoizedInterviews = memo(Interviews);
const MemoizedSoftSkills = memo(SoftSkills);
const MemoizedInterviewChart = memo(InterviewChart);
const MemoizedSkillsAssessmentChart = memo(SkillsAssessmentChart);
const MemoizedHardSkillsChart = memo(HardSkillsChart);
const MemoizedLevelChart = memo(LevelChart);

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
