import { AppBar } from '@mui/material';
import { Link } from 'react-router';
import links from '../../../router/links';
import styles from './InterviewHeader.styles';

const InterviewHeader = () => {
  return (
    <AppBar component='header' position={'static'} sx={styles.header}>
      <Link to={links.scheduledInterviews}>Scheduled</Link>
      <Link to={links.passedInterviews}>Passed</Link>
      <Link to={links.interviewRequests}>Requests</Link>
    </AppBar>
  );
};
export default InterviewHeader;
