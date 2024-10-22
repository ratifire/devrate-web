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
    backgroundColor: theme.palette.neutral[900],
  }),

  menuItem: (theme) => ({
    backgroundColor: theme.palette.neutral[900],
    '&:hover': {
      backgroundColor: theme.palette.neutral[800],
      color: theme.palette.primary[200],
    },
  }),
};
