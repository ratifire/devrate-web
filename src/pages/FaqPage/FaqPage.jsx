import React, { lazy, memo, Suspense } from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styles } from './FaqPage.styles';
import { FaqTemplate } from '../../Templates';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
import { BlogSkeleton, FaqSkeleton } from '../../components/UI/Skeleton';

const Blog = lazy(() => import('../../components/PageComponents/FaqComponents/Blog'));
const Faq = lazy(() => import('../../components/PageComponents/FaqComponents/Faq'));

const MemoizedProfileHeader = memo(ProfileHeader);

const FaqPage = () => {
  return (
    <FaqTemplate>
      <MemoizedProfileHeader />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.faq}>
            <Suspense fallback={<FaqSkeleton/>}>
              <Faq />
            </Suspense>
          </Paper>
          <Paper sx={styles.blog}>
            <Suspense fallback={<BlogSkeleton />}>
              <Blog />
            </Suspense>
          </Paper>
        </Box>
      </Container>
    </FaqTemplate>
  );
};
export default FaqPage;
