export const styles = {
  switcher: (theme) => ({
    '& .MuiPickersCalendarHeader-switchViewButton': {
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.neutral[500],
        borderRadius: 1,
      },
    },
    '& .MuiPickersArrowSwitcher-button': {
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.neutral[500],
        borderRadius: 1,
      },
    },
  }),
};
