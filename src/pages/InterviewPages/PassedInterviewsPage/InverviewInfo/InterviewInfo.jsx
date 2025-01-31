import { Box, Typography } from '@mui/material';
import { styles } from './InterviewInfo.styles';

const InterviewInfo = () => {
  return (
    <Box sx={styles.interviewInfoWrapper}>
      <Box sx={styles.interviewInfoTitleWrapper}>
        <Typography sx={styles.interviewInfoTitle} variant='h6'>
          Interview info
        </Typography>
        <Typography sx={styles.yearsAgo} variant='caption1'>
          3 years ago
        </Typography>
      </Box>
      <Typography sx={styles.date} variant='caption1'>
        03/06/2022 15:30
      </Typography>
      <Box sx={styles.interviewSpecializationTitleWrapper}>
        <Typography sx={styles.interviewSpecialization} variant='h6'>
          Frontend Developer
        </Typography>
        <Typography sx={styles.level} variant='subtitle2'>
          Level Junior
        </Typography>
      </Box>
      <Typography sx={styles.role} variant='body1'>
        Your role: respondent
      </Typography>
      <Box sx={styles.hostWrapper}>
        <Typography sx={styles.host} variant='body1'>
          Host:
        </Typography>
        <Typography sx={styles.hostName} variant='body1'>
          Oleh Koval
        </Typography>
      </Box>
      <Typography sx={styles.hostSpecialization} variant='caption1'>
        Middle Full stack Developer
      </Typography>
    </Box>
  );
};
export default InterviewInfo;
