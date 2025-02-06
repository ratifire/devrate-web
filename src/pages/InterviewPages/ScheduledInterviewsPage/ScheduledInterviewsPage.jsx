import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router';
import InterviewsSkeleton from '../../../components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllScheduledInterviewsQuery } from '../../../redux/interviews/scheduledInterviewsApiSlice.js';
import { styles } from './ScheduledInterviewsPage.styles.js';

const SideBar = lazy(
  () => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar/SideBar.jsx')
);

const MemoizedSideBar = memo(SideBar);

const ScheduledInterviewsPage = () => {
  const [page, setPage] = useState(1);
  const [interviews, setInterviews] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { data: scheduledInterviews, isFetching } = useGetAllScheduledInterviewsQuery({ page, size: 5 });
  const lastEventRef = useRef(null);

  useEffect(() => {
    if (scheduledInterviews?.content) {
      setInterviews((prevInterviews) => [...prevInterviews, ...scheduledInterviews.content]);
      if (scheduledInterviews.totalPages === page) {
        setHasMore(false);
      }
    }
  }, [scheduledInterviews]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [isFetching, hasMore]
  );

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

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
            <MemoizedSideBar interviews={interviews} lastEventRef={lastEventRef} />
          </Suspense>
        </Paper>
        <Outlet />
      </Box>
    </Container>
  );
};

export default ScheduledInterviewsPage;
