import React, { memo } from 'react';
import UserProfileTemplate from '../../../Templates/ProfileTemplates/UserProfileTemplate';
import { Box, CircularProgress, Container, Paper } from '@mui/material';
import { styles } from './UserProfilePage.styles';
import ProfileHeader from '../../../components/PageComponents/ProfileHeader';
import SkillsSection from '../../../components/PageComponents/ProfileComponents/UserProfile/SkillsSection/SkillsSection';
import BaseUserInfo from '../../../components/PageComponents/ProfileComponents/UserProfile/BaseUserInfo';
import RightSection from '../../../components/PageComponents/ProfileComponents/UserProfile/RightSection';
import useAuth from '../../../utils/hooks/useAuth';
import { useParams, Navigate } from 'react-router-dom'; // Додаємо Navigate
import ExperienceSection from '../../../components/PageComponents/ProfileComponents/UserProfile/ExperienceSection';
import { useGetPersonalUserQuery } from '../../../redux/user/personal/personalApiSlice';

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
    return <Box sx={styles.loading}><CircularProgress /></Box>;
  }
  
  if (error || !dataPersonal) {
    return <Navigate to="/404" />;
  }

  return (
    <UserProfileTemplate>
      <MemoizedProfileHeader />
      <Container maxWidth="xl" sx={styles.container}>
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
    </UserProfileTemplate>
  );
};

export default UserProfilePage;
