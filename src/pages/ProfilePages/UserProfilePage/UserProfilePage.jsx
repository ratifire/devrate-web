import React, { lazy, memo, Suspense } from 'react';
import UserProfileTemplate from '../../../Templates/ProfileTemplates/UserProfileTemplate';
import { Box, CircularProgress, Container, Paper } from '@mui/material';
import { styles } from './UserProfilePage.styles';
import ProfileHeader from '../../../components/PageComponents/ProfileHeader';
import useAuth from '../../../utils/hooks/useAuth';
import { useParams, Navigate } from 'react-router-dom';
import { useGetPersonalUserQuery } from '../../../redux/user/personal/personalApiSlice';
import {
  BaseUserInfoSkeleton,
  ExperienceSectionSkeleton,
  RightSectionSkeleton,
  SkillsSectionSkeleton
} from '../../../components/UI/Skeleton';

const SkillsSection = lazy(
  () => import('../../../components/PageComponents/ProfileComponents/UserProfile/SkillsSection/SkillsSection')
);
const BaseUserInfo = lazy(
  () => import('../../../components/PageComponents/ProfileComponents/UserProfile/BaseUserInfo')
);
const RightSection = lazy(
  () => import('../../../components/PageComponents/ProfileComponents/UserProfile/RightSection')
);
const ExperienceSection = lazy(
  () => import('../../../components/PageComponents/ProfileComponents/UserProfile/ExperienceSection')
);

const MemoizedProfileHeader = memo(ProfileHeader);
const MemoizedBaseUserInfo = memo(BaseUserInfo);
const MemoizedSkillsSection = memo(SkillsSection);
const MemoizedRightSection = memo(RightSection);
const MemoizedExperienceSection = memo(ExperienceSection);

const UserProfilePage = () => {
  const { userId } = useParams();
  useAuth();

  const { data: dataPersonal, error, isLoading } = useGetPersonalUserQuery(userId);

  if (isLoading) {
    return (
      <Box sx={styles.loading}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !dataPersonal) {
    return <Navigate to='/404' />;
  }

  return (
    <UserProfileTemplate>
      <MemoizedProfileHeader />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.baseUserInfo}>
            <Suspense fallback={<BaseUserInfoSkeleton />}>
              <MemoizedBaseUserInfo id={userId} />
            </Suspense>
          </Paper>
          <Paper sx={styles.skills}>
            <Suspense fallback={<SkillsSectionSkeleton />}>
              <MemoizedSkillsSection id={userId} />
            </Suspense>
          </Paper>
          <Paper sx={styles.right}>
            <Suspense fallback={<RightSectionSkeleton />}>
              <MemoizedRightSection id={userId} />
            </Suspense>
          </Paper>
          <Paper sx={styles.experience}>
            <Suspense fallback={<ExperienceSectionSkeleton />}>
              <MemoizedExperienceSection id={userId} />
            </Suspense>
          </Paper>
        </Box>
      </Container>
    </UserProfileTemplate>
  );
};

export default UserProfilePage;
