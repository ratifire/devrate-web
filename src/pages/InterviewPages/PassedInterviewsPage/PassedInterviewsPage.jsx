import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Outlet } from 'react-router';
import InterviewsSkeleton from '../../../components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllPassedInterviewsQuery } from '../../../redux/interviews/passedInterviewsApiSlice.js';
import { styles } from './PassedInterviewsPage.styles';

const SideBar = lazy(() => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar/SideBar'));

const MemoizedSideBar = memo(SideBar);

const PassedInterviewsPage = () => {
  const [page, setPage] = useState(1);
  const { data: passedInterviews, isFetching, isLoading } = useGetAllPassedInterviewsQuery({ page, size: 5 });
  const lastEventRef = useRef(null);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching && !isLoading && passedInterviews?.totalPages !== page) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [isFetching, isLoading, passedInterviews?.totalPages, page]
  );

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }),
    []
  );

  useEffect(() => {
    if (!lastEventRef.current) return;

    const observer = new IntersectionObserver(handleObserver, options);

    observer.observe(lastEventRef.current);

    return () => {
      if (lastEventRef.current) {
        observer.unobserve(lastEventRef.current);
      }
    };
  }, [lastEventRef.current, passedInterviews?.content, handleObserver]);

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.interviewSideBar}>
          <Suspense fallback={<InterviewsSkeleton />}>
            <MemoizedSideBar interviews={passedInterviews?.content} lastEventRef={lastEventRef} />
          </Suspense>
        </Paper>
        <Outlet />
      </Box>
    </Container>
  );
};

export default PassedInterviewsPage;
