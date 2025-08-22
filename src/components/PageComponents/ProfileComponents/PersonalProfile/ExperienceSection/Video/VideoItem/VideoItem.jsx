import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useCallback, useEffect, useState } from 'react';
import InterviewPreviewVideo from '@components/PageComponents/InterviewsComponents/InterviewPreviewVideo/index.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import styles from './VideoItem.styles.js';

const VideoItem = ({ data }) => {
  const { name, hide } = data;
  const [hidden, setHidden] = useState(hide);
  const [isPlaying, setIsPlaying] = useState(false);

  const { openModal } = useModalController();
  const handlePlayPressed = useCallback(() => {
    openModal('videoModal', { isPlaying });
    setIsPlaying(true);
  }, []);
  useEffect(() => {
    setHidden(hide);
  }, [data]);

  const handlerClick = async () => {
    setHidden(!hidden);
  };

  const iconEye = !hidden ? (
    <VisibilityOutlinedIcon sx={styles.eye} />
  ) : (
    <VisibilityOffOutlinedIcon sx={styles.eyeHidden} />
  );

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
        <Box sx={styles.iconWrapper}>
          <IconButton sx={styles.icon} type='button' onClick={handlerClick}>
            {iconEye}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

VideoItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoItem;
