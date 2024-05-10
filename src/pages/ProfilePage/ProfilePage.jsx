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
import getCookie from '../../utils/helpers/getCookie';
import ExperienceSection from '../../components/ProfileComponents/ExperienceSection';

const ProfilePage = () => {
  const name = 'Олена Бондаренко';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCredentials({ isAuthenticated: Boolean(getCookie('JSESSIONID')) }));
  }, [getCookie('JSESSIONID')]);

  return (
    <ProfileTemplate>
      <ProfileHeader userName={name} />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper xs={4} sx={styles.baseUserInfo}>
            <BaseUserInfo userName={name} />
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
