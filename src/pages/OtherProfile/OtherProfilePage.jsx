import React, { memo } from 'react';
import { OtherProfileTemplate } from '../../Templates';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './OtherProfilePage.styles';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
// import SkillsSection from '../../components/ProfileComponents/SkillsSection/SkillsSection';
import BaseUserInfo from '../../components/PageComponents/OtherProfileComponents/BaseUserInfo';
// import RightSection from '../../components/ProfileComponents/RightSection';
// import ExperienceSection from '../../components/ProfileComponents/ExperienceSection';
import useAuth from '../../utils/hooks/useAuth';
import { useParams } from 'react-router-dom';

const OtherProfilePage = () => {
  const { userId } = useParams();
  useAuth();

  const MemoizedProfileHeader = memo(ProfileHeader);
  const MemoizedBaseUserInfo = memo(BaseUserInfo);
  // const MemoizedSkillsSection = memo(SkillsSection);
  // const MemoizedRightSection = memo(RightSection);
  // const MemoizedExperienceSection = memo(ExperienceSection);

  return (
    <OtherProfileTemplate>
      <MemoizedProfileHeader />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.baseUserInfo}>{<MemoizedBaseUserInfo id={userId} />}</Paper>
          <Paper sx={styles.skills}>{/*<MemoizedSkillsSection />*/}</Paper>
          <Paper sx={styles.right}>{/*<MemoizedRightSection />*/}</Paper>
          <Paper sx={styles.experience}>{/*<MemoizedExperienceSection />*/}</Paper>
        </Box>
      </Container>
    </OtherProfileTemplate>
  );
};

export default OtherProfilePage;
