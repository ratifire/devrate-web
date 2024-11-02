import React, { memo } from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './FaqPage.styles';
import { FaqTemplate } from '../../Templates';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
import { Blog, Faq } from '../../components/PageComponents/FaqComponents';

const MemoizedProfileHeader = memo(ProfileHeader);

const FaqPage = () => {
  
  return (
    <FaqTemplate>
      <MemoizedProfileHeader />
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.faq}>
            <Faq />
          </Paper>
          <Paper sx={styles.blog}>
            <Blog />
          </Paper>
        </Box>
      </Container>
    </FaqTemplate>
  );
};
export default FaqPage;