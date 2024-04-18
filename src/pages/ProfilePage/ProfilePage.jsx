import React from 'react';
import { ProfileTemplate } from '../../Templates';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './ProfilePage.styles';
import SkillsSection from '../../components/ProfileComponents/SkillsSection/SkillsSection';
import ProfileHeader from '../../components/ProfileComponents/ProfileHeader';
import BaseUserInfo from '../../components/ProfileComponents/BaseUserInfo';
import RightSection from '../../components/ProfileComponents/RightSection';
import ExperienceSection from '../../components/ProfileComponents/ExperienceSection';

const ProfilePage = () => {
  return (
    <ProfileTemplate>
      <Container maxWidth='xl' sx={styles.container}>
        <ProfileHeader />
        <Box sx={styles.contentWrapper}>
          <Paper xs={4} sx={styles.baseUserInfo}>
            <BaseUserInfo />
          </Paper>
          <Paper xs={5} sx={styles.skills}>
            <SkillsSection />
          </Paper>
          <Paper xs={3} sx={styles.right}>
            <RightSection />
          </Paper>
          <Paper xs={8} sx={styles.experience}>
            <ExperienceSection />
          </Paper>
        </Box>
      </Container>
    </ProfileTemplate>
  );
};

export default ProfilePage;
