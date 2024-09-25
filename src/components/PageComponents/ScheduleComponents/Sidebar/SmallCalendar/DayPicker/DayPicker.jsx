import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateTime } from 'luxon';

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isHovered',
})(({ theme, isSelected, isHovered }) => ({
  borderRadius: '50%',
  margin: '0 2px',
  ...(isSelected && {
    backgroundColor: '#CEB0FA',
    color: '#1D1D1D',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  }),
  ...(isHovered && {
    // backgroundColor: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: '#69696B',
    },
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.primary.dark,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary.dark,
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
      day={day}
      disableMargin
      selected={false}
      isSelected={isInSameWeek(day, selectedDay)}
      isHovered={isInSameWeek(day, hoveredDay)}
    />
  );
};

DayPicker.propTypes = {
  day: PropTypes.object.isRequired,
  selectedDay: PropTypes.object,
  hoveredDay: PropTypes.object,
};

export default DayPicker;
