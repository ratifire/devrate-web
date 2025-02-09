import { Box, Paper } from '@mui/material';
import { styles } from './PassedInterviewsPage.styles';
import PassedInterview from './PassedInterview/PassedInterview.jsx';

const PassedInterviewsPage = () => {
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
