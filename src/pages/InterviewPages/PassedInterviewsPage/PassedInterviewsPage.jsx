import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense, useCallback, useEffect, useMemo, useState, useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import InterviewsSkeleton from '../../../components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllPassedInterviewsQuery } from '../../../redux/interviews/passedInterviewsApiSlice.js';
import navigationLinks from '../../../router/links.js';
import EmptyInterviewTab from '../EmptyInterviewTab/index.js';
import { emptyInterviewTabsPictures } from '../../../utils/constants/emptyTabsPictures.js';
import { useGetSpecializationByUserIdQuery } from '../../../redux/specialization/specializationApiSlice.js';
import { styles } from './PassedInterviewsPage.styles';

const SideBar = lazy(() => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar/SideBar'));

const MemoizedSideBar = memo(SideBar);

const PassedInterviewsPage = () => {
  const { id } = useSelector((state) => state.auth.user.data);
  const [page, setPage] = useState(0);
  const { data: passedInterviews, isFetching, isLoading } = useGetAllPassedInterviewsQuery({ page, size: 5 });
  const [lastEventRef, setLastEventRef] = useState(null);
  const navigate = useNavigate();
  const { data: specializations } = useGetSpecializationByUserIdQuery(id, { skip: !id });

  const isPassedInterviewList = Boolean(passedInterviews?.content.length);
  const isSpecializations = Boolean(specializations?.length);
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

  return !isSpecializations || !isPassedInterviewList ? (
    <EmptyInterviewTab
      isSpecializations={isSpecializations}
      svg={
        isSpecializations
          ? emptyInterviewTabsPictures.emptyPassedPic
          : emptyInterviewTabsPictures.emptySpecialization.passed
      }
      tab='Passed'
    />
  ) : (
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
