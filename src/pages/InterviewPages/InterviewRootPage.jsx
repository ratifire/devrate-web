import { memo } from 'react';
import { Outlet } from 'react-router';
import InterviewHeader from '../../components/PageComponents/InterviewHeader';

const MemoizedInterviewHeader = memo(InterviewHeader);

const InterviewRootPage = () => {
  return (
    <>
      <MemoizedInterviewHeader />
      <Outlet />
    </>
  );
};

export default InterviewRootPage;
