import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import InterviewPreviewVideo from '@components/PageComponents/InterviewsComponents/InterviewPreviewVideo/index.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import styles from './VideoItem.styles.js';

const VideoItem = ({ data }) => {
  const { name } = data;
  const [isPlaying, setIsPlaying] = useState(false);
  const { openModal } = useModalController();

  const handlePlayPressed = useCallback(() => {
    openModal('videoModal', { isPlaying });
    setIsPlaying(true);
  }, []);

  return (
    <Box sx={styles.wrapper}>
      <InterviewPreviewVideo
        shouldShowVisibilityControl
        candidateFirstName={'Ratifire'}
        candidateLastName={'First'}
        candidateSrc={undefined}
        interviewLevel={'Junior'}
        interviewerFirstName={'John'}
        interviewerLastName={'Rate'}
        interviewerSrc={undefined}
        role={'INTERVIEWER'}
        specialization={'Frontend Developer'}
        onPlayPressed={handlePlayPressed}
      />
      <Box sx={styles.controlsInfo}>
        <Typography variant='subtitle2'>{name}</Typography>
      </Box>
    </Box>
  );
};

VideoItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoItem;
