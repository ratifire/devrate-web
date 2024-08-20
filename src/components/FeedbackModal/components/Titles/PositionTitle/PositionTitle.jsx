import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from './PositionTitles.styles';

const PositionTitle = ({ title, variant = 'subtitle2' }) => {
  return (
    <Typography sx={styles.title} variant={variant}>
      {title}
    </Typography>
  );
};

PositionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default PositionTitle;
