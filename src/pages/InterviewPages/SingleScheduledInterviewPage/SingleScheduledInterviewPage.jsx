import { useParams } from 'react-router';
import { Box } from '@mui/material';
import { useGetScheduledInterviewByIdQuery } from '../../../redux/interviews/scheduledInterviewsApiSlice.js';
import { styles } from './SingleScheduledInterviewPage.styles.js';

const SingleScheduledInterviewPage = () => {
  const { interviewId } = useParams();
  const { data } = useGetScheduledInterviewByIdQuery({ interviewId });

  return (
    <Box sx={styles.container}>
      Сторінка списку сінгл заплановного інтервью - /interviews/scheduled/inteviewId {data}
    </Box>
  );
};

export default SingleScheduledInterviewPage;
