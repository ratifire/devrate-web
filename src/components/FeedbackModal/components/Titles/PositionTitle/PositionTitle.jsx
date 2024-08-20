import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { styles } from './PositionTitles.styles'
import React from 'react';

const PositionTitle = ({ title, variant = 'subtitle2' }) => {
  return (
    <Typography sx={styles.title} variant={variant}>{title}</Typography>
  )
}

PositionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
}


export default PositionTitle;
