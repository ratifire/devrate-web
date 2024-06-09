import React, { useEffect } from 'react';
import { ProfileTemplate } from '../../Templates';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './ProfilePage.styles';
import SkillsSection from '../../components/ProfileComponents/SkillsSection/SkillsSection';
import ProfileHeader from '../../components/ProfileComponents/ProfileHeader';
import BaseUserInfo from '../../components/ProfileComponents/BaseUserInfo';
import RightSection from '../../components/ProfileComponents/RightSection';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/auth/authSlice';
import ExperienceSection from '../../components/ProfileComponents/ExperienceSection';
import Cookies from 'js-cookie'

const ProfilePage = () => {
  const dispatch = useDispatch();

  const cookies = Cookies.get('JSESSIONID');

  useEffect(() => {
    dispatch(setCredentials({ isAuthenticated: Boolean(cookies) }));
  }, [cookies]);

  return (
    <ProfileTemplate>
      <ProfileHeader />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.baseUserInfo}>
            <BaseUserInfo userName={name} />
          </Paper>
          <Paper sx={styles.skills}>
            <SkillsSection />
          </Paper>
          <Paper sx={styles.right}>
            <RightSection />
          </Paper>
          <Paper sx={styles.experience}>
            <ExperienceSection />
          </Paper>
        </Box>
      </Container>
    </ProfileTemplate>
  );
};

export default ProfilePage;
