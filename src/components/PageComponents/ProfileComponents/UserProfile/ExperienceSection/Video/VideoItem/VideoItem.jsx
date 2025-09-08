import { Box } from '@mui/material';
import InterviewPreviewVideo from '@components/PageComponents/InterviewsComponents/InterviewPreviewVideo/index.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { modalNames } from '@utils/constants/modalNames.js';
import styles from './VideoItem.styles.js';

const VideoItem = () => {
  const { openModal } = useModalController();

  const handlePlayPressed = () => openModal(modalNames.videoModal, { isPlaying: true });

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
      {/*<Box sx={styles.controlsInfo}>*/}
      {/*  <Typography variant='subtitle2'>{name}</Typography>*/}
      {/*</Box>*/}
    </Box>
  );
};

export default VideoItem;
