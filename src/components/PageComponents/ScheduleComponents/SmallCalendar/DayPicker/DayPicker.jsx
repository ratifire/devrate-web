import PropTypes from 'prop-types';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { isInSameWeek } from '@components/PageComponents/ScheduleComponents/helpers';
import { styles } from './DayPicker.styles';

const DayPicker = ({ day, selectedDay, hoveredDay, ...other }) => {
  const isSelected = isInSameWeek(day, selectedDay);
  const isHovered = isInSameWeek(day, hoveredDay);

  const style = isHovered ? styles.hovered : isSelected ? styles.selected : styles.pickers;

  return <PickersDay {...other} disableMargin day={day} selected={false} sx={[styles.pickers, style]} />;
};

DayPicker.propTypes = {
  day: PropTypes.object.isRequired,
  selectedDay: PropTypes.object,
  hoveredDay: PropTypes.object,
};

export default DayPicker;
