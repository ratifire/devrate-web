import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from './SubtitleFeedback.styles';

const SubtitleFeedback = ({ title, variant = 'subtitle2' }) => {
  return (
    <Typography sx={styles.title} variant={variant}>
      {title}
    </Typography>
  );
};

SubtitleFeedback.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default SubtitleFeedback;
