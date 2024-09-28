import React, { memo } from 'react';
import PersonalProfileTemplate from '../../../Templates/ProfileTemplates/PersonalProfileTemplate';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './PersonalProfilePage.styles';
import SkillsSection from '../../../components/PageComponents/ProfileComponents/PersonalProfile/SkillsSection';
import ProfileHeader from '../../../components/PageComponents/ProfileHeader';
import BaseUserInfo from '../../../components/PageComponents/ProfileComponents/PersonalProfile/BaseUserInfo';
import RightSection from '../../../components/PageComponents/ProfileComponents/PersonalProfile/RightSection';
import ExperienceSection from '../../../components/PageComponents/ProfileComponents/PersonalProfile/ExperienceSection';
import useAuth from '../../../utils/hooks/useAuth';

const MemoizedProfileHeader = memo(ProfileHeader);
const MemoizedBaseUserInfo = memo(BaseUserInfo);
const MemoizedSkillsSection = memo(SkillsSection);
const MemoizedRightSection = memo(RightSection);
const MemoizedExperienceSection = memo(ExperienceSection);

const PersonalProfilePage = () => {
  useAuth();

  return (
    <PersonalProfileTemplate>
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
    </PersonalProfileTemplate>
  );
};

export default PersonalProfilePage;
