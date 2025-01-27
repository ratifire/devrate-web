import { useParams } from 'react-router';
import { useGetScheduledInterviewByIdQuery } from '../../../redux/interviews/scheduledInterviewsApiSlice.js';

const SingleScheduledInterviewPage = () => {
  const { interviewId } = useParams();
  const { data } = useGetScheduledInterviewByIdQuery({ interviewId });

  return <div>Сторінка списку сінгл заплановного інтервью - /interviews/scheduled/inteviewId {data}</div>;
};

export default SingleScheduledInterviewPage;
