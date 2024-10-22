export const styles = {
  select: (theme) => ({
    width: '103px',
    height: '23px',
    fontSize: '12px',
    color: theme.palette.primary[200],
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[200],
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[200],
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[200],
      borderWidth: '2px',
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
