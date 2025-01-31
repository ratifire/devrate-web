import { Box, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from '../InterviewSideBar.styles.js';
import { useGetAllPassedInterviewsQuery } from '../../../../../redux/interviews/passedInterviewsApiSlice.js';
import PassedSideBarEvent from '../../InterviewSideBarEvent/PassedSideBarEvent';

const PassedInterviewSideBar = () => {
  const { t } = useTranslation();

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
            <PassedSideBarEvent
              key={event.id}
              ref={index === interviews.length - 1 ? lastEventRef : null}
              event={event}
            />
          ))}
        {!hasMore && <Typography>No more data to load</Typography>}
      </Box>
    </Box>
  );
};

export default PassedInterviewSideBar;
