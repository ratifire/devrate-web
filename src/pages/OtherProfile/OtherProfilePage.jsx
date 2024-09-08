import React, { memo } from 'react';
import { OtherProfileTemplate } from '../../Templates';
import { Box, CircularProgress, Container, Paper } from '@mui/material';
import { styles } from './OtherProfilePage.styles';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
import SkillsSection from '../../components/PageComponents/OtherProfileComponents/SkillsSection/SkillsSection';
import BaseUserInfo from '../../components/PageComponents/OtherProfileComponents/BaseUserInfo';
import RightSection from '../../components/PageComponents/OtherProfileComponents/RightSection';
import useAuth from '../../utils/hooks/useAuth';
import { useParams, Navigate } from 'react-router-dom'; // Додаємо Navigate
import ExperienceSection from '../../components/PageComponents/OtherProfileComponents/ExperienceSection';
import { useGetPersonalUserQuery } from '../../redux/user/personal/personalApiSlice';

const OtherProfilePage = () => {
  const { userId } = useParams();
  useAuth();

  const { data: dataPersonal, error, isLoading } = useGetPersonalUserQuery(userId);
  
  if (isLoading) {
    return <Box sx={styles.loading}><CircularProgress /></Box>;
  }
  
  if (error || !dataPersonal) {
    return <Navigate to="/404" />;
  }
  
  const MemoizedProfileHeader = memo(ProfileHeader);
  const MemoizedBaseUserInfo = memo(BaseUserInfo);
  const MemoizedSkillsSection = memo(SkillsSection);
  const MemoizedRightSection = memo(RightSection);
  const MemoizedExperienceSection = memo(ExperienceSection);
  
  return (
    <OtherProfileTemplate>
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
    </OtherProfileTemplate>
  );
};

export default OtherProfilePage;
