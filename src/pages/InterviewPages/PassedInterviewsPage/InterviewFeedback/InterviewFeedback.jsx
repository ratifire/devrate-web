import { Box, Paper, Typography } from '@mui/material';
import { styles } from './InterviewFeedback.styles';

const InterviewFeedback = () => {
  return (
    <Box sx={styles.interviewFeedbackWrapper}>
      <Typography sx={styles.interviewFeedbackTitle} variant='h6'>
        Interviewee`&#39;`s feedback
      </Typography>
      <Paper sx={styles.interviewFeedbackText}>
        Хочу висловити вдячність за професійний підхід і комфортну атмосферу під час співбесіди. Ваша комунікація була
        чіткою, і питання, які ви ставили, допомогли глибше розкрити мої навички та досвід. Хочу висловити вдячність за
        Читати більше...
      </Paper>
    </Box>
  );
};
export default InterviewFeedback;
