import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Outlet } from 'react-router';
import InterviewsSkeleton from '../../../components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllPassedInterviewsQuery } from '../../../redux/interviews/passedInterviewsApiSlice.js';
import { styles } from './PassedInterviewsPage.styles';

const SideBar = lazy(() => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar/SideBar'));

const MemoizedPassedSideBar = memo(SideBar);

const PassedInterviewsPage = () => {
  const [page, setPage] = useState(1);
  const [interviews, setInterviews] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { data: passedInterviews, isFetching } = useGetAllPassedInterviewsQuery({ page, size: 5 });
  const lastEventRef = useRef(null);
  useEffect(() => {
    if (passedInterviews?.content) {
      setInterviews((prevInterviews) => [...prevInterviews, ...passedInterviews.content]);
      if (passedInterviews.totalPages === page) {
        setHasMore(false);
      }
    }
  }, [passedInterviews]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [isFetching, hasMore]
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
  }, [lastEventRef.current, interviews]);

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.interviewSideBar}>
          <Suspense fallback={<InterviewsSkeleton />}>
            <MemoizedPassedSideBar interviews={interviews} lastEventRef={lastEventRef} />
          </Suspense>
        </Paper>
        <Outlet />
      </Box>
    </Container>
  );
};

export default PassedInterviewsPage;
