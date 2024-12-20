import { memo } from 'react';
import { Box, Container, Paper } from '@mui/material';
import UserProfileTemplate from '../../../../../Templates/ProfileTemplates/UserProfileTemplate';
import { styles } from '../../../../../pages/ProfilePages/UserProfilePage/UserProfilePage.styles';
import { SkillsSectionSkeleton } from '../personalProfileSkeleton';
import ProfileHeader from '../../../../PageComponents/ProfileHeader';
import { UserExperienceSectionSkeleton } from '../../index';
import UserBaseUserInfoSkeleton from './UserBaseUserInfoSkeleton';
import UserRightSectionSkeleton from './UserRightSectionSkeleton';
const MemoizedProfileHeader = memo(ProfileHeader);

const UserProfileSkeleton = () => {
  return (
    <UserProfileTemplate>
      <MemoizedProfileHeader />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.baseUserInfo}>
            <UserBaseUserInfoSkeleton />
          </Paper>
          <Paper sx={styles.skills}>
            <SkillsSectionSkeleton />
          </Paper>
          <Paper sx={styles.right}>
            <UserRightSectionSkeleton />
          </Paper>
          <Paper sx={styles.experience}>
            <UserExperienceSectionSkeleton />
          </Paper>
        </Box>
      </Container>
    </UserProfileTemplate>
  );
};

export default UserProfileSkeleton;
