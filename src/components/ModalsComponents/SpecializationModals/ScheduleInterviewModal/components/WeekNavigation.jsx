import { Box, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { styles } from './styles';

const WeekNavigation = ({ onWeekNav, weekTitle }) => {
  return (
    <Box sx={styles.weekHeading}>
      <IconButton onClick={() => onWeekNav('prev')}>
        <ChevronLeft />
      </IconButton>
      <Typography variant='subtitle2'>{weekTitle}</Typography>
      <IconButton onClick={() => onWeekNav('next')}>
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

WeekNavigation.propTypes = {
  onWeekNav: PropTypes.func.isRequired,
  weekTitle: PropTypes.string.isRequired,
};

export default WeekNavigation;
