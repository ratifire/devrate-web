export const styles = {
  select: (theme) => ({
    width: '103px',
    height: '23px',
    fontSize: '12px',
    color: theme.palette.specialization.dropDown.color,
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.specialization.dropDown.color,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.specialization.dropDown.color,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.specialization.dropDown.color,
      borderWidth: '2px',
    },
    '& svg': {
      color: theme.palette.specialization.dropDown.color,
    },
  }),
  dropdownPaper: (theme) => ({
    backgroundColor: theme.palette.modalDropdown.backgroundColor,
    color: theme.palette.modalDropdown.color,
  }),

  menuItem: (theme) => ({
    color: theme.palette.modalDropdown.color,
    '&:hover': {
      backgroundColor: theme.palette.modalDropdown.hoverBgColor,
      color: theme.palette.modalDropdown.color,
    },
    '&:active': {
      backgroundColor: theme.palette.modalDropdown.hoverBgColor,
      color: theme.palette.action.active
    }
  }),
};
