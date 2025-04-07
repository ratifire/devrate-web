export const styles = {
  pickers: {
    borderRadius: '50%',
    margin: '0 2px',
  },
  selected: (theme) => ({
    backgroundColor: theme.palette.schedule.dayPicker.selectedWeek,
    color: theme.palette.schedule.dayPicker.text,

    '&:hover, &:focus': {
      backgroundColor: theme.palette.schedule.dayPicker.hovered,
      color: theme.palette.primary.contrastText,
    },
  }),
  hovered: (theme) => ({
    backgroundColor: theme.palette.schedule.dayPicker.hovered,
    '&:hover': {
      backgroundColor: theme.palette.schedule.dayPicker.selectDay,
    },
  }),
};
