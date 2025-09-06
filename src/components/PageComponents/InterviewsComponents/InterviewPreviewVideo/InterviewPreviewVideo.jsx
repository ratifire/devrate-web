import { Box, Typography, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import UserAvatar from '@components/UI/UserAvatar';
import { useTheme } from '@mui/material/styles';
import { styles } from './InterviewPreviewVideo.styles';

const InterviewPreviewVideo = ({
  interviewLevel,
  specialization,
  candidateFirstName,
  candidateLastName,
  candidateSrc,
  interviewerFirstName,
  interviewerLastName,
  interviewerSrc,
  onPlayPressed,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const candidateName = `${candidateFirstName} ${candidateLastName}`;
  const interviewerName = `${interviewerFirstName} ${interviewerLastName}`;

  return (
    <Box sx={styles.content(theme)}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.info}>
          <Typography
            sx={styles.label}
            variant='subtitle2'
          >{`${t('interviews.passedInterviews.interviewPreviewVideo.interviewLevel')} ${interviewLevel}`}</Typography>
          <Typography
            sx={styles.label}
            variant='subtitle2'
          >{`${t('interviews.passedInterviews.interviewPreviewVideo.specialization')} ${specialization}`}</Typography>
          <Typography
            sx={styles.label}
            variant='subtitle2'
          >{`${t('interviews.passedInterviews.interviewPreviewVideo.candidateName')} ${candidateName}`}</Typography>
          <Typography
            sx={styles.label}
            variant='subtitle2'
          >{`${t('interviews.passedInterviews.interviewPreviewVideo.interviewerName')} ${interviewerName}`}</Typography>
        </Box>

        <Box sx={styles.userIcon}>
          <UserAvatar
            radius='square'
            size='m'
            src={candidateSrc}
            userFirstName={candidateFirstName}
            userLastName={candidateLastName}
          />
          <UserAvatar
            radius='square'
            size='m'
            src={interviewerSrc}
            userFirstName={interviewerFirstName}
            userLastName={interviewerLastName}
          />
        </Box>
      </Box>
      <IconButton aria-label='play' sx={styles.playButton} onClick={onPlayPressed}>
        <svg fill='none' height='24' viewBox='0 0 20 24' width='20' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M2.22222 23.7535C1.73913 24.0657 1.24799 24.0813 0.748792 23.8004C0.249597 23.5194 0 23.098 0 22.536V1.46396C0 0.902034 0.249597 0.480591 0.748792 0.19963C1.24799 -0.0813309 1.73913 -0.0657218 2.22222 0.246457L19.3237 10.8293C19.7746 11.1103 20 11.5005 20 12C20 12.4995 19.7746 12.8897 19.3237 13.1707L2.22222 23.7535Z'
            fill='white'
          />
        </svg>
      </IconButton>
    </Box>
  );
};

InterviewPreviewVideo.propTypes = {
  interviewLevel: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  candidateFirstName: PropTypes.string.isRequired,
  candidateLastName: PropTypes.string.isRequired,
  candidateSrc: PropTypes.string,
  interviewerFirstName: PropTypes.string.isRequired,
  interviewerLastName: PropTypes.string.isRequired,
  interviewerSrc: PropTypes.string,
  onPlayPressed: PropTypes.func.isRequired,
};

InterviewPreviewVideo.defaultProps = {
  candidateSrc: null,
  interviewerSrc: null,
};

export default InterviewPreviewVideo;
