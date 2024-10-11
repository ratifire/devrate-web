export const styles = {
  switcher: (theme) => ({
    '& .MuiPickersCalendarHeader-switchViewButton': {
      color: theme.palette.mode==="dark" ? theme.palette.text.white:theme.palette.text.darkGrey,
      
      '&:hover': {
        backgroundColor: theme.palette.mode==="dark" ? theme.palette.primary[100] : theme.palette.primary[300],
        borderRadius: 1,
      },
    },
    '& .MuiPickersArrowSwitcher-button': {
      color: theme.palette.mode==="dark" ? theme.palette.common.white : theme.palette.common.black,
       '&:hover': {
            backgroundColor: theme.palette.mode==="dark" ? theme.palette.primary[100] : theme.palette.primary[300],
          borderRadius: 1,
      },
    },
  }),
};
