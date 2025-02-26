import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense, useCallback, useEffect, useMemo, useState, useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import InterviewsSkeleton from '@components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllPassedInterviewsQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice.js';
import navigationLinks from '@router/links.js';
import { styles } from './PassedInterviewsPage.styles';

const SideBar = lazy(() => import('@components/PageComponents/InterviewsComponents/InterviewSideBar/SideBar'));

const MemoizedSideBar = memo(SideBar);

const PassedInterviewsPage = () => {
  const [page, setPage] = useState(1);
  const { data: passedInterviews, isFetching, isLoading } = useGetAllPassedInterviewsQuery({ page, size: 5 });
  const [lastEventRef, setLastEventRef] = useState(null);
  const navigate = useNavigate();
  const refHandler = (el) => {
    setLastEventRef(el);
  };

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
    if (!lastEventRef) return;

    const observer = new IntersectionObserver(handleObserver, options);

    observer.observe(lastEventRef);

    return () => {
      if (lastEventRef) {
        observer.unobserve(lastEventRef);
      }
    };
  }, [lastEventRef, passedInterviews?.content, handleObserver]);

  const redirectToFirstInterview = useCallback(() => {
    if (!isLoading && passedInterviews?.content?.length > 0) {
      const firstInterviewId = passedInterviews.content[0].id;
      navigate(`${navigationLinks.passedInterviews}/${firstInterviewId}`, { replace: true });
    }
  }, [isLoading, passedInterviews, navigate]);

  useLayoutEffect(() => {
    redirectToFirstInterview();
  }, [redirectToFirstInterview]);

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.box}>
          <Paper>
            <Suspense fallback={<InterviewsSkeleton />}>
              <MemoizedSideBar passedInterview interviews={passedInterviews?.content} refHandler={refHandler} />
            </Suspense>
          </Paper>
        </Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default PassedInterviewsPage;
