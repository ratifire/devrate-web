import React, { lazy, memo, Suspense, useEffect } from 'react';
import UserProfileTemplate from '../../../Templates/ProfileTemplates/UserProfileTemplate';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './UserProfilePage.styles';
import ProfileHeader from '../../../components/PageComponents/ProfileHeader';
import useAuth from '../../../utils/hooks/useAuth';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useGetPersonalUserQuery } from '../../../redux/user/personal/personalApiSlice';
import UserProfileSkeleton from '../../../components/UI/Skeleton/Pages/userProfileSkeleton';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/auth/authSlice';

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
  const numericUserId = Number(userId);
  
  const navigate = useNavigate();
  useAuth();
  
  const { data } = useSelector(selectCurrentUser);

  useEffect(() => {
    if (numericUserId === data.id) {
      navigate('/profile');
    }
  }, [numericUserId, data.id]);

  const { data: dataPersonal, error, isLoading } = useGetPersonalUserQuery(numericUserId);

  if (isLoading) {
    return <UserProfileSkeleton />;
  }

  if (error || !dataPersonal) {
    return <Navigate to='/404' />;
  }

  return (
    <Suspense fallback={<UserProfileSkeleton />}>
      <UserProfileTemplate>
        <MemoizedProfileHeader />
        <Container maxWidth='xl' sx={styles.container}>
          <Box sx={styles.contentWrapper}>
            <Paper sx={styles.baseUserInfo}>
              <MemoizedBaseUserInfo id={numericUserId} />
            </Paper>
            <Paper sx={styles.skills}>
              <MemoizedSkillsSection id={numericUserId} />
            </Paper>
            <Paper sx={styles.right}>
              <MemoizedRightSection id={numericUserId} />
            </Paper>
            <Paper sx={styles.experience}>
              <MemoizedExperienceSection id={numericUserId} />
            </Paper>
          </Box>
        </Container>
      </UserProfileTemplate>
    </Suspense>
  );
};

export default UserProfilePage;
