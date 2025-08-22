import { Box, Typography } from '@mui/material';
import { styles } from '@pages/InterviewPages/SinglePassedInterviewPage/SingleIPassednterviewPage.styles.js';
import ReactPlayer from 'react-player';
import { selectModalData } from '@redux/slices/modal/modalSlice.js';
import { useSelector } from 'react-redux';
// import { styles } from './VideoModal.styles.js';

const VideoModal = () => {
  const modalData = useSelector(selectModalData);
  // eslint-disable-next-line no-console
  console.log(modalData);
  return (
    <>
      <Typography variant='h6'>Назва відео</Typography>
      <Box sx={styles.playerWrapper}>
        <ReactPlayer
          controls
          height='100%'
          // playing={isPlaying}
          src={'https://skillzzy-video.s3.eu-north-1.amazonaws.com/Bot+Recorder-1755588883235.mp4'}
          style={styles.interviewVideo}
          width='100%'
          // onEnded={handleVideoEnded}
        />
      </Box>
    </>
  );
};
export default VideoModal;
