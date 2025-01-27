import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense } from 'react';
import { Outlet } from 'react-router';
import InterviewsSkeleton from '../../../components/UI/Skeleton/Pages/InterviewsSkeleton';
import { useGetAllPassedInterviewsQuery } from '../../../redux/interviews/passedInterviewsApiSlice.js';
import { styles } from './PassedInterviewsPage.styles';

// const data = [
//   {
//     eventTypeId: 1,
//     eventTitle: 'PHP Engineer',
//     level: 'Middle',
//     date: '03/06/2023 15:30',
//     role: 'Respondent',
//     hostId: '8881',
//     host: 'Olena Korol',
//   },
//   {
//     eventTypeId: 2,
//     eventTitle: 'Frontend Developer',
//     level: 'Junior',
//     date: '01/06/2023 11:00',
//     role: 'Інтерв’ювер',
//     hostId: '8882',
//     host: 'Iryne Nesterenko',
//   },
//   {
//     eventTypeId: 3,
//     eventTitle: 'BackEnd Developer',
//     level: 'Senior',
//     date: '11/03/2022 19:00',
//     role: 'Інтерв’ювер',
//     hostId: '8881',
//     host: 'Masha Okoli',
//   },
//   {
//     eventTypeId: 4,
//     eventTitle: 'Full Suck Developer',
//     level: 'Middle',
//     date: '15/12/2024 09:00',
//     role: 'Інтерв’ювер',
//     hostId: '8881',
//     host: 'Masha Okoli',
//   },
// ];

const SideBar = lazy(() => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar'));

const MemoizedSideBar = memo(SideBar);

const PassedInterviewsPage = () => {
  const { data: allInterviews } = useGetAllPassedInterviewsQuery({ page: 1, size: 10 });
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.interviewSideBar}>
          <Suspense fallback={<InterviewsSkeleton />}>
            <MemoizedSideBar data={allInterviews} />
          </Suspense>
        </Paper>
        <Outlet />
      </Box>
    </Container>
  );
};

export default PassedInterviewsPage;
