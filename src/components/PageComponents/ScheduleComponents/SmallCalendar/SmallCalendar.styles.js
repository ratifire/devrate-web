export const styles = {
  switcher: (theme) => ({
    maxWidth: '290px',
    width: '100%',

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

    '& .MuiYearCalendar-root': {
      maxWidth: '290px',
      width: '100%',

      '&::-webkit-scrollbar': {
        width: 10,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.schedule.scroll.track,
        borderRadius: 8,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 6,
        backgroundColor: theme.palette.schedule.scroll.thumb,
      },
    },
  }),
};
