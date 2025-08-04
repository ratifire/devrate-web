import { lazy, memo, Suspense, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InterviewsSkeleton from '@components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllScheduledInterviewsQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice';
import { useGetSpecializationByUserIdQuery } from '@redux/api/slices/specialization/specializationApiSlice.js';
import { emptyInterviewTabsPictures } from '@utils/constants/emptyTabsPictures.js';
import { InterviewContainer } from '../../../components/UI/Interview';
import EmptyInterviewTab from '../EmptyInterviewTab/index.js';

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
  const isSpecializations = !!specializations?.length;

  const refHandler = useCallback(
    (el) => {
      if (el !== lastEventRef) {
        setLastEventRef(el);
      }
    },
    [lastEventRef]
  );
  /* eslint-disable */
  console.log('data', scheduledInterviews);
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

  if (isLoading) {
    return (
      <InterviewContainer>
        <InterviewsSkeleton />
      </InterviewContainer>
    );
  }

  if (!scheduledInterviews?.content?.length || !specializations?.length) {
    return (
      <EmptyInterviewTab
        isSpecializations={isSpecializations}
        svg={
          isSpecializations
            ? emptyInterviewTabsPictures.emptyScheduledPic
            : emptyInterviewTabsPictures.emptySpecialization.scheduled
        }
        tab='Scheduled'
      />
    );
  }

  return (
    <InterviewContainer>
      <Suspense fallback={<InterviewsSkeleton />}>
        <MemoizedSideBar interviews={scheduledInterviews?.content} refHandler={refHandler} />
      </Suspense>
    </InterviewContainer>
  );
};

export default ScheduledInterviewsPage;
