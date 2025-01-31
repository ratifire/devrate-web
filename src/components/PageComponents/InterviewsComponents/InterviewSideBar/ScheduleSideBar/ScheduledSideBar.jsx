import { Box, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetAllScheduledInterviewsQuery } from '../../../../../redux/interviews/scheduledInterviewsApiSlice.js';
import { styles } from '../InterviewSideBar.styles';
import ScheduledSideBarEvent from '../../InterviewSideBarEvent/ScheduledSideBarEvent/index.js';

const ScheduledSideBar = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [interviews, setInterviews] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { data: scheduledInterviews, isFetching } = useGetAllScheduledInterviewsQuery({ page, size: 5 });
  const lastEventRef = useRef(null); // Ref for the last InterviewSideBarEvent

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
      if (target.isIntersecting && !isFetching) {
        setPage((prevPage) => prevPage + 1); // Load the next page
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
    <Box sx={styles.container}>
      <Typography sx={styles.interviewTitle} variant='h4'>
        {t('interviews.sideBar.title')}
      </Typography>
      <Box sx={styles.scrollContainer}>
        {interviews?.length > 0 &&
          interviews.map((event, index) => (
            <ScheduledSideBarEvent
              key={event.id}
              ref={index === interviews.length - 1 ? lastEventRef : null}
              event={event}
            />
          ))}
      </Box>
    </Box>
  );
};

export default ScheduledSideBar;
