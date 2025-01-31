import { Box, Paper } from '@mui/material';
import { styles } from './PassedInterviewsPage.styles';
// import { useParams } from 'react-router';
import PassedInterview from './PassedInterview/PassedInterview.jsx';

const PassedInterviewsPage = () => {
  // let params = useParams();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.interviews}>Interview list</Paper>
        <Box sx={styles.interview}>
          <PassedInterview />
        </Box>
      </Box>
    </Box>
  );
};

export default PassedInterviewsPage;
