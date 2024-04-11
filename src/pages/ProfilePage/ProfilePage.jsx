import React from 'react';
import { ProfileTemplate } from '../../Templates';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './ProfilePage.styles';

const ProfilePage = () => {
  return (
    <ProfileTemplate>
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper xs={4} sx={styles.baseUserInfo}>
            Base user info
          </Paper>
          <Paper xs={5} sx={styles.skills}>
            Skills
          </Paper>
          <Paper xs={3} sx={styles.right}>
            Right section
          </Paper>
          <Paper xs={8} sx={styles.experience}>
            Experience section
          </Paper>
        </Box>
      </Container>
    </ProfileTemplate>
  );
};

export default ProfilePage;
