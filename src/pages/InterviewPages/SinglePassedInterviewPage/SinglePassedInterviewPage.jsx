import { useParams } from 'react-router';
import { Box } from '@mui/material';
import { useGetScheduledInterviewByIdQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice.js';
import { styles } from './SingleIPassednterviewPage.styles.js';

const SinglePassedInterviewPage = () => {
  const { interviewId } = useParams();
  const { data } = useGetScheduledInterviewByIdQuery({ interviewId });

  return (
    <Box sx={styles.container}>Сторінка списку сінгл пройденого інтервʼю - /interviews/passed/inteviewId {data}</Box>
  );
};

export default SinglePassedInterviewPage;
