import { Box } from '@mui/material';
import styles from './Video.styles.js';
import VideoItem from './VideoItem/index.js';

const data = [
  {
    id: '1',
    name: 'React App та Vite',
    hide: true,
    url: 'https://www.youtube.com/embed/fTuRvSJOJdM',
  },
  {
    id: '2',
    name: 'React App та Vite',
    hide: false,
    url: 'https://www.youtube.com/embed/fTuRvSJOJdM',
  },
  {
    id: '3',
    name: 'React App та Vite',
    hide: true,
    url: 'https://www.youtube.com/embed/fTuRvSJOJdM',
  },
];

const Video = () => {
  return (
    <Box sx={styles.wrapper}>
      {data.map((item) => (
        <Box key={item.id} sx={styles.item}>
          <VideoItem data={item} />
        </Box>
      ))}
    </Box>
  );
};

export default Video;
