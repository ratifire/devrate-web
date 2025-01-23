import { lazy, memo, Suspense } from 'react';
import { Box, Container, Paper } from '@mui/material';
import {
  BaseUserInfoSkeleton,
  ExperienceSectionSkeleton,
  RightSectionSkeleton,
  SkillsSectionSkeleton,
} from '../../../components/UI/Skeleton';
import { styles } from './PersonalProfilePage.styles';

const SkillsSection = lazy(
  () => import('../../../components/PageComponents/ProfileComponents/PersonalProfile/SkillsSection')
);
const BaseUserInfo = lazy(
  () => import('../../../components/PageComponents/ProfileComponents/PersonalProfile/BaseUserInfo')
);
const RightSection = lazy(
  () => import('../../../components/PageComponents/ProfileComponents/PersonalProfile/RightSection')
);
const ExperienceSection = lazy(
  () => import('../../../components/PageComponents/ProfileComponents/PersonalProfile/ExperienceSection')
);

const MemoizedBaseUserInfo = memo(BaseUserInfo);
const MemoizedSkillsSection = memo(SkillsSection);
const MemoizedRightSection = memo(RightSection);
const MemoizedExperienceSection = memo(ExperienceSection);

const PersonalProfilePage = () => {
  return (
    <>
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.baseUserInfo}>
            <Suspense fallback={<BaseUserInfoSkeleton />}>
              <MemoizedBaseUserInfo />
            </Suspense>
          </Paper>
          <Paper sx={styles.skills}>
            <Suspense fallback={<SkillsSectionSkeleton />}>
              <MemoizedSkillsSection />
            </Suspense>
          </Paper>
          <Paper sx={styles.right}>
            <Suspense fallback={<RightSectionSkeleton />}>
              <MemoizedRightSection />
            </Suspense>
          </Paper>
          <Paper sx={styles.experience}>
            <Suspense fallback={<ExperienceSectionSkeleton />}>
              <MemoizedExperienceSection />
            </Suspense>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default PersonalProfilePage;
