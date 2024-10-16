export const styles = {
  switcher: (theme) => ({
    '& .MuiPickersCalendarHeader-switchViewButton': {
      color: theme.palette.schedule.smallCalendar.switchViewButtonColor,
      '&:hover': {
        backgroundColor: theme.palette.schedule.smallCalendar.switchViewButtonBackgroundColor,
        borderRadius: 1,
      },
    },
    '& .MuiPickersArrowSwitcher-button': {
      color: theme.palette.schedule.smallCalendar.arrowSwitcherColor,
        '&:hover': {
         backgroundColor: theme.palette.schedule.smallCalendar.arrowSwitcherBackgroundColor,
          borderRadius: 1,
      },
    },
  }),
};
