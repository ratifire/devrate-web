import { lazy, memo, Suspense, useCallback, useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import InterviewsSkeleton from '@components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllPassedInterviewsQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice';
import { emptyInterviewTabsPictures } from '@utils/constants/emptyTabsPictures';
import { useGetSpecializationByUserIdQuery } from '@redux/api/slices/specialization/specializationApiSlice';
import { InterviewContainer } from '@components/UI/Interview';
import EmptyInterviewTab from '../EmptyInterviewTab';

const SideBar = lazy(() => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar/SideBar'));

const MemoizedSideBar = memo(SideBar);

const PassedInterviewsPage = () => {
  const { id } = useSelector((state) => state.auth.user.data);
  const [page, setPage] = useState(0);
  const { data: passedInterviews, isFetching, isLoading } = useGetAllPassedInterviewsQuery({ page, size: 5 });
  const [lastEventRef, setLastEventRef] = useState(null);
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
