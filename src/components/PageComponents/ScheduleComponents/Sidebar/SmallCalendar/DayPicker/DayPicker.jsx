import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateTime } from 'luxon';
import { DARK_THEME } from '../../../../../../utils/constants/Theme/theme';

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isHovered',
})(({ theme, isSelected, isHovered }) => ({
  borderRadius: '50%',
  margin: '0 2px',
  ...(isSelected && {
    backgroundColor: '#CEB0FA',
    color: '#1D1D1D',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary[300],
      color: theme.palette.primary.contrastText,
    },
  }),
  ...(isHovered && {
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: theme.palette.mode === DARK_THEME ? theme.palette.neutral[400] : theme.palette.neutral[100],
    },
    ...theme.applyStyles(DARK_THEME, {
      backgroundColor: theme.palette.primary[300],
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary[100],
      },
    }),
  }),
}));

const isInSameWeek = (dayA, dayB) => {
  if (dayB == null) {
    return false;
  }
  const dayALuxon = DateTime.fromJSDate(dayA.toJSDate());
  const dayBLuxon = DateTime.fromJSDate(dayB.toJSDate());
  return dayALuxon.weekNumber === dayBLuxon.weekNumber && dayALuxon.weekday !== 8;
};

const DayPicker = (props) => {
  const { day, selectedDay, hoveredDay, ...other } = props;

  return (
    <CustomPickersDay
      {...other}
      disableMargin
      day={day}
      isHovered={isInSameWeek(day, hoveredDay)}
      isSelected={isInSameWeek(day, selectedDay)}
      selected={false}
    />
  );
};

DayPicker.propTypes = {
  day: PropTypes.object.isRequired,
  selectedDay: PropTypes.object,
  hoveredDay: PropTypes.object,
};

export default DayPicker;
