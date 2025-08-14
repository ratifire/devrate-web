import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useEffect, useState } from 'react';
import styles from './VideoItem.styles.js';

const VideoItem = ({ data }) => {
  const { name, hide } = data;
  const [hidden, setHidden] = useState(hide);

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
      <Box>nhfkfkf</Box>
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
