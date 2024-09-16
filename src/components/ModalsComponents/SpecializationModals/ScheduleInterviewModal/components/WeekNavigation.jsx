import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import React from 'react';
import PropTypes from 'prop-types';

const WeekNavigation = ({onWeekNav, weekTitle}) =>{


  return(
    <Box sx={styles.weekHeading}>
      <IconButton onClick={() => onWeekNav('prev')}>
        <ChevronLeft />
      </IconButton>
      <Typography variant="subtitle2">{weekTitle}</Typography>
      <IconButton onClick={() => onWeekNav('next')}>
        <ChevronRight />
      </IconButton>
    </Box>
  )
}

WeekNavigation.propTypes = {
  onWeekNav: PropTypes.func.isRequired,
  weekTitle: PropTypes.string.isRequired
}

export default WeekNavigation;