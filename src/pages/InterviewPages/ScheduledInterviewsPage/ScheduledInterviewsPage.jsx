import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense, useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import InterviewsSkeleton from '../../../components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllScheduledInterviewsQuery } from '../../../redux/interviews/scheduledInterviewsApiSlice';
import { useGetSpecializationByUserIdQuery } from '../../../redux/specialization/specializationApiSlice.js';
import EmptyInterviewTab from '../EmptyInterviewTab/index.js';
import { emptyInterviewTabsPictures } from '../../../utils/constants/emptyTabsPictures.js';
import { styles } from './ScheduledInterviewsPage.styles';

const SideBar = lazy(
  () => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar/SideBar.jsx')
);

const MemoizedSideBar = memo(SideBar);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const ScheduledInterviewsPage = () => {
  const [page, setPage] = useState(0);
  const { data: scheduledInterviews, isFetching, isLoading } = useGetAllScheduledInterviewsQuery({ page, size: 6 });
  const [lastEventRef, setLastEventRef] = useState(null);
  const { id } = useSelector((state) => state.auth.user.data);
  const { data: specializations } = useGetSpecializationByUserIdQuery(id, { skip: !id });
  const isSpecializations = !!specializations;
  const isScheduledInterviewList = scheduledInterviews?.size > 0;

  const refHandler = (el) => {
    setLastEventRef(el);
  };

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching && !isLoading && scheduledInterviews?.totalPages !== page) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [isFetching, isLoading, scheduledInterviews?.totalPages, page]
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
  }, [lastEventRef, scheduledInterviews?.content, handleObserver]);

  return !scheduledInterviews || !isScheduledInterviewList ? (
    <EmptyInterviewTab
      isSpecializations
      svg={
        isSpecializations
          ? emptyInterviewTabsPictures.emptyScheduledPic
          : emptyInterviewTabsPictures.emptySpecialization.scheduled
      }
      tab='Passed'
    />
  ) : (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.box}>
          <Paper>
            <Suspense fallback={<InterviewsSkeleton />}>
              <MemoizedSideBar interviews={scheduledInterviews?.content} refHandler={refHandler} />
            </Suspense>
          </Paper>
        </Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default ScheduledInterviewsPage;
