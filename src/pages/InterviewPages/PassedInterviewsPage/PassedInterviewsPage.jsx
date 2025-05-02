import { lazy, memo, Suspense, useCallback, useEffect, useState, useLayoutEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import InterviewsSkeleton from '@components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllPassedInterviewsQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice.js';
import navigationLinks from '@router/links.js';
import { emptyInterviewTabsPictures } from '@utils/constants/emptyTabsPictures.js';
import { useGetSpecializationByUserIdQuery } from '@redux/api/slices/specialization/specializationApiSlice.js';
import { InterviewContainer } from '@components/UI/Interview/index.js';
import EmptyInterviewTab from '../EmptyInterviewTab/index.js';

const SideBar = lazy(() => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar/SideBar'));

const MemoizedSideBar = memo(SideBar);

const PassedInterviewsPage = () => {
  const { id } = useSelector((state) => state.auth.user.data);
  const [page, setPage] = useState(0);
  const { data: passedInterviews, isFetching, isLoading } = useGetAllPassedInterviewsQuery({ page, size: 5 });
  const [lastEventRef, setLastEventRef] = useState(null);
  const navigate = useNavigate();
  const { data: specializations } = useGetSpecializationByUserIdQuery(id, { skip: !id });

  const isSpecializations = !!specializations?.length;
  const refHandler = useCallback(
    (el) => {
      if (el && passedInterviews?.totalPages > page) {
        setLastEventRef(el);
      } else if (!el) {
        setLastEventRef(null);
      }
    },
    [passedInterviews?.totalPages, page]
  );

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

  if (isLoading) {
    return (
      <InterviewContainer>
        <InterviewsSkeleton />
      </InterviewContainer>
    );
  }

  if (!passedInterviews?.content?.length || !isSpecializations) {
    return (
      <EmptyInterviewTab
        isSpecializations={isSpecializations}
        svg={
          !isSpecializations
            ? emptyInterviewTabsPictures.emptySpecialization.passed
            : emptyInterviewTabsPictures.emptyPassedPic
        }
        tab='Passed'
      />
    );
  }

  return (
    <InterviewContainer>
      <Suspense fallback={<InterviewsSkeleton />}>
        <MemoizedSideBar passedInterview interviews={passedInterviews?.content} refHandler={refHandler} />
      </Suspense>
    </InterviewContainer>
  );
};

export default PassedInterviewsPage;
