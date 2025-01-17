import { lazy, Suspense } from 'react';
import { Box, Container, Paper } from '@mui/material';
import { BlogSkeleton, FaqSkeleton } from '../../components/UI/Skeleton';
import { styles } from './FaqPage.styles';

const Blog = lazy(() => import('../../components/PageComponents/FaqComponents/Blog'));
const Faq = lazy(() => import('../../components/PageComponents/FaqComponents/Faq'));

const FaqPage = () => {
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.faq}>
          <Suspense fallback={<FaqSkeleton />}>
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
  );
};
export default FaqPage;
