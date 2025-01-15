import { lazy, memo, Suspense } from 'react';
import { Box, Container, Paper } from '@mui/material';
import { useParams, Navigate } from 'react-router';
import { useGetPersonalUserQuery } from '../../../redux/user/personal/personalApiSlice';
import UserProfileSkeleton from '../../../components/UI/Skeleton/Pages/userProfileSkeleton';
import { styles } from './UserProfilePage.styles';

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

const MemoizedBaseUserInfo = memo(BaseUserInfo);
const MemoizedSkillsSection = memo(SkillsSection);
const MemoizedRightSection = memo(RightSection);
const MemoizedExperienceSection = memo(ExperienceSection);

const UserProfilePage = () => {
  const { userId } = useParams();

  const { data: dataPersonal, error, isLoading } = useGetPersonalUserQuery(userId);

  if (isLoading) {
    return <UserProfileSkeleton />;
  }

  if (error || !dataPersonal) {
    return <Navigate to='/404' />;
  }

  return (
    <Suspense fallback={<UserProfileSkeleton />}>
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.baseUserInfo}>
            <MemoizedBaseUserInfo id={userId} />
          </Paper>
          <Paper sx={styles.skills}>
            <MemoizedSkillsSection id={userId} />
          </Paper>
          <Paper sx={styles.right}>
            <MemoizedRightSection id={userId} />
          </Paper>
          <Paper sx={styles.experience}>
            <MemoizedExperienceSection id={userId} />
          </Paper>
        </Box>
      </Container>
    </Suspense>
  );
};

export default UserProfilePage;
