import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { styles } from './TitleFeedback.styles';
import React from 'react';

const TitleFeedback = ({ title, variant = 'subtitle2' }) => {
  return (
    <Typography sx={styles.title} variant={variant}>
      {title}
    </Typography>
  )
}

TitleFeedback.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default TitleFeedback;
