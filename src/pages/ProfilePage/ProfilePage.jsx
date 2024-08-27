import React, { memo } from 'react';
import { ProfileTemplate } from '../../Templates';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './ProfilePage.styles';
import SkillsSection from '../../components/PageComponents/ProfileComponents/SkillsSection/SkillsSection';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
import BaseUserInfo from '../../components/PageComponents/ProfileComponents/BaseUserInfo';
import RightSection from '../../components/PageComponents/ProfileComponents/RightSection';
import ExperienceSection from '../../components/PageComponents/ProfileComponents/ExperienceSection';
import useAuth from '../../utils/hooks/useAuth';

const ProfilePage = () => {
  useAuth();
  
  const MemoizedProfileHeader = memo(ProfileHeader);
  const MemoizedBaseUserInfo = memo(BaseUserInfo);
  const MemoizedSkillsSection = memo(SkillsSection);
  const MemoizedRightSection = memo(RightSection);
  const MemoizedExperienceSection = memo(ExperienceSection);
  
  return (
    <ProfileTemplate>
      <MemoizedProfileHeader />
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.baseUserInfo}>
            <MemoizedBaseUserInfo />
          </Paper>
          <Paper sx={styles.skills}>
            <MemoizedSkillsSection />
          </Paper>
          <Paper sx={styles.right}>
            <MemoizedRightSection />
          </Paper>
          <Paper sx={styles.experience}>
            <MemoizedExperienceSection />
          </Paper>
        </Box>
      </Container>
    </ProfileTemplate>
  );
};

export default ProfilePage;
