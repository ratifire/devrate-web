import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './DataTimeTitleFeedback.styles'

const DataTimeTitleFeedback = ({ title, variant = 'subtitle2' }) => {
  return (
    <Typography sx={styles.title} variant={variant}>{title}</Typography>
  )
}

DataTimeTitleFeedback.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
}

export default DataTimeTitleFeedback;
