import { Box } from '@mui/material';
import ReactPlayer from 'react-player';
import { selectModalData } from '@redux/slices/modal/modalSlice.js';
import { useSelector } from 'react-redux';
import { styles } from './VideoModal.styles.js';

const VideoModal = () => {
  const { isPlaying } = useSelector(selectModalData);

  return (
    <>
      <Box sx={styles.playerWrapper}>
        <ReactPlayer
          controls
          height='100%'
          playing={isPlaying}
          src={'https://skillzzy-video.s3.eu-north-1.amazonaws.com/Bot+Recorder-1755588883235.mp4'}
          width='100%'
          // onEnded={handleVideoEnded}
        />
      </Box>
    </>
  );
};
export default VideoModal;
